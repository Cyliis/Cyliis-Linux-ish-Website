import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { maximizeWindow, minimizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, removeWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit {

  constructor(private store: Store<any>, private windowsService : WindowsService) { }
  
  @ViewChild('window') window! : ElementRef

  windows$ = this.store.select('windows')
  minimizeds$ = this.store.select('minimizeds')

  @Input() name! : string
  @Input() showName! : string
  @Input() error : boolean = false
  @Input() console : boolean = false
  fullscreen : boolean = false

  navigationPaneItems = [
    {
      showName : 'Downloads',
      name : 'downloads',
    },
    {
      showName : 'Documents',
      name : 'documents',
    },
    {
      showName : 'Images',
      name : 'images',
    },
    {
      showName : 'System',
      name : 'system',
    },
    {
      showName : 'SD Card',
      name : 'sd',
    },
  ]

  ngAfterViewInit(): void {
    let marginTop = Math.floor(Math.random() * 10);
    let marginLeft = Math.floor(Math.random() * 10) + 30
    let window: any = document.querySelector(`app-${this.name.toLowerCase()} .window`)
    window.style.transform = `translateX(${marginLeft}vw)` 
    window.style.transform += `translateY(${marginTop}vh)` 
  }

  onClose() {
    this.store.dispatch(removeWindow({window : this.name.toLowerCase()}))
  }

  onFullScreen() {
    if (this.isUnresizeble()) return
    this.fullscreen = !this.fullscreen
    document.querySelector(`app-${this.name.toLowerCase()} .window`)?.classList.toggle('fullscreen')
  }

  onMinimalize() {
    this.store.dispatch(minimizeWindow({window : this.name.toLowerCase()}))
  }

  onSetInFront() {
    this.store.dispatch(setInFront({window : this.name.toLowerCase()}))
  }

  onDragStart() {
    if (this.fullscreen) {
      this.fullscreen = false
      document.querySelector(`app-${this.name.toLowerCase()} .window`)?.classList.remove('fullscreen')
    }
  }

  onOpenNavigationPaneItem(item : string) {
    this.windowsService.openWindow(item)
  }

  isFolder() {
    return [
      'alumni',
      'documents',
      'events',
      'gallery',
      'images',
      'team',
    ].includes(this.name.toLowerCase())
  }

  getImgUrl(name : string) {
    return this.windowsService.getIcon(name)
  }
  
  isUnresizeble() {
    return ['portfolio', 'event', 'access-denied'].includes(this.name.toLowerCase()) 
  }
}
