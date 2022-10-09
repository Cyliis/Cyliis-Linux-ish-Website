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
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1024px-OneDrive_Folder_Icon.svg.png',
      showName : 'Gallery'
    },
    {
      name : 'team',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1024px-OneDrive_Folder_Icon.svg.png',
      showName : 'Team'
    },
    {
      name : 'alumni',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1024px-OneDrive_Folder_Icon.svg.png',
      showName : 'Alumni'
    },
    {
      name : 'events',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1024px-OneDrive_Folder_Icon.svg.png',
      showName : 'Events'
    },
    {
      name : 'cl',
      imageUrl : 'https://www.freeiconspng.com/thumbs/command-line-icon/command-line-icon-1.png',
      showName : 'CyCL'
    },
    
  ]

  ngOnInit(): void {
  }

  onOpen(window : string) {
    this.windowsService.openWindow(window)
  }

}
