import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareImageComponent } from './square-image/square-image.component';



@NgModule({
  declarations: [
    SquareImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SquareImageComponent
  ]
})
export class SharedModule { }
