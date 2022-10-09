import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { gallery } from '../gallery/gallery.data';
import { setImage } from '../state/image/image.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private store: Store<any>) { }

  minimizeds$ = this.store.select('minimizeds')
  images = [...gallery]

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
