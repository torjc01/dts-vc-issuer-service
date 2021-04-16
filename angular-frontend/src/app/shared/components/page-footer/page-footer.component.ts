import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {
  @Input() public showSeparator: boolean;

  public defaultLanguage: string;

  public constructor(
    private translocoService: TranslocoService
  ) {
    this.showSeparator = false;
    this.defaultLanguage = this.translocoService.getActiveLang();
  }

  public onLanguageChange(change: MatSelectChange) {
    this.translocoService.setActiveLang(change.value);
  }
}
