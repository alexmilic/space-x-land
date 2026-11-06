import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UpcomingLaunchesResponse } from './upcoming-launches.models';
import { LaunchDetailsResponse } from './launch-details.models';

@Injectable({
  providedIn: 'root'
})


export class UpcomingLaunchesService {

  constructor(private http: HttpClient) { }

  getUpcomingLaunches(search: string = '', limit: number, offset: number): Observable<UpcomingLaunchesResponse> {
    const url = `${environment.baseUrl}/${environment.version}/launches/upcoming`;
    return this.http.get<UpcomingLaunchesResponse>(url, {
      params: {
        limit: limit,
        offset: offset,
        search: search
      }
    });
  }

  getLaunchDetailsById(id: string): Observable<LaunchDetailsResponse> {
    const url = `${environment.baseUrl}/${environment.version}/launches/${id}`;
    return this.http.get<LaunchDetailsResponse>(url);
  }
}