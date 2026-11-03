import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Capsule } from './capsule.models';

@Injectable({
  providedIn: 'root',
})

export class CapsulesService {

  constructor(private http: HttpClient) {}

  getCapsules(): Observable<Capsule[]> {
    const url = `${environment.baseUrl}/capsules`;
    return this.http.get<Capsule[]>(url);
    
  }
} 
