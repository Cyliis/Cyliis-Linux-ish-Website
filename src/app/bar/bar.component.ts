import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { maximizeWindow, minimizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, removeWindow, setInFront } from '../state/windows/windows.actions';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  windows$ = this.store.select("windows")
  minimizeds$ = this.store.select("minimizeds")

  list : string[] = []
  ngOnInit(): void {
    this.windows$.subscribe(
      (res) => {
        if (!this.list.length) this.list = [...res]
        if (res.length != this.list.length) {
          if (res.length > this.list.length) {
            this.list.push(res[res.length - 1])
          }
          else {
            this.list = this.list.filter((el : string) => res.includes(el))
          }
        }
      })
  }

  onMaximize(window : string, minimizeds : any) {
    if (minimizeds.includes(window)) this.store.dispatch(maximizeWindow({window}))
    else this.store.dispatch(minimizeWindow({window}))
    this.store.dispatch(setInFront({ window }))
  }

  onClose(window : string) {
    this.store.dispatch(removeWindow({window}))
  }

  onOpenSettings(minimizeds : any) {
    if (minimizeds.includes('settings')) {
      this.store.dispatch(maximizeWindow({ window : 'settings' }))
    }
    else {
      this.store.dispatch(addWindow({ window : 'settings' }))
    }
  }

  onOpenAbout(minimizeds : any) {
    if (minimizeds.includes('about')) {
      this.store.dispatch(maximizeWindow({ window : 'about' }))
    }
    else {
      this.store.dispatch(addWindow({ window : 'about' }))
    }
  }

  getImgUrl(window : string) {
    switch (window) {
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}
