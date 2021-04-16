import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxTranslocoModule } from './lib/modules/ngx-transloco/ngx-transloco.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppConfigModule,
    AppRoutingModule,
    NgxTranslocoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
