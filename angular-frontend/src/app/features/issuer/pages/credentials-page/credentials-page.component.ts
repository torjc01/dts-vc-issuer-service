import { Component, OnInit } from '@angular/core';

import { forkJoin, of, Subscription } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

import { AuthService } from '@core/services/auth.service';

import { ImmunizationRecord } from '@features/issuer/shared/models/immunization-record.model';
import { Patient } from '@features/issuer/shared/models/patient.model';
import { ImmunizationResource } from '@features/issuer/shared/services/immunization-resource.service';
import { IssuerResource } from '@features/issuer/shared/services/issuer-resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertOptions } from '@shared/components/card-alert/card-alert.component';

@Component({
  selector: 'app-credentials-page',
  templateUrl: './credentials-page.component.html',
  styleUrls: ['./credentials-page.component.scss']
})
export class CredentialsPageComponent implements OnInit {
  public busy: Subscription;
  public title: string;
  public immunizationRecords: ImmunizationRecord[] | null;
  public patient: Patient | null;
  public issuedCredential: string | null;

  public selectedImmunizationRecords: ImmunizationRecord[];
  public savedImmunizationRecords: ImmunizationRecord[];

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private immunizationResource: ImmunizationResource,
    private issuerResource: IssuerResource,
    private authService: AuthService
  ) {
    this.title = this.route.snapshot.data.title;
    this.immunizationRecords = null;
    this.patient = null;
    this.issuedCredential = null;
    this.selectedImmunizationRecords = [];
    this.savedImmunizationRecords = [];
  }

  public get username(): string {
    return this.authService.token.fullName;
  }

  public getAlertOptions(immunizationRecord: ImmunizationRecord): AlertOptions {
    // TODO temporary way of managing record state indicators
    // TODO MVP demo does not know if it already exists in the digital wallet
    // TODO not managing danger notice until after MVP demo
    // TODO only managing success notice on submission for MVP demo

    const isUnsaved = this.immunizationRecords.some(ir => ir.id === immunizationRecord.id);
    const isPending = this.selectedImmunizationRecords.some(ir => ir.id === immunizationRecord.id);
    const isSaved = this.savedImmunizationRecords.some(ir => ir.id === immunizationRecord.id);

    if (isUnsaved && isPending) {
      return {
        type: 'warn',
        icon: 'task_alt',
        message: 'Vaccination record is ready to be saved to your digital wallet',
        showAction: true,
        disableAction: true
      };
    } else if (isSaved) {
      return {
        type: 'success',
        icon: 'verified',
        message: 'Vaccination record exists in your digital wallet',
        showAction: false
      };
    } else {
      return {
        type: 'info',
        icon: 'notification_important',
        message: 'Vaccination record has not been added to your certificate',
        showAction: true,
        disableAction: isPending
      };
    }

    // return {
    //   type: 'danger',
    //   icon: 'notification_important',
    //   message: 'Vaccination record has not been added to your digital wallet',
    //   showAction: true
    // };
  }

  public addAllImmunizationRecords() {
    this.selectedImmunizationRecords = [...this.immunizationRecords];
  }

  public addSelectedImmunizationRecord(immunizationRecord: ImmunizationRecord) {
    if (!this.selectedImmunizationRecords.some(ir => ir.id === immunizationRecord.id)) {
      this.selectedImmunizationRecords.push(immunizationRecord);
    }
  }

  public removeSelectedImmunizationRecord(immunizationId: string) {
    const index = this.selectedImmunizationRecords.findIndex(ir => ir.id === immunizationId);
    if (index > -1) {
      this.selectedImmunizationRecords.splice(index, 1);
    }
  }

  public onCreateCredential() {
    this.busy = this.issuerResource.issueCredential(this.patient.id, this.selectedImmunizationRecords)
      .subscribe((issuedCredential: string) => {
        this.issuedCredential = issuedCredential;
        this.savedImmunizationRecords.push(...this.selectedImmunizationRecords);
        this.selectedImmunizationRecords = [];
      });
  }

  public onLogout() {
    this.router.navigate(['/login']);
  }

  public ngOnInit(): void {
    const patientId = this.authService.token.userId;

    const immunizations$ = this.immunizationResource.immunizations(patientId);
    const patient$ = this.issuerResource.getPatientByUserId(patientId)
      .pipe(
        exhaustMap((patient: Patient) =>
          (!patient)
            ? this.issuerResource.createPatient(this.authService.token)
            : of(patient)
        )
      );

    this.busy = forkJoin({
      immunizationRecords: immunizations$,
      patient: patient$
    }).subscribe((response: { immunizationRecords: ImmunizationRecord[], patient: Patient; }) => {
      this.immunizationRecords = response.immunizationRecords;
      this.patient = response.patient;
    });
  }
}
