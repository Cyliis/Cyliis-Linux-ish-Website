import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeWindow } from '../state/windows/windows.actions';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor(private store: Store<any>) { }
  
  @ViewChild('window') window! : ElementRef

  @Input() name! : string

  ngOnInit(): void {
  }

  onClose() {
    this.store.dispatch(removeWindow({window : this.name.toLowerCase()}))
  }

  onFullScreen() {
  }

  onMinimalize() {

  }

}
