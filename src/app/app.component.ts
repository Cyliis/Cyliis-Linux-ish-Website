import { AfterContentInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { delay, fromEvent, map, timer } from 'rxjs';
import { UserService } from './user.service';
import { WindowsService } from './windows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  constructor(
    private windowsService: WindowsService,
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {}

  loaded: boolean = false;

  bunny = this.sanitizer.bypassSecurityTrustHtml(`<!--  
  (\\_/)  
  (o.o) - I am going to LocalStorage
  (___)0 
-->`);

  showBunny$ = this.userService
    .getUserUpdateListener()
    .pipe(map((res: any) => res?.resolveLevel == 9));

  ngOnInit() { 
    this.onSetTheme();
    this.onSetBackgroundImage();
    this.onSetPrimaryColor();
    this.userService.init();
    fromEvent(document, 'keydown').subscribe((e: any) => {
      if (e.ctrlKey && e.altKey && e.key == 't')
        this.windowsService.openWindow('cl');
    });
    this.resolveUrl();
    if (!localStorage.getItem('white_rabbit')) {
      localStorage.setItem(
        'white_rabbit',
        'Write an answer to resolve[Without spaces!!!]'
      );
    }
  }

  ngAfterContentInit(): void {
    this.removeAds();
  }

  onBoot() {
    this.loaded = true;
    localStorage.setItem('boot', '1');
  }

  onSetTheme() {
    document.body.classList.toggle(
      'dark-theme',
      !!localStorage.getItem('theme')
    );
  }

  onSetBackgroundImage() {
    let index = +localStorage.getItem('bg')!;
    document.body.classList.add(`background-image-${index}`);
  }

  onSetPrimaryColor() {
    let index = +localStorage.getItem('color')!;
    document.body.classList.add(`primary-color-${index}`);
  }

  showWhiteRabbit() {
    return this.userService.getUser()?.chessLevel == 9;
  }

  resolveUrl() {
    let paths = [...location.pathname.split('/')];
    paths.shift();
    if (
      [
        'gallery',
        'team',
        'alumni',
        'events',
        'documents',
        'images',
        'about',
        'cl',
        'settings',
      ].includes(paths[0])
    )
      this.windowsService.openWindow(paths[0]);
  }

  removeAds() {
    timer(1000).subscribe(() =>
      document.getElementsByTagName('style').item(5)?.remove()
    );
  }
}
