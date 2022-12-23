import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, timer, delay, filter } from 'rxjs';
import { UserService } from '../user.service';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-boot-screen',
  templateUrl: './boot-screen.component.html',
  styleUrls: ['./boot-screen.component.scss']
})
export class BootScreenComponent implements OnInit, OnDestroy {

  constructor(private windowsService: WindowsService, private userService : UserService) { }

  @Output() boot = new EventEmitter()

  loaded : boolean = false
  
  selected : number = 0

  @Input() loadWindow! : boolean

  loading : any = [
    {
      action : () => this.content += '[       10.0.22000.978] The bits are breeding<br>'
    },
    {
      action : () => this.content += "[       10.0.22000.978] Making sure all the i's have dots...<br>"
    },
    {
      action : () => this.content += '[       10.0.22000.978] Connecting Neurotoxin Storage Tank...<br>'
    },
  ]

  easterEggLoading : any = [
    {
      action : () => this.content += 'root@elliot$: ping (222.12.154.102)<br>'
    },
    {
      action : () => this.content += 'root@elliot$: 64 bytes ev.e-bnk.org (222.12.154.102): icmp_req=1 ttl=1<br>'
    },
    {
      action : () => this.content += 'root@elliot$: 1 packets transmitted, 1 received, 0% packet loss, time<br>'
    },
    {
      action : () => this.content += 'root@elliot$: elpscrk -list pswList.list-add Dylan; June 3rd, Stonehen<br>'
    },
    {
      action : () => this.content += 'root@elliot$: List Count: 9875894 Type: alphanum<br>'
    },
    {
      action : () => this.content += 'root@elliot$: Scanning Complete<br>'
    },
    {
      action : () => this.content += 'root@elliot$: Time elapsed: 24.08771<br>'
    },
    {
      action : () => this.content += 'root@elliot$: th_code: Dylan_2791<br>'
    },
    {
      action : () => this.content += 'root@elliot$: You may need the th_code<br>'
    },
    {
      action : () => {}
    },
  ]

  easterEgg: number = Math.floor(Math.random() * 15);

  content : string = `
[       10.0.22000.978] Loading<br>`

  sub : any
  async ngOnInit() {
    fromEvent(window, "load")
    .pipe(
      delay(1200),
      filter(() => !!localStorage.getItem('boot') || this.windowsService.isMobile())
    )
    .subscribe(() => {
      this.boot.emit()
    });
    this.sub = fromEvent(document, 'keydown')
    .subscribe((event : any) => {
      if (this.loaded) {
        if (event.key == "ArrowUp" || event.key == "ArrowDown") this.selected = this.selected ? 0 : 1
        else if (event.key == "Enter") {
          if (this.selected) this.boot.emit()
          else this.openOldSite()
        }
      }
      else if (event.keyCode == 32) {
        this.onSkip()
      }
    })
    switch (this.easterEgg) {
      case 0: case 1: case 2: case 13: case 14:
        this.loading = [...this.loading, ...this.easterEggLoading]
        break
      case 4:
        this.loading = [...this.loading, {action : () => this.content += 'root@mag$: Follow the white rabbit<br>'}]
        break
      case 5:
        this.loading = [...this.loading, {action : () => this.content += 'root@mag$: Why so serious?<br>'}]
        break
      case 6:
        console.log((await this.userService.getCodes())[3])
        this.loading = [...this.loading, {action : () => this.content += "root@mag$: Don't worry - a few bits tried to escape, but we caught them<br>"}]
        break
      case 7:
        this.loading = [...this.loading, {action : () => this.content += "root@mag$: Have a good day<br>"}]
        break
      case 8:
        this.loading = [...this.loading, {action : () => this.content += "root@mag$: Who am I?<br>"}]
        break
      case 9:
        this.loading = [...this.loading, {action : () => this.content += "root@mag$: Who is John Galt?<br>"}]
        break
      case 10:
        this.loading = [...this.loading, {action : () => this.content += "root@mag$: The End is the Beginning and the Beginning is the End<br>"}]
        break
      case 11:
        this.loading = [...this.loading, ...this.easterEggLoading]
        break
      case 12:
        this.loading = [...this.loading, {action : () => this.content += "root@mag$: Déjà vu is a glitch in the Matrix<br>"}]
        break
    }
    this.loading.forEach((iteration : any, i : number) => {
      timer((i + 1) * 1000).subscribe(() => iteration.action())
    })
    timer(this.loading.length * 1000 + 2000).subscribe(() => this.loaded = true)
  }

  onSkip() {
    this.loaded = true
  }

  openOldSite() {
    location.href = "http://cyliis.ro"
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe() 
  }
}
