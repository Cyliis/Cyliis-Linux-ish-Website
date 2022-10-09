import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { alumni } from '../alumni/alumni.data';
import { setMember } from '../state/member/member.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { team } from '../team/team.data';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }


  documents = [...team, ...alumni]

  ngOnInit(): void {
  }

  onOpen(member : any) {
    this.windowsService.openPortfolio(member)
  }

}