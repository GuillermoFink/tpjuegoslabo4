import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {CardModule} from 'primeng/card';
@NgModule({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule
  ],
  exports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule
  ],
  declarations: []
})
export class PrimengModule { }
