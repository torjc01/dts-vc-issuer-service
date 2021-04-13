import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { IssuerRoutingModule } from './issuer-routing.module';
import { CredentialsPageComponent } from './pages/credentials-page/credentials-page.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { PageHeaderSummaryDirective } from './shared/components/page-header/page-header-summary.directive';

@NgModule({
  imports: [
    SharedModule,
    IssuerRoutingModule
  ],
  declarations: [
    CredentialsPageComponent,
    PageHeaderComponent,
    PageHeaderSummaryDirective
  ]
})
export class IssuerModule { }
