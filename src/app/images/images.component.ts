import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { gallery } from '../gallery/gallery.data';
import { setImage } from '../state/image/image.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }

  images = [...gallery]

  ngOnInit(): void {
  }

  onOpenImage(image : string) {
    this.windowsService.openImage(image)
  }

}
