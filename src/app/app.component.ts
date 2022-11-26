import { Component, OnInit } from '@angular/core';
import { WindowsService } from './windows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private windowsService : WindowsService) {}
  
  loaded! : boolean
  
  ngOnInit() {
    this.loaded = !!localStorage.getItem('boot') || this.windowsService.isMobile()
    this.onSetTheme()
    this.onSetBackgroundImage()
    this.onSetPrimaryColor()
    document.onkeydown = (e) => {
      if (e.ctrlKey && e.altKey && e.key == 't') this.windowsService.openWindow('cl')
    };
    this.resolveUrl()
    if (!localStorage.getItem('white_rabbit')) {
      localStorage.setItem('white_rabbit', "Write an answer to decode")
    }
  }

  onBoot() {
    this.loaded = true
    localStorage.setItem('boot', '1')
  }

  onSetTheme() {
    document.body.classList.toggle(
      'dark-theme',
      !!localStorage.getItem('theme')
    );
  }

  onSetBackgroundImage() {
    let index = +localStorage.getItem('bg')!;
    document.body.classList.add(`background-image-${index}`)
  }

  onSetPrimaryColor() {
    let index = +localStorage.getItem('color')!;
    document.body.classList.add(`primary-color-${index}`)
  }

  resolveUrl() {
    let paths = [...location.pathname.split('/')]
    paths.shift()
    if ([
      'gallery',
      'team',
      'alumni',
      'events',
      'documents',
      'images',
      'about',
      'cl',
      'settings'
    ].includes(paths[0])) this.windowsService.openWindow(paths[0])
  }
}
