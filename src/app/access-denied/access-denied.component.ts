import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeWindow } from '../state/windows/windows.actions';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onClose() {
    this.store.dispatch(removeWindow({ window : 'access-denied' }))
  }



}
