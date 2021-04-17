import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly duration: number;
  private readonly horizontalPosition: MatSnackBarHorizontalPosition;
  private readonly verticalPosition: MatSnackBarVerticalPosition;

  public constructor(
    private snackBar: MatSnackBar
  ) {
    this.duration = 3000; // ms
    this.horizontalPosition = 'end';
    this.verticalPosition = 'top';
  }

  /**
   * @description
   * Opens a toast to display success messages.
   */
  public openSuccessToast(message: string, action: string = null, config: MatSnackBarConfig = null) {
    const defaultConfig: MatSnackBarConfig = Object.assign({
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      extraClasses: ['success']
    }, config);
    this.openToast(message, action, defaultConfig);
  }

  /**
   * @description
   * Opens a toast to display error messages.
   */
  public openErrorToast(message: string, action: string = null, config: MatSnackBarConfig = null) {
    const defaultConfig: MatSnackBarConfig = Object.assign({
      duration: this.duration,
      extraClasses: ['danger']
    }, config);
    this.openToast(message, action, defaultConfig);
  }

  private openToast(message: string, action: string = null, config: MatSnackBarConfig) {
    this.snackBar.open(message, action, config);
  }
}
