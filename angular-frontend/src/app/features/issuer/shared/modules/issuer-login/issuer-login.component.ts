import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { FormUtilsService } from '@core/services/form-utils.service';

@Component({
  selector: 'app-issuer-login',
  templateUrl: './issuer-login.component.html',
  styleUrls: ['./issuer-login.component.scss']
})
export class IssuerLoginComponent implements OnInit {
  public title: string;
  public form: FormGroup;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private formUtilsService: FormUtilsService,
    private authService: AuthService
  ) {
    this.title = route.snapshot.data.title;
  }

  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public onSubmit(): void {
    if (this.formUtilsService.checkValidity(this.form)) {
      this.router.navigate(['/issuer/credentials']);
    }
  }

  public ngOnInit(): void {
    this.createFormInstance();
  }

  private createFormInstance(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
