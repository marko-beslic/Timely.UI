import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { workSession } from '../models/api-models/workSession.model';

@Injectable({
  providedIn: 'root'
})
export class WorkSessionService {

  private baseApiUrl = 'https://localhost:7004';

  constructor(private httpClient: HttpClient) { }

  getWorkSession(): Observable<workSession[]> {
    return this.httpClient.get<workSession[]>(this.baseApiUrl + '/WorkSessions')
  }
}
