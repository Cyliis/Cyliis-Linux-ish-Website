import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GalleryItem } from '../models/gallery-item.model';
import { setImage } from '../state/image/image.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { gallery } from './gallery.data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private store : Store<any>) { }

  minimizeds$ = this.store.select("minimizeds")

  galleryItems = [...gallery]

  ngOnInit(): void {
  }

  onOpenImage(image : string, minimizeds : any) {
    if (minimizeds.includes('image')) {
      this.store.dispatch(maximizeWindow({ window : 'image' }))
    }
    else {
      this.store.dispatch(addWindow({ window : 'image' }))
    }
    this.store.dispatch(setImage({ image }))
    this.store.dispatch(setInFront({ window : 'image' }))
  }
}
