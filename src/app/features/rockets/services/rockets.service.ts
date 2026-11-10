import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result, RocketsResponse } from './rockets.models';

@Injectable({
  providedIn: 'root'
})


export class RocketsService {
  constructor(private http: HttpClient) { }

  getRockets(search: string = '', limit: number, offset: number): Observable<RocketsResponse> {
    const url = `${environment.baseUrl}/${environment.version}/launcher_configurations`;

    return this.http.get<RocketsResponse>(url, {
      params: {
        limit: limit,
        offset: offset,
        search: search
      }
    });
  }

  getRocketDetailsById(id: string): Observable<Result> {
    const url = `${environment.baseUrl}/${environment.version}/launcher_configurations/${id}`;
    return this.http.get<Result>(url, { params: { mode: 'detailed' } });
  }

}
