import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, interval } from 'rxjs';
import { maximizeWindow, minimizeWindow } from '../state/minimizeds/minimizeds.actions';
import { removeWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private store: Store<any>, private windowsService : WindowsService) { }

  windows$ = this.store.select("windows")
  minimizeds$ = this.store.select("minimizeds")

  time$ = new BehaviorSubject(new Date())

  list : string[] = []
  ngOnInit(): void {
    interval(1000).subscribe(() => this.time$.next(new Date()))
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

  onMaximize(window : string, minimizeds : any, selected : any, e : MouseEvent) {
    if (e.which == 2) return this.windowsService.closeWindow(window)
    if (minimizeds.includes(window) || !selected) this.store.dispatch(maximizeWindow({window}))
    else this.store.dispatch(minimizeWindow({window}))
    this.store.dispatch(setInFront({ window }))
  }

  onClose(window : string) {
    this.store.dispatch(removeWindow({window}))
  }

  onOpenSettings() {
    this.windowsService.openWindow('settings')
  }

  onOpenAbout() {
    this.windowsService.openWindow('about')
  }

  getImgUrl(window : string) {
    return this.windowsService.getIcon(window)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  getTime(time : Date) : string {
    return `${time.getHours()}:${time.getMinutes().toString().length == 1  ? '0' : '' }${time.getMinutes()}`
  }

  getDayName(time : Date) : string {
    let days = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.']
    return  days[time.getDay()]
  }

  getDate(time : Date) : string {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return  `${time.getDate()} ${days[time.getDay()]} ${time.getFullYear()}`
  }
}
