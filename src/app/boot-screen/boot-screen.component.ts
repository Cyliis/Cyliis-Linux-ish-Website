import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
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
  
  selected : number = 0

  content : string = `
[       1.101853] Loading<br>`

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event : any) {
    console.dir(event)
    if (event.key == "ArrowUp" || event.key == "ArrowDown") this.selected = this.selected ? 0 : 1
    else if (event.key == "Enter") {
      if (this.selected) this.boot.emit()
      else this.openOldSite()
    }
  }
  ngOnInit(): void {
    timer(1000).subscribe(() => this.content += '[       1.101853] Lorem ipsum dolor sit amet ERROR<br>')
    timer(2000).subscribe(() => this.content += '[       1.101853] Lorem ipsum dolor sit amet ERROR<br>')
    timer(3000).subscribe(() => this.content += '[       1.101853] Lorem ipsum dolor sit amet ERROR<br>')
    timer(5000).subscribe(() => this.loaded = true)
  }

  openOldSite() {
    location.href = "http://cyliis.ro"
  }
}
