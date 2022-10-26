import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { workSession } from '../models/ui-models/workSession.model';
import { WorkSessionService } from './work-session.service';

@Component({
  selector: 'app-work-sessions',
  templateUrl: './work-sessions.component.html',
  styleUrls: ['./work-sessions.component.css']
})
export class WorkSessionsComponent implements OnInit {

  workSessions : workSession[] = [];
  displayedColumns: string[] = ['name', 'createdDate', 'endDate'];
  dataSource: MatTableDataSource<workSession> = new MatTableDataSource<workSession>();

  constructor(private workSessionService: WorkSessionService) { }

  ngOnInit(): void {
    // Fetch Work Sessions
    this.workSessionService.getWorkSession()
    .subscribe(
      (successResponse) => {
        this.workSessions = successResponse;
        this.dataSource = new MatTableDataSource<workSession>(this.workSessions);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

}
