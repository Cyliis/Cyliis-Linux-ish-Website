import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {

  constructor(private store : Store<any>, private userService : UserService) { }

  event$ = this.store.select('event')

  async onAction(url : any) {
    console.log((await this.userService.getCodes())[4])
    window.open(url);
  }
}
