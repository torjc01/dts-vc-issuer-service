import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxMaterialModule } from './modules/ngx-material/ngx-material.module';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { CardAlertComponent } from './components/card-alert/card-alert.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    FormatDatePipe,
    SafePipe,
    CardAlertComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaterialModule,
    FormatDatePipe,
    SafePipe,
    CardAlertComponent,
    ImageComponent
  ]
})
export class SharedModule { }
