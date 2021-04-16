import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

import { NgxMaterialModule } from '../lib/modules/ngx-material/ngx-material.module';
import { NgxBusyModule } from '../lib/modules/ngx-busy/ngx-busy.module';
import { NgxProgressModule } from '../lib/modules/ngx-progress/ngx-progress.module';

import { DefaultPipe } from './pipes/default.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { CardAlertComponent } from './components/card-alert/card-alert.component';
import { CardActionExpansionComponent } from './components/card-action-expansion/card-action-expansion.component';
import { QRCodeComponent } from './components/qrcode/qrcode.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageHeaderSummaryDirective } from './components/page-header/page-header-summary.directive';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@NgModule({
  declarations: [
    FormatDatePipe,
    SafePipe,
    DefaultPipe,
    CardAlertComponent,
    CardActionExpansionComponent,
    QRCodeComponent,
    PageToolbarComponent,
    PageHeaderComponent,
    PageHeaderSummaryDirective,
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaterialModule,
    NgxBusyModule,
    NgxProgressModule,
    TranslocoModule,
    TranslocoLocaleModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaterialModule,
    NgxBusyModule,
    NgxProgressModule,
    TranslocoModule,
    TranslocoLocaleModule,
    FormatDatePipe,
    SafePipe,
    DefaultPipe,
    CardAlertComponent,
    CardActionExpansionComponent,
    QRCodeComponent,
    PageToolbarComponent,
    PageHeaderComponent,
    PageHeaderSummaryDirective,
    PageFooterComponent
  ]
})
export class SharedModule { }
