import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { minimizeWindow } from '../state/minimizeds/minimizeds.actions';
import { removeWindow } from '../state/windows/windows.actions';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.scss']
})
export class ClComponent implements OnInit, AfterViewInit {

  constructor(private store: Store<any>) { }
  
  @ViewChild('window') window! : ElementRef
  @ViewChild('consoleInput') consoleInput! : ElementRef

  content : string = `
  CyOS [Version 10.0.22000.978]<br>
  (c) CyLIIS. Toate drepturile rezervate.
  `
  init = true
  dir = `CyOS:\\>`
  fullscreen : boolean = false

  ngOnInit(): void {
    let marginTop = Math.floor(Math.random() * 10);
    let marginLeft = Math.floor(Math.random() * 10) + 30
    let window: any = document.querySelector(`app-cl .window`)
    window.style.transform = `translateX(${marginLeft}vw)` 
    window.style.transform += `translateY(${marginTop}vh)` 
  }

  ngAfterViewInit(): void {
    timer(10).subscribe(() => this.setInputFocus())
  }

  setInputFocus() {
    console.log('a')
    this.consoleInput.nativeElement.focus()
  }

  onClose() {
    this.store.dispatch(removeWindow({window : 'cl'}))
  }

  onFullScreen() {
    this.fullscreen = !this.fullscreen
    document.querySelector(`app-cl .window`)?.classList.toggle('fullscreen')
  }

  onMinimalize() {
    this.store.dispatch(minimizeWindow({window : 'cl'}))
  }

  onInput(e : any) {
    if (e.key == "Enter") {
      if (this.init) {
        this.content += `<p></p>${this.dir}${e.target.value}<br>`
        this.init = false
      }
      else this.content += `${this.dir}${e.target.value}<br>`
      if (e.target.value.trim()) this.resolveCommand(e.target.value)
        
      e.target.value = ''
    }
  }

  resolveCommand(command : string) {
    if (command == 'cls'){
      this.content = `<p></p>`
    }
    else if (command == 'ls') {
      this.content += `
      <pre>09/18/2022  01:25 PM    DIR          .</pre>
      <pre>09/18/2022  01:25 PM    DIR          ..</pre>
      <pre>09/18/2022  01:25 PM    DIR          Desktop</pre>
      `
    }
    else if (command == 'help') {
      this.content += `
      <pre>CLS        Clears the screen.</pre>
      <pre>DIR        Displays a list of files and subdirectories in a directory.</pre>
      <pre>SHUTDOWN   Shutdown of machine.</pre>
      `
    }
    else if (command == 'shutdown') {
      var myWindow : any = window.open("", "_self");
      myWindow.document.write("");
      timer(1000).subscribe(() => myWindow.close())
    }
    else {
      this.content += `'${command}' is not recognized as an internal or external command,
      operable program or batch file.`
    }
    this.content += "<p></p>"
  }
}
