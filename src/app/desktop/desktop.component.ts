import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }

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
    
  ]

  ngOnInit(): void {
  }

  onOpen(window : string) {
    this.windowsService.openWindow(window)
  }

  onOpenMob(window : string) {
    if (this.windowsService.isMobile()) this.windowsService.openWindow(window)
  }

  onDrag(el : any, name : any) {
    localStorage.setItem(`${name}Pos`, el.style.transform)
  }
}
