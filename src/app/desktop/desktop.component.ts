import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow } from '../state/windows/windows.actions';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  minimizeds$ = this.store.select("minimizeds")

  ngOnInit(): void {
  }

  onOpen(window : string, minimizeds : any) {
    if (minimizeds.includes(window)) {
      this.store.dispatch(maximizeWindow({ window }))
    }
    else {
      this.store.dispatch(addWindow({ window }))
    }
  }



}
