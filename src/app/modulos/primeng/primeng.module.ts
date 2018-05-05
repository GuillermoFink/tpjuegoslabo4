import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule
  ],
  declarations: []
})
export class PrimengModule { }
