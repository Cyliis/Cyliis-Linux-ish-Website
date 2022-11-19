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
      showName : 'Gallery'
    },
    {
      name : 'team',
      imageUrl : this.windowsService.getIcon('team'),
      showName : 'Team'
    },
    {
      name : 'alumni',
      imageUrl : this.windowsService.getIcon('alumni'),
      showName : 'Alumni'
    },
    {
      name : 'events',
      imageUrl : this.windowsService.getIcon('events'),
      showName : 'Events'
    },
    {
      name : 'cl',
      imageUrl : this.windowsService.getIcon('cl'),
      showName : 'CyCL'
    },
    
  ]

  ngOnInit(): void {
  }

  onOpen(window : string) {
    this.windowsService.openWindow(window)
  }

}
