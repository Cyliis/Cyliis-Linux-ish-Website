import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loaded = !!localStorage.getItem('boot')
  
  ngOnInit() {
    this.onSetTheme()
    this.onSetBackgroundImage()
    this.onSetPrimaryColor()
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
}
