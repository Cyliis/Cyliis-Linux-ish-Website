import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setImage } from '../state/image/image.actions';
import { setMember } from '../state/member/member.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { alumni } from './alumni.data';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  constructor(private store : Store<any>) { }

  alumni = [...alumni]
  minimizeds$ = this.store.select("minimizeds")

  ngOnInit(): void {
  }

  onOpen(member : any, minimizeds : any) {
    if (minimizeds.includes('portfolio')) {
      this.store.dispatch(maximizeWindow({ window : 'portfolio' }))
    }
    else {
      this.store.dispatch(addWindow({ window : 'portfolio' }))
    }
    this.store.dispatch(setMember({ member }))
    this.store.dispatch(setInFront({ window : 'portfolio' }))
  }

}
