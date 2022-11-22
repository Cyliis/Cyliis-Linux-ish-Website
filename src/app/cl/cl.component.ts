import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addWindow, removeWindow } from '../state/windows/windows.actions';
import { BehaviorSubject, timer } from 'rxjs';
import { structure } from './folder-structure.data';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.scss']
})
export class ClComponent implements OnInit, AfterViewInit {

  constructor(private store: Store<any>) { }

  @ViewChild('consoleInput') consoleInput! : ElementRef
  @ViewChild('cl') clRef! : ElementRef

  content : string = `
  CyOS [Version 10.0.22000.978]<br>
  (c) CyLIIS. All rights reserved.
  `

  folderStructure = structure
  folderIndex : any = 2
  init = true
  dir$ = new BehaviorSubject(this.folderStructure[this.folderIndex].dir)
  title = "CyCL"
  fullscreen : boolean = false
  inputs = ['']
  indexOfInput = 0

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    timer(10).subscribe(() => this.setInputFocus())
    let marginTop = Math.floor(Math.random() * 10);
    let marginLeft = Math.floor(Math.random() * 10) + 30
    let window: any = document.querySelector(`app-cl .window`)
    window.style.transform = `translateX(${marginLeft}vw)` 
    window.style.transform += `translateY(${marginTop}vh)` 
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
    else if (e.keyCode == 38 && this.indexOfInput) this.indexOfInput--
    else if (e.keyCode == 40 && this.indexOfInput != (this.inputs.length - 1)) this.indexOfInput++
  }

  resolveCommand(commands : any) {
    let app = this.getApp(commands)
    let command = commands.shift().toLowerCase()
    if (app?.exec) app?.exec()
    else if (command == 'bgimage') this.changeDesktopImage(commands)
    else if (command == 'cd') this.cd(commands.join(""))
    else if (command == 'clear') this.content = `<p></p>`
    else if (command == 'color') this.changeSystemColor(commands)
    else if (command == 'echo') this.content += commands.join(" ")
    else if (command == 'exit') this.store.dispatch(removeWindow({window : 'cl'}))
    else if (command == 'ftype') this.ftype(commands)
    else if (command == 'help') this.content += this.help()
    else if (command == 'history') this.content += this.history()
    else if (command == 'icons') this.setIcons(commands)
    else if (command == 'ls') this.ls()
    else if (command == 'neofetch') this.content += this.neoFetch()
    else if (command == 'shutdown') this.shutdown()
    else if (command == 'title') this.title = commands.join(" ")
    else if (command == 'time') this.content += new Date()
    else if (command == 'ver') this.content += "<p></p>CyLIIS CyOS [Version 10.0.22000.978]"
    else if (['del', 'erase', 'format', 'md', 'mkdir', 'rd', 'rmdir'].includes(command)) this.content += 'Access Denied'
    else this.content += `'${command}' is not recognized as an internal or external command, operable program or batch file.`
    this.content += "<p></p>"
    timer(0).subscribe(() =>this.clRef.nativeElement.scrollTop = this.clRef.nativeElement.scrollHeight)
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

  ftype(commands : any) {
    let app = (<any>this.folderStructure[this.folderIndex].folders).find((el : any) => {
      return el.showText.toLowerCase() == commands.join(" ").toLowerCase()
    })
    this.content += app.type
  }

  getApp(commands : any) {
    return (<any>this.folderStructure[this.folderIndex].folders).find((el : any) => {
      return el.showText.toLowerCase() == commands.join(" ").toLowerCase()
    })
  }

  ls() {
    this.folderStructure[this.folderIndex].folders.forEach((el) => {
      this.content += `<pre>26/02/2004  01:25 PM    ${el.folder ? 'DIR' : '   '}          ${el.showText}</pre>`
    })
  }

  setIcons(commands : any) {
    if (!commands[0]) {
      this.content += `
        light = MAG-Light<br>
        dark = MAG-Dark<br>`
    }
    switch (commands[0]) {
      case 'light':
        return localStorage.setItem('icons', '')
      case 'dark':
        return localStorage.setItem('icons', 'dark/')
      default:
        break;
    } 
  }

  shutdown() {
    var myWindow : any = window.open("", "_self");
    myWindow.document.write("");
    localStorage.setItem('boot', '')
    timer(1000).subscribe(() => myWindow.close())
  }

  changeSystemColor(commands : any) {
    if (commands[0] ) {
      if (commands[0] >= 0 && commands[0] < 7) this.setPrimaryColor(commands[0])
      else this.content += 'Invalid Value'
    }
    else {
      this.content += `
        0 = MAG-Cyan<br>
        1 = MAG-Green<br>
        2 = MAG-Red<br>
        3 = MAG-Blue<br>
        4 = MAG-Purple<br>
        5 = MAG-Orange`
    }
  }

  history() {
    return `lorem ipsum dolor sit amet`
  }

  changeDesktopImage(commands : any) {
    if (commands[0] ) {
      if (commands[0] >= 0 && commands[0] < 7) this.setBackgroundImage(commands[0])
      else this.content += 'Invalid Value'
    }
    else {
      this.content += `
        0 = MAG-Cyliis<br>
        1 = https://www.gifcen.com/wp-content/uploads/2022/04/wallpaper-gif-4.gif<br>
        2 = https://i.pinimg.com/originals/5d/16/b2/5d16b293438a635ecfcfa78596cad135.gif<br>
        3 = https://c.tenor.com/zMdZBjJ7gPkAAAAd/aesthetic-wallpaper.gif<br>
        4 = https://wallpapercave.com/wp/wp3684404.gif<br>
        5 = https://i.pinimg.com/originals/d7/33/34/d733345e4f11231904e7634a04439e21.gif`
    }
  }

  help() {
    return `
      <pre>BGIMAGE    Sets desktop background image.</pre>
      <pre>CD         Displays the name of or changes the current directory.</pre>
      <pre>CLEAR      Clears the screen.</pre>
      <pre>COLOR      Sets system color.</pre>
      <pre>DEL        Deletes one or more files.</pre>
      <pre>ECHO       Displays messages, or turns command echoing on or off.</pre>
      <pre>ERASE      Clears the screen.</pre>
      <pre>EXIT       Quits the CyCL program (command interpreter).</pre>
      <pre>FORMAT     Formats a disk for use with CyOS.</pre>
      <pre>FTYPE      Displays or modifies file types used in file extension associations.</pre>
      <pre>HELP       Provides Help information for CyOS commands.</pre>
      <pre>ICONS      Sets system icon pack.</pre>
      <pre>LS         Displays a list of files and subdirectories in a directory.</pre>
      <pre>MD         Creates a directory.</pre>
      <pre>MKDIR      Creates a directory.</pre>
      <pre>MKLINK     Creates Symbolic Links and Hard Links.</pre>
      <pre>RD         Removes a directory.</pre>
      <pre>RMDIR      Removes a directory.</pre>
      <pre>SHUTDOWN   Shutdown of machine.</pre>
      <pre>TIME       Displays or sets the system time.</pre>
      <pre>TITLE      Sets the window title for a CyCL session.</pre>
      <pre>VER        Displays the CyOS version.</pre>`
  }

  onOpen(window : any) {
    this.store.dispatch(addWindow({window}))
  }

  neoFetch() {
    let theme = 'MAG-' + ['Cyan', 'Green', 'Red', "Blue", 'Purple', 'Orange'][parseInt(localStorage.getItem('color')!)]
    let icons = 'MAG-' + localStorage.getItem('icons')
    return `
<pre>
<span class="mark">      ,clllllllllc'           cyliis</span>@<span class="mark">cyliis.ro</span>
<span class="mark">   .:llllllllllllllll:        OS:</span> Cyliis 2017.6.9
<span class="mark"> .clllll'        ;lllll'      Shell:</span> cycl
<span class="mark">'cllll                        Resolution:</span> 1920x1280
<span class="mark">llllll                        Theme:</span> ${theme} [GTK2/3]
<span class="mark">llllll                        Icons:</span> ${icons}[GTK2/3]
<span class="mark">;lllll            .......     CPU:</span> Intel i9-12900HX (16) @ 5.00GHz
<span class="mark">'lllll'          .......      GPU:</span> NVIDIA GeForce RTX 4090
<span class="mark">  llllll        .......       Memory:</span> 82MiB / 19043MiB
<span class="mark">    lclllll...........        Number:</span> 19043
<span class="mark">      ;:::::::::::::'
        ''''''''''' </span>
    </pre>` 
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
    document.body.classList.add(`primary-color-${index}`)
    localStorage.setItem(
      'color', index.toString()
    );
  }

  onSelect(e : any, el : any) {
    let selectedText = window.getSelection()?.toString()
    if (selectedText) {
      navigator.clipboard.writeText(selectedText!);
      if (this.init) {
        this.content += `<p></p><p></p>${this.dir$.value}<br>`
        this.init = false
      }
      else this.content += `<p></p>${this.dir$.value}<br>`
      this.resolveCommand(['echo', `"${selectedText}" copied to clipboard`])
    }
    el.focus()
  }
}