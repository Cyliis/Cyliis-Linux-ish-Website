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
    "https://www.mercurynews.com/wp-content/uploads/2021/06/SJM-L-WEDJOAN-0623-01_85738846.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Procyon_lotor_%28Common_raccoon%29.jpg/1024px-Procyon_lotor_%28Common_raccoon%29.jpg",
    "https://cdn.pixabay.com/photo/2018/11/16/22/27/raccoon-3820327__480.jpg",
    "https://cdn.pixabay.com/photo/2014/06/09/12/23/raccoon-365366__340.jpg",
    "https://media.4-paws.org/6/f/6/3/6f632736659b7a71ccdedabb3d62b4f409d09d10/VIER%20PFOTEN_2016-06-15_074-3428x1793-600x314.jpg"
  ];

  selected = ''

  ngOnInit(): void {
  }

  next() {
    this.selected = this.galleryItems[(this.galleryItems.indexOf(this.selected) + 1) % (this.galleryItems.length)]
  }

  previous() {
    this.selected = this.galleryItems[this.galleryItems.indexOf(this.selected) == 0 ? this.galleryItems.length - 1 : this.galleryItems.indexOf(this.selected) - 1]
  }
}
