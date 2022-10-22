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

  content : string = `
[       1.101853] Loading<br>`

  ngOnInit(): void {
    timer(1000).subscribe(() => this.content += '[       1.101853] Lorem ipsum dolor sit amet ERROR<br>')
    timer(2000).subscribe(() => this.content += '[       1.101853] Lorem ipsum dolor sit amet ERROR<br>')
    timer(3000).subscribe(() => this.content += '[       1.101853] Lorem ipsum dolor sit amet ERROR<br>')
    timer(5000).subscribe(() => this.loaded = true)
  }


}
