import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { minimizeWindow } from '../state/minimizeds/minimizeds.actions';
import { removeWindow, setInFront } from '../state/windows/windows.actions';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit {

  constructor(private store: Store<any>) { }
  
  @ViewChild('window') window! : ElementRef

  windows$ = this.store.select('windows')

  @Input() name! : string
  @Input() console : boolean = false
  fullscreen : boolean = false

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
}
