import { Component, OnInit } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }

  files = [
    {
      imageUrl : "/assets/icons/quiz.webp",
      name : 'Resolve'
    }
  ]

  ngOnInit(): void {
  }

  onOpen(name : any) {
    this.windowsService.openWindow(name.toLowerCase())
  }

  onOpenMob(member : string) {
    if (this.windowsService.isMobile()) this.windowsService.openWindow(member)
  }

}
