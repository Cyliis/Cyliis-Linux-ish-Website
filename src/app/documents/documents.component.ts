import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { alumni } from '../alumni/alumni.data';
import { setMember } from '../state/member/member.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { team } from '../team/team.data';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private store : Store<any>) { }

  minimizeds$ = this.store.select("minimizeds")

  documents = [...team, ...alumni]

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
