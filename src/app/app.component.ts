import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cyliis';

  ngOnInit() {
    this.onSetTheme()
    this.onSetBackgroundImage()
    this.onSetPrimaryColor()
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
