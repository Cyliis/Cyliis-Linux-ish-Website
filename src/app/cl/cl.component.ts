import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addWindow, removeWindow } from '../state/windows/windows.actions';
import { BehaviorSubject, timer } from 'rxjs';
import { structure } from './folder-structure.data';
import { f } from './sda';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.scss']
})
export class ClComponent implements OnInit, AfterViewInit {

  constructor(private store: Store<any>) { }

  @ViewChild('consoleInput') consoleInput! : ElementRef

  content : string = `
  CyOS [Version 10.0.22000.978]<br>
  (c) CyLIIS. Toate drepturile rezervate.
  `

  folderStructure = structure
  
  folderIndex : any = 0

  init = true

  dir$ = new BehaviorSubject(this.folderStructure[this.folderIndex].dir)

  title = "CyCL"
  fullscreen : boolean = false

  inputs = ['']
  indexOfInput = 0

  ngOnInit(): void {
    f()
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
    this.consoleInput.nativeElement.focus()
  }

  onInput(e : any) {
    if (e.key == "Enter") {
      if (this.init) {
        this.content += `<p></p>${this.dir$.value}${e.target.value}<br>`
        this.init = false
      }
      else this.content += `${this.dir$.value}${e.target.value}<br>`
      if (e.target.value.trim()) this.resolveCommand(e.target.value.split(" "))
        
      this.inputs[this.inputs.length - 1] = e.target.value
      this.indexOfInput = this.inputs.length
      this.inputs.push('')
      e.target.value = ''
    }
    else if (e.keyCode == 38 && this.indexOfInput) {
      this.indexOfInput--
    }
    else if (e.keyCode == 40 && this.indexOfInput != (this.inputs.length - 1)) {
      this.indexOfInput++
    }
  }

  resolveCommand(commands : any) {
    let app = (<any>this.folderStructure[this.folderIndex].folders).find((el : any) => {
      return el.showText.toLowerCase() == commands.join(" ").toLowerCase()
    })
    let command = commands.shift().toLowerCase()
    if (app?.exec) {
      app?.exec()
    }
    else if (command == 'cls'){
      this.content = `<p></p>`
    }
    else if (command == 'exit'){
      this.store.dispatch(removeWindow({window : 'cl'}))
    }
    else if (command == 'ls') {
      this.folderStructure[this.folderIndex].folders.forEach((el) => {
        this.content += `<pre>26/02/2004  01:25 PM    ${el.folder ? 'DIR' : '   '}          ${el.showText}</pre>`
      })
    }
    else if (command == 'cd') {
      this.cd(commands.join(""))
    }
    else if (command == 'help') {
      this.content += `
      <pre>BGIMAGE    Sets desktop background image.</pre>
      <pre>CD         Displays the name of or changes the current directory.</pre>
      <pre>CLS        Clears the screen.</pre>
      <pre>COLOR      Sets system color.</pre>
      <pre>DEL        Deletes one or more files.</pre>
      <pre>ECHO       Displays messages, or turns command echoing on or off.</pre>
      <pre>ERASE      Clears the screen.</pre>
      <pre>EXIT       Quits the CyCL program (command interpreter).</pre>
      <pre>FORMAT     Formats a disk for use with CyOS.</pre>
      <pre>FTYPE      Displays or modifies file types used in file extension associations.</pre>
      <pre>HELP       Provides Help information for CyOS commands.</pre>
      <pre>MD         Creates a directory.</pre>
      <pre>MKDIR      Creates a directory.</pre>
      <pre>MKLINK     Creates Symbolic Links and Hard Links.</pre>
      <pre>RD         Removes a directory.</pre>
      <pre>RMDIR      Removes a directory.</pre>
      <pre>SHUTDOWN   Shutdown of machine.</pre>
      <pre>TIME       Displays or sets the system time.</pre>
      <pre>TITLE      Sets the window title for a CyCL session.</pre>
      <pre>VER        Displays the CyOS version.</pre>
      `
    }
    else if (command == 'shutdown') {
      var myWindow : any = window.open("", "_self");
      myWindow.document.write("");
      localStorage.setItem('boot', '')
      timer(1000).subscribe(() => myWindow.close())
    }
    else if (command == 'title') {
      this.title = commands[1]
    }
    else if (command == 'time') {
      this.content += new Date()
    }
    else if (command == 'bgimage') {
      if (commands[0] ) {
        if (commands[0] >= 0 && commands[0] < 7) this.setBackgroundImage(commands[0])
        else this.content += 'Invalid Value'
      }
      else {
        this.content += `
          0 = https://i1.wp.com/mir-s3-cdn-cf.behance.net/project_modules/1400/9bc27292880429.5e569ff84e4d0.gif<br>
          1 = https://www.gifcen.com/wp-content/uploads/2022/04/wallpaper-gif-4.gif<br>
          2 = https://i.pinimg.com/originals/5d/16/b2/5d16b293438a635ecfcfa78596cad135.gif<br>
          3 = https://c.tenor.com/zMdZBjJ7gPkAAAAd/aesthetic-wallpaper.gif<br>
          4 = https://wallpapercave.com/wp/wp3684404.gif<br>
          5 = https://i.pinimg.com/originals/d7/33/34/d733345e4f11231904e7634a04439e21.gif
        `
      }
    }
    else if (command == 'color') {
      if (commands[0] ) {
        if (commands[0] >= 0 && commands[0] < 7) this.setPrimaryColor(commands[0])
        else this.content += 'Invalid Value'
      }
      else {
        this.content += `
          0 = Cyan<br>
          1 = Green<br>
          2 = Red<br>
          3 = Blue<br>
          4 = Purple<br>
          5 = Orange
        `
      }
    }
    else if (command == 'ver') {
      this.content += `
      <p></p>
        CyLIIS CyOS [Version 10.0.22000.978]
      `
    }
    else if (command == 'ftype') {
      let app = (<any>this.folderStructure[this.folderIndex].folders).find((el : any) => {
        return el.showText.toLowerCase() == commands.join(" ").toLowerCase()
      })
      this.content += app.type
    }
    else if (command == 'echo') {
      this.content += commands.join(" ")
    }
    else if (['del', 'erase', 'format', 'md', 'mkdir', 'rd', 'rmdir'].includes(command)) {
      this.content += 'Access Denied'
    }
    else {
      this.content += `'${command}' is not recognized as an internal or external command,
      operable program or batch file.`
    }
    this.content += "<p></p>"
  }

  cd(path : string) {
    let dirs = path.split("/").join('\\').split('\\')
    let initIndex = this.folderIndex
    dirs.forEach((dir: string) => {
      let check = false
      this.folderStructure[this.folderIndex].folders.forEach((el) : any => {
        if (el.showText.toLowerCase() == dir.toLowerCase()) {
          check = true
          this.folderIndex = el.indexOfDir
          this.dir$.next(this.folderStructure[this.folderIndex].dir)
          if (!el.access) this.content += 'Access Denied'
        } 
      })
      if (!check) {
        this.folderIndex = initIndex
        this.dir$.next(this.folderStructure[this.folderIndex].dir)
        this.content += 'The system cannot find the path specified.'
        return
      } 
    })
  }

  onOpen(window : any) {
    this.store.dispatch(addWindow({window}))
  }

  setBackgroundImage(index : number) {
    [1, 2, 3, 4, 5].forEach((i) => {
      document.body.classList.remove(`background-image-${i}`)  
    })
    document.body.classList.add(`background-image-${index}`)
    localStorage.setItem(
      'bg', index.toString()
    );
  }

  setPrimaryColor(index : number) {
    [1, 2, 3, 4, 5].forEach((i) => {
      document.body.classList.remove(`primary-color-${i}`)  
    })
    console.log(index)
    document.body.classList.add(`primary-color-${index}`)
    localStorage.setItem(
      'color', index.toString()
    );
  }
}