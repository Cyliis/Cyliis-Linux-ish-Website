import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setImage } from '../state/image/image.actions';
import { setMember } from '../state/member/member.actions';
import { maximizeWindow } from '../state/minimizeds/minimizeds.actions';
import { addWindow, setInFront } from '../state/windows/windows.actions';
import { WindowsService } from '../windows.service';
import { alumni } from './alumni.data';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  constructor(private windowsService : WindowsService) { }

  alumni = [...alumni]

  ngOnInit(): void {
  }

  onOpen(member : any) {
    this.windowsService.openPortfolio(member)
  }

}
