import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { maximizeWindow, minimizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, removeWindow, setInFront } from '../state/windows/windows.actions';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit {

  constructor(private store: Store<any>) { }
  
  @ViewChild('window') window! : ElementRef

  windows$ = this.store.select('windows')
  minimizeds$ = this.store.select('minimizeds')

  @Input() name! : string
  @Input() showName! : string
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
      showName : 'Videos',
      name : 'videos',
    },
    {
      showName : 'Music',
      name : 'music',
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

  onOpenNavigationPaneItem(item : string, minimizeds : any) : any {
    if (['downloads', 'system', 'sd'].includes(item)) return this.onOpenNavigationPaneItem('access-denied', minimizeds)
    if (minimizeds.includes(window)) {
      this.store.dispatch(maximizeWindow({ window : item }))
    }
    else {
      this.store.dispatch(addWindow({ window : item }))
    }
    this.store.dispatch(setInFront({ window : item }))
  }

  isFolder() {
    return [
      'alumni',
      'documents',
      'events',
      'gallery',
      'images',
      'music',
      'team',
      'videos'
    ].includes(this.name.toLowerCase())
  }

  getImgUrl(name : string) {
    switch (name.toLowerCase()) {
      case 'gallery':
      case 'team':
      case 'alumni':
      case 'events':
      case 'documents':
      case 'images':
      case 'music':
      case 'videos':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1024px-OneDrive_Folder_Icon.svg.png'
      case 'cl':
        return 'https://www.freeiconspng.com/thumbs/command-line-icon/command-line-icon-1.png'
      case 'image':
        return 'https://www.freeiconspng.com/uploads/multimedia-photo-icon-31.png'
      case 'portfolio':
        return 'https://cdn-icons-png.flaticon.com/512/1454/1454827.png'
      case 'about':
        return 'https://cyliis.ro/assets/LogoCyliis.png'
      default:
        return 'https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png'
    }
  }
  
  isUnresizeble() {
    return ['portfolio', 'event'].includes(this.name.toLowerCase()) 
  }
}
