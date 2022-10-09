import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setEvent } from '../state/event/event.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';
import { events } from './events.data';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }

  events = [...events]

  ngOnInit(): void {
  }

  onOpen(event : any) {
    this.windowsService.openEvent(event)
  }

}
