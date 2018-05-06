import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {CardModule} from 'primeng/card';
import {GrowlModule} from 'primeng/growl';
import {Message} from 'primeng/components/common/api';
import {TableModule} from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    GrowlModule,
    TableModule
    
  ],
  exports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    GrowlModule,
    TableModule
  ],
  declarations: []
})
export class PrimengModule { }
