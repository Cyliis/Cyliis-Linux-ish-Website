import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMember } from '../state/member/member.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { team } from './team.data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {

  constructor(private store : Store<any>) { }

  team = [...team]
  minimizeds$ = this.store.select("minimizeds")

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
