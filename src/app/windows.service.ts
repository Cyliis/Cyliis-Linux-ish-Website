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
  
  openWindow(window : any) : any {
    if (['downloads', 'system', 'sd'].includes(window)) return this.openWindow('access-denied')
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

  getIcon(name : string) {
    switch (name.toLowerCase()) {
      case 'gallery':
      case 'team':
      case 'alumni':
      case 'events':
      case 'documents':
      case 'images':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1024px-OneDrive_Folder_Icon.svg.png'
      case 'cl':
        return 'https://www.freeiconspng.com/thumbs/command-line-icon/command-line-icon-1.png'
      case 'image':
        return 'https://www.freeiconspng.com/uploads/multimedia-photo-icon-31.png'
      case 'portfolio':
        return 'https://cdn-icons-png.flaticon.com/512/1454/1454827.png'
      case 'about':
        return 'https://cyliis.ro/assets/LogoCyliis.png'
      case 'access-denied':
        return 'https://cdn-icons-png.flaticon.com/512/221/221755.png'
      default:
        return 'https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png'
    }
  }
}
