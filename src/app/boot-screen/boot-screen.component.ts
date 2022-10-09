import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boot-screen',
  templateUrl: './boot-screen.component.html',
  styleUrls: ['./boot-screen.component.scss']
})
export class BootScreenComponent implements OnInit {

  constructor() { }
  @Input() loaded! : any
  @Output() boot = new EventEmitter()

  ngOnInit(): void {
  }


}
