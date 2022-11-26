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
      action : () => this.content += 'root@elliot$: Password: Dylan_2791<br>'
    },
  ]

  easterEgg: number = Math.floor(Math.random() * 10);

  content : string = `
[       10.0.22000.978] Loading<br>`

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event : any) {
    if (event.key == "ArrowUp" || event.key == "ArrowDown") this.selected = this.selected ? 0 : 1
    else if (event.key == "Enter") {
      if (this.selected) this.boot.emit()
      else this.openOldSite()
    }
  }
  ngOnInit(): void {
    if (!this.easterEgg) {
      this.loading = [...this.loading, ...this.easterEggLoading]
    }
    else if (this.easterEgg == 4) {
      this.loading = [...this.loading, {action : () => this.content += 'root@mag$: Follow the white rabbit<br>'}]
    }
    else if (this.easterEgg == 5) {
      this.loading = [...this.loading, {action : () => this.content += 'root@mag$: Why so serious?<br>'}]
    }
    else if (this.easterEgg == 6) {
      this.loading = [...this.loading, {action : () => this.content += "root@mag$: Don't worry - a few bits tried to escape, but we caught them<br>"}]
    }
    else if (this.easterEgg == 7) {
      this.loading = [...this.loading, {action : () => this.content += "root@mag$: Have a good day<br>"}]
    }
    else if (this.easterEgg == 8) {
      this.loading = [...this.loading, {action : () => this.content += "root@mag$: Sic Mundus Creatus Est<br>"}]
    }
    else if (this.easterEgg == 9) {
      this.loading = [...this.loading, {action : () => this.content += "root@mag$: Déjà vu is a glitch in the Matrix<br>"}]
    }
    this.loading.forEach((iteration : any, i : number) => {
      timer((i + 1) * 1000).subscribe(() => iteration.action())
    })
    timer(this.loading.length * 1000 + 2000).subscribe(() => this.loaded = true)
  }

  openOldSite() {
    location.href = "http://cyliis.ro"
  }
}
