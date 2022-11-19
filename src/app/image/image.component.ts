import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { gallery } from '../gallery/gallery.data';
import { setImage } from '../state/image/image.actions';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

  constructor(private store : Store<any>) { }
  
  images = [...gallery]

  imageIndex$ = this.store.select('image')

  next(i : number) {
    this.store.dispatch(setImage({
      image : (i + 1) % this.images.length
    }))
    
  }

  previous(i : number) {
    this.store.dispatch(setImage({
      image : !i ? this.images.length - 1 : i - 1 
    }))
  }
}
