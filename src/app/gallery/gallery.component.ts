import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  galleryItems : string[] = [
    "a"
  ]

  ngOnInit(): void {
  }

}
