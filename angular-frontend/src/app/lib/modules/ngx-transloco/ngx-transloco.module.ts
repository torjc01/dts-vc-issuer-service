import { NgModule } from '@angular/core';

import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule
} from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

import { environment } from '@env/environment';

import { TranslocoResource } from './transloco-resource.service';

@NgModule({
  imports: [
    TranslocoLocaleModule.init({
      langToLocaleMapping: {
        en: 'en-CA',
        fr: 'fr-CA'
      }
    })
  ],
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support
        // changing language in runtime
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoResource
    }
  ]
})
export class NgxTranslocoModule { }
