import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-boot-screen',
  templateUrl: './boot-screen.component.html',
  styleUrls: ['./boot-screen.component.scss']
})
export class BootScreenComponent implements OnInit {

  constructor() { }
  @Output() boot = new EventEmitter()

  loaded : boolean = false

  content! : string
  ngOnInit(): void {
  }


}
