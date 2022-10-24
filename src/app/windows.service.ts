import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { setEvent } from './state/event/event.actions';
import { setImage } from './state/image/image.actions';
import { setMember } from './state/member/member.actions';
import { maximizeWindow } from './state/minimizeds/minimizeds.actions';
import {
  addWindow,
  removeWindow,
  setInFront,
} from './state/windows/windows.actions';

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  static injector: Injector;
  minimizeds: any;
  constructor(private store: Store<any>) {
    this.store.select('minimizeds').subscribe((m) => (this.minimizeds = m));
  }

  closeWindow(window: any) {
    this.store.dispatch(removeWindow({ window: window.toLowerCase() }));
  }

  openWindow(window: any): void {
    if (['downloads', 'system', 'sd'].includes(window))
      return this.openWindow('access-denied');
    if (this.minimizeds.includes(window)) {
      this.store.dispatch(maximizeWindow({ window }));
    } else {
      this.store.dispatch(addWindow({ window }));
    }
    this.store.dispatch(setInFront({ window }));
  }

  openImage(image: any) {
    this.openWindow('image');
    this.store.dispatch(setImage({ image }));
  }

  openEvent(event: any) {
    this.openWindow('event');
    this.store.dispatch(setEvent({ event }));
  }

  openPortfolio(portfolio: any) {
    this.openWindow('portfolio');
    this.store.dispatch(setMember({ member: portfolio }));
  }

  getIcon(name: string) {
    switch (name.toLowerCase()) {
      case 'gallery':
      case 'team':
      case 'alumni':
      case 'events':
        return 'assets/icons/folder.png';
      case 'images':
        return 'assets/icons/image.png';
      case 'cl':
        return 'assets/icons/cl.png';
      case 'documents':
        return 'assets/icons/documents.png';
      case 'image':
        return 'assets/icons/image.png';
      case 'portfolio':
        return 'assets/icons/portfolio.png';;
      case 'about':
        return 'assets/icons/info.png';
      case 'event':
        return 'assets/icons/event.png';
      case 'access-denied':
        return 'assets/icons/error.png';
      default:
        return 'assets/icons/settings.png';
    }
  }
}
