import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AstronautsResponse, Result } from './astronauts.model';

@Injectable({
  providedIn: 'root',
})


export class AstronautsService {
  constructor(private http: HttpClient) { }

  getAstronauts(search: string = '', limit: number, offset: number): Observable<AstronautsResponse> {
    const url = `${environment.baseUrl}/${environment.version}/astronauts`;
    return this.http.get<any>(url, {
      params: {
        limit: limit,
        offset: offset,
        search: search
      }
    });
  }

  getAstronautById(id: string): Observable<Result> {
    const url = `${environment.baseUrl}/${environment.version}/astronauts/${id}`;
    return this.http.get<Result>(url);
  }
}
