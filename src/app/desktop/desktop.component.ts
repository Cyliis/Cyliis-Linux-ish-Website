import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }

  files = [
    {
      name : 'gallery',
      imageUrl : 'assets/icons/folder.png',
      showName : 'Gallery'
    },
    {
      name : 'team',
      imageUrl : 'assets/icons/folder.png',
      showName : 'Team'
    },
    {
      name : 'alumni',
      imageUrl : 'assets/icons/folder.png',
      showName : 'Alumni'
    },
    {
      name : 'events',
      imageUrl : 'assets/icons/folder.png',
      showName : 'Events'
    },
    {
      name : 'cl',
      imageUrl : 'assets/icons/cl.png',
      showName : 'CyCL'
    },
    
  ]

  ngOnInit(): void {
  }

  onOpen(window : string) {
    this.windowsService.openWindow(window)
  }

}
