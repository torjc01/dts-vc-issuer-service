import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '@features/auth/shared/guards/authentication.guard';

import { IssuerRoutes } from './issuer.routes';
import { IssuerGuard } from './shared/guards/issuer.guard';
import { CredentialsPageComponent } from './pages/credentials-page/credentials-page.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [
      AuthenticationGuard
    ],
    canActivateChild: [
      AuthenticationGuard,
      IssuerGuard
    ],
    children: [
      {
        path: IssuerRoutes.CREDENTIALS_PAGE,
        canActivate: [],
        component: CredentialsPageComponent,
        data: { title: 'Obtain Your Health Status Credential' }
      }
    ]
  },
  { path: 'login', loadChildren: () => import('./shared/modules/issuer-login/issuer-login.module').then(m => m.IssuerLoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuerRoutingModule { }
