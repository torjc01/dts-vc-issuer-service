import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

export interface DashboardHeaderConfig {
  theme?: 'blue' | 'white';
  // TODO change name to reflect a default that will show the toggle
  showMobileToggle?: boolean;
}

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageToolbarComponent {
  /**
   * @description
   * Username displayed in the dashboard header.
   */
  @Input() public username: string;
  /**
   * @description
   * Event emission of logout action.
   */
  @Output() public logout: EventEmitter<void>;

  public brandImgSrc: string;

  public constructor() {
    this.logout = new EventEmitter<void>();
  }

  public onLogout(): void {
    this.logout.emit();
  }
}
