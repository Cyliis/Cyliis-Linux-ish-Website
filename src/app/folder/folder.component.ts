import { Component, Input, OnInit } from '@angular/core';
import { alumni } from '../alumni/alumni.data';
import { events } from '../events/events.data';
import { gallery } from '../gallery/gallery.data';
import { team } from '../team/team.data';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  constructor(private windowsService: WindowsService) {}

  @Input() name!: string;

  files: any = {
    alumni: [...alumni.map((el) => {
      el.exec = () => this.windowsService.openPortfolio(el.name);
      el.extension = '.prtfl';
      return el;
    })],
    documents: [...team, ...alumni].map((el) => {
      el.exec = () => this.windowsService.openPortfolio(el);
      el.extension = '.prtfl';
      return el;
    }),
    events: [...events].map((el : any) => {
      el.exec = () => this.windowsService.openEvent(el);
      el.extension = '.evnt';
      return el;
    }),
    gallery: [...gallery].map((el : any) => {
      el.exec = () => this.windowsService.openImage(el.name);
      el.extension = '.img';
      return el;
    }),
    images: [...gallery].map((el : any) => {
      el.exec = () => this.windowsService.openImage(el.name);
      el.extension = '.img';
      return el;
    }),
    team: [...team].map((el) => {
      el.exec = () => this.windowsService.openPortfolio(el);
      el.extension = '.prtfl';
      return el;
    }),
  };
  navigationPaneItems = [
    {
      showName: 'Downloads',
      name: 'downloads',
    },
    {
      showName: 'Documents',
      name: 'documents',
    },
    {
      showName: 'Images',
      name: 'images',
    },
    {
      showName: 'System',
      name: 'system',
    },
    {
      showName: 'SD Card',
      name: 'sd',
    },
  ];

  ngOnInit(): void {
    console.log(this.files)
  }

  onOpenNavigationPaneItem(item: string) {
    // this.windowsService.openWindow(item)
  }

  onOpen(file: any) {
    file.exec()
  }
}
