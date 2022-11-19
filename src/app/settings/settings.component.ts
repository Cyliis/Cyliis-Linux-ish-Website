import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  backgroundImages = [
    "/assets/bg/bg-1.webp",
    "https://www.gifcen.com/wp-content/uploads/2022/04/wallpaper-gif-4.gif",
    "https://i.pinimg.com/originals/5d/16/b2/5d16b293438a635ecfcfa78596cad135.gif",
    "https://c.tenor.com/zMdZBjJ7gPkAAAAd/aesthetic-wallpaper.gif",
    "https://wallpapercave.com/wp/wp3684404.gif",
    "https://i.pinimg.com/originals/d7/33/34/d733345e4f11231904e7634a04439e21.gif"
  ]

  colors = [
    "#00bcd4",
    "#4caf50",
    "#f44336",
    "#2196f3",
    "#9c27b0",
    "#ff9800"
  ]

  selectedColor = parseInt(localStorage.getItem('color')!)
  selectedBackgroundImage = parseInt(localStorage.getItem('bg')!)

  ngOnInit(): void {
  }

  onChangeTheme() {
    localStorage.setItem(
      'theme',
      !localStorage.getItem('theme') ? 'dark-theme' : ''
    );
    localStorage.setItem(
      'icons',
      !localStorage.getItem('theme') ? '' : 'dark/'
    );
    this.onSetTheme();
  }

  onSetTheme() {
    document.body.classList.toggle(
      'dark-theme',
      !!localStorage.getItem('theme')
    );
  }

  onSetBackgroundImage(index : number) {
    this.selectedBackgroundImage = index;
    [1, 2, 3, 4, 5].forEach((i) => {
      document.body.classList.remove(`background-image-${i}`)  
    })
    document.body.classList.add(`background-image-${index}`)
    localStorage.setItem(
      'bg', index.toString()
    );
  }

  onSetPrimaryColor(index : number) {
    this.selectedColor = index;
    [1, 2, 3, 4, 5].forEach((i) => {
      document.body.classList.remove(`primary-color-${i}`)  
    })
    document.body.classList.add(`primary-color-${index}`)
    localStorage.setItem(
      'color', index.toString()
    );
  }

}
