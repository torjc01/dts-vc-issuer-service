import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {
  public defaultLanguage: string;

  public constructor(
    private translocoService: TranslocoService
  ) {
    this.defaultLanguage = this.translocoService.getDefaultLang();
  }

  public onLanguageChange(change: MatSelectChange) {
    this.translocoService.setActiveLang(change.value);
  }
}
