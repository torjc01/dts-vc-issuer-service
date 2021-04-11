import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { AppConfig, APP_CONFIG } from 'app/app-config.module';
import { ApiResourceUtilsService } from '@core/resources/api-resource-utils.service';
import { LoggerService } from '@core/services/logger.service';

import { Patient } from '../models/patient.model';
import { ImmunizationRecord } from '../models/immunization-record.model';

@Injectable({
  providedIn: 'root'
})
export class IssuerResource {
  public constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: HttpClient,
    private logger: LoggerService,
    private apiResourceUtilsService: ApiResourceUtilsService
  ) { }

  public getPatientByPatientId(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(`${ this.config.apiEndpoints.issuer }/patients/${ patientId }`)
      .pipe(
        map((response: Patient) => response),
        tap((patient: Patient) => this.logger.info('PATIENT', patient)),
        catchError((error: any) => {
          this.logger.error('IssuerResource::getPatientByPatientId error has occurred: ', error);
          throw error;
        })
      );
  }

  public getPatientByUserId(userId: number): Observable<Patient> {
    return this.http.get<Patient>(`${ this.config.apiEndpoints.issuer }/patients/${ userId }`)
      .pipe(
        map((response: Patient) => response),
        tap((patient: Patient) => this.logger.info('PATIENT', patient)),
        catchError((error: any) => {
          this.logger.error('IssuerResource::getPatientByUserId error has occurred: ', error);
          throw error;
        })
      );
  }

  public createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${ this.config.apiEndpoints.issuer }/patients`, patient)
      .pipe(
        map((response: Patient) => response),
        tap((patient: Patient) => this.logger.info('PATIENT', patient)),
        catchError((error: any) => {
          this.logger.error('IssuerResource::createPatient error has occurred: ', error);
          throw error;
        })
      );
  }

  public issueCredential(patientId: number, immunizationRecords: ImmunizationRecord[]): Observable<Patient> {
    // TODO how does immunization map to payload?
    // const payload = immunizationRecords.map(({ id, guid, fullUrl: uri }: ImmunizationRecord) => ({ id, guid, uri }));
    return this.http.post<Patient>(`${ this.config.apiEndpoints.issuer }/patients/${ patientId }/credential`, immunizationRecords)
      .pipe(
        map((response: Patient) => response),
        tap((patient: Patient) => this.logger.info('PATIENT', patient)),
        catchError((error: any) => {
          this.logger.error('IssuerResource::createPatient error has occurred: ', error);
          throw error;
        })
      );
  }
}
