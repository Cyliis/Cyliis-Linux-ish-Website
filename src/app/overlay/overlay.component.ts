import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(private store: Store<any>) { }

  windows$ = this.store.select("windows")
  minimizeds$ = this.store.select("minimizeds")
  
  ngOnInit(): void {
  }

}
