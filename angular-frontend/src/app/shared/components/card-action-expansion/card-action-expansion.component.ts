import { Component, Input } from '@angular/core';

import { ImmunizationRecord } from '../../../features/issuer/shared/models/immunization-record.model';

@Component({
  selector: 'app-card-action-expansion',
  templateUrl: './card-action-expansion.component.html',
  styleUrls: ['./card-action-expansion.component.scss']
})
export class CardActionExpansionComponent {
  @Input() public immunizationRecord!: ImmunizationRecord;
  public expanded: boolean;

  public constructor() {
    this.expanded = false;
  }
}
