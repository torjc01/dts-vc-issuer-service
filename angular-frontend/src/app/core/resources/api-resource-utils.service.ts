import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiResourceUtilsService {
  /**
   * @description
   * Make HttpParams from an object literal.
   */
  public makeHttpParams(queryParams: { [key: string]: any; }): HttpParams | undefined {
    if (!queryParams) {
      return;
    }

    const keys = Object.keys(queryParams);

    if (!keys.length) {
      return;
    }

    return keys.reduce(
      (httpParams: HttpParams, key: string) =>
        (![null, undefined].includes(queryParams[key]))
          ? this.makeHttpParam(httpParams, key, queryParams[key])
          : httpParams,
      new HttpParams()
    );
  }

  /**
   * @description
   * Append a param to the HttpParams.
   */
  private makeHttpParam(httpParams: HttpParams, key: string, value: any): HttpParams {
    return (Array.isArray(value))
      ? value.reduce((h, b) => this.makeHttpParam(h, key, b), httpParams)
      : httpParams.append(key, `${ value }`);
  }
}
