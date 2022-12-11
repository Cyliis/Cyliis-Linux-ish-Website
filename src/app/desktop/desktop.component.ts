import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { WindowsService } from '../windows.service';
import Selecto from "selecto";
import { filter, fromEvent, timer } from 'rxjs';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopComponent implements OnInit {

  constructor(private windowsService : WindowsService, private el : ElementRef) { }

  files = [
    {
      name : 'gallery',
      imageUrl : this.windowsService.getIcon('gallery'),
      showName : 'Gallery',
      pos : localStorage.getItem('galleryPos')
    },
    {
      name : 'team',
      imageUrl : this.windowsService.getIcon('team'),
      showName : 'Team',
      pos : localStorage.getItem('teamPos')
    },
    {
      name : 'alumni',
      imageUrl : this.windowsService.getIcon('alumni'),
      showName : 'Alumni',
      pos : localStorage.getItem('alumniPos')
    },
    {
      name : 'events',
      imageUrl : this.windowsService.getIcon('events'),
      showName : 'Events',
      pos : localStorage.getItem('eventsPos')
    },
    {
      name : 'cl',
      imageUrl : this.windowsService.getIcon('cl'),
      showName : 'CyCL',
      pos : localStorage.getItem('clPos')
    },
    {
      imageUrl : "/assets/icons/quiz.webp",
      name : 'resolve',
      showName : "Resolve.exe"
    },
  ]

  selected : (HTMLElement | SVGElement)[] = []

  ngOnInit(): void {
    if (this.windowsService.isMobile()) return
    const selecto = new Selecto({
      container: document.querySelector('app-desktop') as HTMLElement,
      selectableTargets: [".folder", document.querySelector(".folder") as HTMLElement],
      continueSelect: false,
      toggleContinueSelect: "shift",
      hitRate: 1
    });
    selecto.on("dragStart", e => {
      if (e.inputEvent.target.className != "desktop") e.preventDrag()
    })
    selecto.on("select", e => {
      this.selected = e.selected
      e.added.forEach(el => {
        el.classList.add("folder--selected");
      })
      e.removed.forEach(el => {
        el.classList.remove("folder--selected");
    });
    });
    fromEvent(document, "keydown").pipe(
      filter((e : any) => e.target == document.body && e.key == 'Enter')
    )
    .subscribe((e) => {
      this.selected.forEach((el : any) => {
        timer(50).subscribe(() =>this.windowsService.openWindow(el.dataset['app']))
      }) 
    })
  }

  onOpen(window : string) {
    this.windowsService.openWindow(window)
  }

  onOpenMob(window : string) {
    if (this.windowsService.isMobile()) this.windowsService.openWindow(window)
  }

  onDragReleased(el : any, name : any) {
    localStorage.setItem(`${name}Pos`, el.style.transform)
  }
}
