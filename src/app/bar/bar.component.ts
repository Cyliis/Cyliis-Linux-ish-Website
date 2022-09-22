import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow } from '../state/windows/windows.actions';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  minimizeds$ = this.store.select("minimizeds")
  
  ngOnInit(): void {

  }

  onMaximize(window : string) {
    this.store.dispatch(maximizeWindow({window}))
  }

  onOpenSettings(minimizeds : any) {
    if (minimizeds.includes('settings')) {
      this.store.dispatch(maximizeWindow({ window : 'settings' }))
    }
    else {
      this.store.dispatch(addWindow({ window : 'settings' }))
    }
  }

}
