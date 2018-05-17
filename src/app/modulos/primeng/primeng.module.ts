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
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ChartModule} from 'primeng/chart';
@NgModule({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    GrowlModule,
    TableModule,
    ScrollPanelModule,
    ChartModule
    
  ],
  exports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    GrowlModule,
    TableModule,
    ScrollPanelModule,
    ChartModule
  ],
  declarations: []
})
export class PrimengModule { }
