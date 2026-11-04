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

  getUpcomingLaunches(): Observable<UpcomingLaunchesResponse> {
    const url = `${environment.baseUrl}/${environment.version}/launches/upcoming/?limit=12`;
    return this.http.get<UpcomingLaunchesResponse>(url);
  }

  getLaunchDetailsById(id: string): Observable<LaunchDetailsResponse> {
    const url = `${environment.baseUrl}/${environment.version}/launches/${id}`;
    return this.http.get<LaunchDetailsResponse>(url);
  }
}