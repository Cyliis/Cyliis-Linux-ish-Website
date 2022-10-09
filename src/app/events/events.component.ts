import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setEvent } from '../state/event/event.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { events } from './events.data';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private store : Store<any>) { }

  events = [...events]
  minimizeds$ = this.store.select("minimizeds")

  ngOnInit(): void {
  }

  onOpen(event : any, minimizeds : any) {
    if (minimizeds.includes('event')) {
      this.store.dispatch(maximizeWindow({ window : 'event' }))
    }
    else {
      this.store.dispatch(addWindow({ window : 'event' }))
    }
    this.store.dispatch(setEvent({ event }))
    this.store.dispatch(setInFront({ window : 'event' }))
  }

}
