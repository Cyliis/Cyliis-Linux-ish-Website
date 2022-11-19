import { ChangeDetectionStrategy, Component } from '@angular/core';
import { alumni } from '../alumni/alumni.data';
import { team } from '../team/team.data';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsComponent {

  constructor(private windowsService : WindowsService) { }

  documents = [...team, ...alumni]

  onOpen(member : any) {
    this.windowsService.openPortfolio(member)
  }

}
