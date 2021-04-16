import { NgModule } from '@angular/core';

import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
  getBrowserLang
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
        // Detection of browser language will only work when using
        // a browser and will not work using server-side rendering
        defaultLang: getBrowserLang() ?? 'en',
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
