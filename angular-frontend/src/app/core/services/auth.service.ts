import { Injectable } from '@angular/core';

export interface AuthToken {
  id?: number;
  userId: string;
  hpdid: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public constructor() { }

  public get token(): AuthToken {
    return {
      id: 0,
      // TODO would be provide through authentication, but currently
      // seeded with immunization identifier so the APIs have a common
      userId: '900489178',
      hpdid: '22091b5c-b2df-4f6e-b184-46d7bee84b08',
      fullName: 'Roland Ethan',
      dateOfBirth: '1952-1-14',
      email: 'roland.ethan@rolandethan.ca'
    };
  }
}
