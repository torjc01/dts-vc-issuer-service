import { Component, EventEmitter, Input, Output } from '@angular/core';

export class AlertOptions {
  public constructor(
    public type: 'info' | 'success' | 'warn' | 'danger',
    public icon: string,
    public message: string,
    public showAction: boolean = false,
    public disableAction: boolean = false
  ) { }
}

@Component({
  selector: 'app-card-alert',
  templateUrl: './card-alert.component.html',
  styleUrls: ['./card-alert.component.scss']
})
export class CardAlertComponent {
  @Input() public icon: string;
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public alertOptions: AlertOptions;
  @Output() public selected: EventEmitter<void>;

  public constructor() {
    this.icon = '';
    this.title = '';
    this.subtitle = '';
    this.alertOptions = {
      type: 'info',
      icon: 'info',
      message: '',
      showAction: false,
      disableAction: false,
      ...this.alertOptions
    };
    this.selected = new EventEmitter<void>();
  }

  public onAction() {
    this.selected.emit();
  }
}
