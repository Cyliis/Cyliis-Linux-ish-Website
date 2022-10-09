import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { setEvent } from './state/event/event.actions';
import { setImage } from './state/image/image.actions';
import { setMember } from './state/member/member.actions';
import { maximizeWindow } from './state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from './state/windows/windows.actions';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {
  static injector: Injector;
  minimizeds : any
  constructor(private store : Store<any>) {
    this.store.select('minimizeds').subscribe((m) => this.minimizeds = m)
  }
  
  openWindow(window : any) {
      if (this.minimizeds.includes(window)) {
        this.store.dispatch(maximizeWindow({ window }))
      }
      else {
        this.store.dispatch(addWindow({ window }))
      }
      this.store.dispatch(setInFront({ window }))
  }

  openImage(image : any) {
      this.openWindow('image')
      this.store.dispatch(setImage({image}))
  }

  openEvent(event : any) {
      this.openWindow('event')
      this.store.dispatch(setEvent({event}))
  }

  openPortfolio(portfolio : any) {
      this.openWindow('portfolio')
      this.store.dispatch(setMember({member : portfolio}))
  }
}
