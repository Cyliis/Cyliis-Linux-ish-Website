import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {

  constructor() { }

  index: number = 0;

  positions : any = [
    [
      ...['black/r', 'black/n', 'black/b', 'black/q', 'black/k', 'black/b', 'black/n', 'black/r'],
      ...['black/p', 'black/p', 'black/p', 'black/p', 'black/p', 'black/p', 'black/p', 'black/p'],
      ...[0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0],
      ...[0, 0, 0, 0, 0, 0, 0, 0],
      ...['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ...['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ]
  ]

  ngOnInit(): void {
  }

  drop(event: any) {
    console.log(event)
  }

  getPos(i : any) {
    return Math.floor(i + (i / 8)) % 2
  }
}
