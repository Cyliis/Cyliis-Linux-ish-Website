import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GalleryItem } from '../models/gallery-item.model';
import { setImage } from '../state/image/image.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';
import { gallery } from './gallery.data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }
  
  galleryItems = [...gallery]

  ngOnInit(): void {
  }

  onOpenImage(image : string) {
    this.windowsService.openImage(image)
  }
}
