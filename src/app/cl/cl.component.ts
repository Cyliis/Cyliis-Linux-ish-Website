import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { structure } from './folder-structure.data';
import { WindowsService } from '../windows.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.scss']
})
export class ClComponent implements OnInit, AfterViewInit {

  constructor(private windowsService : WindowsService, private userService : UserService) { }

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
  vim : boolean = false
  fullscreen : boolean = false
  inputs = ['']
  indexOfInput = 0
  level = 0

  ngOnInit(): void {
    this.userService.init()
    
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
      if (this.vim) {
        if (e.target.value == ':q') this.windowsService.closeWindow('cl')
        this.content += `${e.target.value}</br>`
        e.target.value = ''
        return
      }
      if (this.init) {
        this.content += `<p></p><span class="dir">${this.dir$.value}</span>${e.target.value}<br>`
        this.init = false
      }
      else this.content += `<span class="dir">${this.dir$.value}</span>${e.target.value}<br>`
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
    else if (command == 'decode') this.decode(commands)
    else if (command == 'cd') this.cd(commands.join(""))
    else if (command == 'clear') this.content = `<p></p>`
    else if (command == 'color') this.changeSystemColor(commands)
    else if (command == 'echo') this.content += commands.join(" ")
    else if (command == 'exit') this.windowsService.closeWindow('cl')
    else if (command == 'ftype') this.ftype(commands)
    else if (command == 'help') this.content += this.help()
    else if (command == 'history') this.content += this.history()
    else if (command == 'icons') this.setIcons(commands)
    else if (command == 'login') this.login(commands)
    else if (command == 'logout') this.logout()
    else if (command == 'ls') this.ls(commands)
    else if (command == 'mag') this.content += this.mag()
    else if (command == 'neofetch') this.content += this.neoFetch()
    else if (command == 'shutdown') this.shutdown()
    else if (command == 'title') this.title = commands.join(" ")
    else if (command == 'time') this.content += new Date()
    else if (command == 'ver') this.content += "<p></p>CyLIIS CyOS [Version 10.0.22000.978]"
    else if (command == 'vim') this.initVim()
    else if (['del', 'erase', 'format', 'md', 'mkdir', 'rd', 'rmdir'].includes(command)) this.content += 'Access Denied'
    else this.content += `'${command}' is not recognized as an internal or external command, operable program or batch file.`
    this.content += "<p></p>"
    timer(0).subscribe(() =>this.clRef.nativeElement.scrollTop = this.clRef.nativeElement.scrollHeight)
  }

  initVim() {
    this.vim = true
    this.content = ``
    this.title = "Vim"
  }

  decode(commands : any) : any {
    if (!this.userService.getUser()) return this.content += `You don't currently have permission to execute this command.`
    commands[0] = commands[0] ? commands[0].trim().toLowerCase() : false
    if (this.level == 0) {
      if (!commands[0]) this.content += 'Red right ....'
      else if (commands[0] == 'hand') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 1) {
      if (!commands[0]) this.content += 'Hannah + Mikkel'
      else if (commands[0] == 'jonas') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 2) {
      if (!commands[0]) this.content += `Who said "I'm gonna make him an offer he can't refuse"`
      else if (commands[0] == 'godfather') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 3) {
      if (!commands[0]) this.content += `Toto, I've a feeling we're not in ...... anymore.`
      else if (commands[0] == 'kansas') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 4) {
      if (!commands[0]) this.content += 'A census taker once tried to test me. I ate his liver with some fava beans and a nice .......'
      else if (commands[0] == 'chianti') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 5) {
      if (!commands[0]) this.content += 'sixth sense'
      else if (commands[0] == 'proprioception') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 6) {
      if (!commands[0]) this.content += 'Elementary, my dear ......'
      else if (commands[0] == 'watson') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 7) {
      if (!commands[0]) this.content += `To infinity and ......!`
      else if (commands[0] == 'beyond') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 8) {
      if (!commands[0]) this.content += 'Leader of FR13ND5'
      else if (commands[0] == 'mrx') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 9) {
      if (!commands[0]) this.content += 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSlhhR2xmX2l3QTZMS084aGlENngtVVdqNmVPX053V3kvdmlldz91c3A9c2hhcmluZw=='
      else if (commands[0] == 'mag') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 10) {
      if (!commands[0]) this.content += 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQVJtZmpyRzhudFpfV3VadEp3UndxR2p0cEdyQVNzOEYvdmlldz91c3A9c2hhcmluZw=='
      else if (commands[0] == '34558914442') this.level++
      else this.content += 'Wrong answer'
    }
    else if (this.level == 11) {
      if (!commands[0]) this.content += 'Find the white rabbit'
      else if (commands[0] == localStorage.getItem('white_rabbit')) this.level++
      else this.content += 'Wrong answer'
    }
  }

  login(commands : any) : any {
    if (commands[0]) {
      if (commands[0] != 'Dylan_2791') return this.content += "Wrong password"
      else this.userService.login()
    }
    else {
      this.content += `
        Invalid syntax<br>
        login [password]
      `
    }
  }

  logout() {
    this.userService.logout()
  }

  cd(path : string) {
    let dirs = path.split("/").join('\\').split('\\')
    let initIndex = this.folderIndex
    dirs.forEach((dir: string) => {
      let check = false
      this.folderStructure[this.folderIndex].folders.forEach((el) : any => {
        if (el.showText.toLowerCase() == dir.toLowerCase()) {
          check = true
          if (el.access || (this.userService.getUser() && el.showText == 'admin')) {
            this.folderIndex = el.indexOfDir
            this.dir$.next(this.folderStructure[this.folderIndex].dir)
          }
          else {
            this.content += 'Access Denied'
          }
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

  ls(commads : any) {
    if (commads[0] == "-l") return this.lsMerge()
    let text = "<pre class='ls'>"
    this.folderStructure[this.folderIndex].folders.forEach((el) => {
      let className = ''
      if (el.folder) className = "folder"
      if (!el.access) className = "restricted"
      text += `<span class="${className}">${el.showText}      </span>`
    })
    text += "</pre>"
    this.content += text
  }

  lsMerge() {
    this.folderStructure[this.folderIndex].folders.forEach((el) => {
      this.content += `<pre>26/02/2004  01:25 PM    ${el.folder ? '<span class="folder">DIR</span>' : '   '}          ${el.access ? el.showText : `<span class="restricted">${el.showText}</span>`} </pre>`
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

  neoFetch() {
    let theme = 'MAG-' + ['Cyan', 'Green', 'Red', "Blue", 'Purple', 'Orange'][parseInt(localStorage.getItem('color')!)]
    let icons = 'MAG-' + localStorage.getItem('icons')
    return `
<pre>
<span class="mark">             .'cllllllllllc''                   </span><span class="dir">cyliis</span>@<span class="dir">cyliis.ro</span>
<span class="mark">          .;clllllllllllllllllc,.               OS:</span> Cyliis 2017.6.9
<span class="mark">       .:llllllllllllllllllllllllc'             Shell:</span> cycl
<span class="mark">     .cllllllllllll.  .llllllllllllc            Resolution:</span> 1920x1280
<span class="mark">     :llllllllll           .llllllllll.         Theme:</span> ${theme} [GTK2/3]
<span class="mark">   clllllllll.              llllllllll          Icons:</span> ${icons}[GTK2/3]
<span class="mark">   clllllllll.                                  CPU:</span> Intel i9-12900HX (16) @ 5.00GHz
<span class="mark"> .lllllllll:                                    GPU:</span> NVIDIA GeForce RTX 4090
<span class="mark"> clllllllll.             .......   .......      Memory:</span> 82MiB / 19043MiB
<span class="mark"> llllllllll               .......  .......      Number:</span> 19043
<span class="mark"> llllllllll                ............... </span>
<span class="mark"> llllllllll.                .............  </span>
<span class="mark"> ;lllllllll;                .............  </span>
<span class="mark">   llllllllll               .............  </span>
<span class="mark">   :llllllllll.           ,,..........     </span>
<span class="mark">     ;clllllllll:'.     .';;'.........     </span>
<span class="mark">     .;;:ccllllllllcc:;;;;,........        </span>
<span class="mark">         ;;;;;;;;;;;;;;;;;'........        </span>
<span class="mark">           ,;;;;;;;;,,'........            </span>
<span class="mark">                 ..........                </span>
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
    if (this.vim) return
    let selectedText = window.getSelection()?.toString()
    if (selectedText) {
      navigator.clipboard.writeText(selectedText!);
      if (this.init) {
        this.content += `<p></p><p></p><span class="dir">${this.dir$.value}</span><br>`
        this.init = false
      }
      else this.content += `<p></p><span class="dir">${this.dir$.value}</span><br>`
      this.resolveCommand(['echo', `"${selectedText}" copied to clipboard`])
    }
    el.focus()
  }

  mag() {
    return `
<pre>
<span class="mark">
0000       0000      00000         00000000
00000     00000     000 000      000     000
000000   000000    000   000    000      
000 000 000 000    000000000    000    00000
000  00000  000   000     000    000     000
000   000   000 1 000     000 1    000000000
</span>
<b class="mark">Motricală Alin-Gabriel</b>
<span class="mark">email:</span> motricala44@gmail.com
<span class="mark">phone:</span> 0751347104
<span class="mark">github:</span> github.com/FR13ND-ly
<span class="mark">linkedin:</span> linkedin.com/in/alin-gabriel-motricala
</pre>    ` 
  }
}