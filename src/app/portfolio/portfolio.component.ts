import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {

  constructor(private store : Store<any>) { }

  member$ = this.store.select('member')
}
