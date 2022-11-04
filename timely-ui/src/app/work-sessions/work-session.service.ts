import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddWorkSessionRequest } from '../models/api-models/add-student-request.model';
import { workSession } from '../models/api-models/workSession.model';

@Injectable({
  providedIn: 'root'
})
export class WorkSessionService {

  private baseApiUrl = 'https://localhost:7004';

  constructor(private httpClient: HttpClient) { }

  getWorkSessions(): Observable<workSession[]> {
    return this.httpClient.get<workSession[]>(this.baseApiUrl + '/workSessions')
  }

  getWorkSession(workSessionId: string): Observable<workSession> {
    return this.httpClient.get<workSession>(this.baseApiUrl + '/workSessions/' + workSessionId)
  }

  addWorkSession(workSessionRequest: workSession): Observable<workSession> {
    const addWorkSessionRequest: AddWorkSessionRequest = {
      name: workSessionRequest.Name,
      createdDate: workSessionRequest.CreatedDate,
      endDate:workSessionRequest.EndDate
    }

    return this.httpClient.post<workSession>(this.baseApiUrl + '/workSessions/add', addWorkSessionRequest)
  }

}
