import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    DragDropModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
