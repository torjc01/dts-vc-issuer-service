import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslocoLoader, Translation } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoResource implements TranslocoLoader {
  public constructor(
    private http: HttpClient
  ) { }

  public getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${ lang }.json`);
  }
}
