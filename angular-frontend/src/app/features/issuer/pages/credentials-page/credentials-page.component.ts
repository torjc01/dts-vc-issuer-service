import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { forkJoin, Observable, Subscription } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';

import { TranslocoService } from '@ngneat/transloco';

import { ToastService } from '@core/services/toast.service';

import { AuthService } from '@core/services/auth.service';
import { LoggerService } from '@core/services/logger.service';
import { AlertOptions } from '@shared/components/card-alert/card-alert.component';

import { ImmunizationRecord } from '@features/issuer/shared/models/immunization-record.model';
import { IssuerResource } from '@features/issuer/shared/services/issuer-resource.service';
import { Patient } from '@features/issuer/shared/models/patient.model';
import { PatientCredential } from '@features/issuer/shared/models/patient-credential.model';
import { ImmunizationResource } from '@features/issuer/shared/services/immunization-resource.service';

@Component({
  selector: 'app-credentials-page',
  templateUrl: './credentials-page.component.html',
  styleUrls: ['./credentials-page.component.scss']
})
export class CredentialsPageComponent implements OnInit {
  public busy: Subscription;

  /**
   * @description
   * Patient profile from the issuer API.
   */
  public patient: Patient | null;
  /**
   * @description
   * Patient immunization records from the immunization API.
   */
  public immunizationRecords: ImmunizationRecord[] | null;
  /**
   * @description
   * Patient credentials that have been issued.
   */
  public patientCredentials: PatientCredential[] | null;
  /**
   * @description
   * List of selected immunization records for addition
   * to a credential.
   */
  public selectedImmunizationRecords: ImmunizationRecord[];
  /**
   * @description
   * List of immunization records stored in a credential.
   */
  public storedImmunizationRecords: ImmunizationRecord[];
  /**
   * @description
   * Issued credential as a QRCode in Base64 format.
   */
  public issuedCredential: string | null;

  public constructor(
    private router: Router,
    private immunizationResource: ImmunizationResource,
    private issuerResource: IssuerResource,
    private authService: AuthService,
    private logger: LoggerService,
    private toastService: ToastService,
    private translocoService: TranslocoService
  ) {
    this.immunizationRecords = null;
    this.patient = null;
    this.immunizationRecords = null;
    this.patientCredentials = null;
    this.issuedCredential = null;
    this.selectedImmunizationRecords = [];
    this.storedImmunizationRecords = [];
  }

  public get username(): string {
    return this.authService.token.fullName;
  }

  /**
   * @description
   * Get the immunization record alert options.
   */
  // TODO add state to models on response to reduce recalculation, which would provide a small
  // performance boost depending on the number of immunization records expected for individuals
  public getAlertOptions(immunizationRecord: ImmunizationRecord): AlertOptions {
    const predicate = (ir: ImmunizationRecord) => ir.id === immunizationRecord.id;
    const isSaved = this.storedImmunizationRecords.some(predicate);

    if (isSaved) {
      return new AlertOptions('success', 'verified', this.translocoService.translate('vaccinationRecordReadyToBeSavedInWallet'));
    }

    const isPending = this.selectedImmunizationRecords.some(predicate);

    return (isPending)
      ? new AlertOptions('warn', 'task_alt', this.translocoService.translate('vaccinationRecordReadyToBeSavedInWallet'), true, true)
      : new AlertOptions('info', 'notification_important', this.translocoService.translate('notAddedToCertificateMessage'), true, isPending);
  }

  /**
   * @description
   * Add all the immunization records that do not already exist to the "cart".
   */
  public addAllImmunizationRecords(): void {
    if (this.immunizationRecords?.length) {
      const credentialGuids = this.getCredentialGuids(this.patientCredentials);

      this.selectedImmunizationRecords = this.immunizationRecords.reduce((
        selectableImmunizationRecords: ImmunizationRecord[],
        immunizationRecord: ImmunizationRecord
      ) => {
        if (!credentialGuids.includes(immunizationRecord.id)) {
          selectableImmunizationRecords.push(immunizationRecord);
        }

        return selectableImmunizationRecords;
      }, []);
    }
  }

  /**
   * @description
   * Add selected immunization records that do not already exist to the "cart".
   */
  public addSelectedImmunizationRecord(immunizationRecord: ImmunizationRecord): void {
    if (!this.selectedImmunizationRecords.some(ir => ir.id === immunizationRecord.id)) {
      this.selectedImmunizationRecords.push(immunizationRecord);
    }
  }

  /**
   * @description
   * Remove a selected immunization record from the "cart".
   */
  public removeSelectedImmunizationRecord(immunizationId: string): void {
    const index = this.selectedImmunizationRecords.findIndex(ir => ir.id === immunizationId);
    if (index > -1) {
      this.selectedImmunizationRecords.splice(index, 1);
    }
  }

  /**
   * @description
   * Handle the creation of a credential.
   */
  public onCreateCredential(): void {
    this.busy = this.issuerResource.issueCredential(this.patient.id, this.selectedImmunizationRecords)
      .pipe(
        map((issuedCredential: string) => this.issuedCredential = issuedCredential),
        exhaustMap((_) => this.issuerResource.patientCredentials(this.patient.id)),
        map((patientCredentials: PatientCredential[]) => {
          this.storedImmunizationRecords = this.intersectionOfImmunCreds(this.immunizationRecords, patientCredentials);
          this.patientCredentials = patientCredentials;

          this.toastService.openSuccessToast(this.translocoService.translate('createCredentialSuccessMessage'));
        })
      )
      .subscribe(() => this.selectedImmunizationRecords = []);
  }

  /**
   * @description
   * Handle logout.
   */
  public onLogout(): void {
    this.router.navigate(['/login']);
  }

  public ngOnInit(): void {
    const patientUserId = this.authService.token.userId;
    this.getPatientInformation(patientUserId);
  }

  /**
   * @description
   * Get patient immunization and credential information.
   */
  private getPatientInformation(patientUserId: string) {
    const immunizations$ = this.immunizationResource.immunizations(patientUserId);
    const patientCredentials$ = this.getPatientCredentials(patientUserId);

    this.busy = forkJoin({
      immunizationRecords: immunizations$,
      patientCredentials: patientCredentials$
    })
      .subscribe(({
        immunizationRecords,
        patientCredentials
      }: { immunizationRecords: ImmunizationRecord[]; patientCredentials: PatientCredential[]; }) => {
        if (immunizationRecords?.length) {
          this.storedImmunizationRecords = this.intersectionOfImmunCreds(immunizationRecords, patientCredentials);
          this.immunizationRecords = immunizationRecords;
          this.patientCredentials = patientCredentials;
        }
      });
  }

  /**
   * @description
   * Get a set of patients credentials and if one does not exist create the patient.
   */
  private getPatientCredentials(patientUserId: string): Observable<PatientCredential[]> {
    return this.issuerResource.getPatientByUserId(patientUserId)
      .pipe(
        map((patient: Patient) => this.patient = patient ?? null),
        exhaustMap((patient: Patient) =>
          (!patient)
            ? this.issuerResource.createPatient(this.authService.token)
              .pipe(map(() => [])) // Empty set of patient credentials
            : this.issuerResource.patientCredentials(patient.id)
              .pipe(map((credentials: PatientCredential[]) => this.patientCredentials = credentials))
        )
      );
  }

  /**
   * @description
   * Find intersection of immunizations and patient credentials to
   * determine which immunizations are associated with credentials.
   */
  private intersectionOfImmunCreds(
    immunizationRecords: ImmunizationRecord[],
    patientCredentials: PatientCredential[]
  ): ImmunizationRecord[] {
    const credentialGuids = this.getCredentialGuids(patientCredentials);

    return immunizationRecords.reduce((
      storedImmunizationRecords: ImmunizationRecord[],
      immunizationRecord: ImmunizationRecord
    ) => {
      if (credentialGuids.includes(immunizationRecord.id)) {
        storedImmunizationRecords.push(immunizationRecord);
      }

      return storedImmunizationRecords;
    }, []);
  }

  /**
   * @description
   * Filter and remove duplicate patient credential GUIDs.
   */
  private getCredentialGuids(patientCredentials: PatientCredential[]): string[] {
    const credentials = patientCredentials
      // TODO should this be for only accepted credentials? Feels like yes
      // .filter(c => c.acceptedCredentialDate)
      .map(c => c.guid);

    return [...(new Set(credentials))];
  }

    /**
   * @description 
   * Forwards to verification landing page. 
   */
     public onVerifyCredential(): void {
      window.open("http://localhost:10000", "_self");
    }
}
