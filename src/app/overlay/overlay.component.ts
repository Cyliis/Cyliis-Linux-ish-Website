import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, map, Subject, tap, timer } from 'rxjs';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(private store: Store<any>) { }

  windows$ = this.store.select("windows")
  minimizeds$ = this.store.select("minimizeds")
  
  notificationsSubject = new BehaviorSubject<any>([])
  notifications$ = this.notificationsSubject.pipe(
    map((item : any) : any => {
      let exceptionsRaw = localStorage.getItem('exceptions')
      let exceptions : any = JSON.parse(exceptionsRaw ? exceptionsRaw : '[]')
      if (!Array.isArray(exceptions)) return item
      return item.filter((el : any) => {
        return !exceptions.includes(el.id)
      })
    })
  )


  onClose(exception : string, notificationRef : any) {
    let exceptionsRaw = localStorage.getItem('notifications')
    let exceptions : any = JSON.parse(exceptionsRaw ? exceptionsRaw : '[]')
    if (!Array.isArray(exceptions)) exceptions = []
    localStorage.setItem('exceptions',
      JSON.stringify([...exceptions, exception])
    )
    notificationRef.remove()
  }


  ngOnInit(): void {
    this.notificationsSubject.next(
      [{
        title: 'CyQuiz',
        imageUrl: '/assets/events/9.png',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ut?',
        url: 'https://forms.gle/A1qLzVcnAJxYFCMy6',
        id: '23r53242'
      }]
    )
  }

}
