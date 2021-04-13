import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { LoggerService } from '@core/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {
  public constructor(
    private logger: LoggerService
  ) { }

  /**
   * @description
   * Checks the validity of a form, and triggers validation messages
   * when invalid.
   */
  public checkValidity(form: FormGroup | FormArray): boolean {
    if (form.valid) {
      return true;
    } else {
      this.logFormErrors(form);

      form.markAllAsTouched();
      return false;
    }
  }

  /**
   * @description
   * Get all the errors contained within a form.
   */
  public getFormErrors(form: FormGroup | FormArray): { [key: string]: any; } | null {
    if (!form) {
      return null;
    }

    let hasError = false;
    const result = Object.keys(form?.controls).reduce((acc, key) => {
      const control = form.get(key);
      const errors = (control instanceof FormGroup || control instanceof FormArray)
        ? this.getFormErrors(control)
        : control.errors;
      if (errors) {
        acc[key] = errors;
        hasError = true;
      }
      return acc;
    }, {} as { [key: string]: any; });
    return (hasError) ? result : null;
  }

  /**
   * @description
   * Helper for quickly logging form errors.
   */
  public logFormErrors(form: FormGroup | FormArray) {
    const formErrors = this.getFormErrors(form);
    if (formErrors) {
      this.logger.error('FORM_INVALID', formErrors);
    }
  }
}
