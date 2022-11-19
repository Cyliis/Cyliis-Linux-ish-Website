import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessDeniedComponent {

  constructor(private windowsService : WindowsService) { }

  getIcon() {
    return this.windowsService.getIcon('access-denied')
  }

  onClose() {
    this.windowsService.closeWindow('access-denied')
  }



}
