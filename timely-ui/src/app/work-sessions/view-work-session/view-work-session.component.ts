import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workSession } from 'src/app/models/ui-models/workSession.model';
import { WorkSessionService } from '../work-session.service';

@Component({
  selector: 'app-view-work-session',
  templateUrl: './view-work-session.component.html',
  styleUrls: ['./view-work-session.component.css']
})
export class ViewWorkSessionComponent implements OnInit {

  workSessionId: string | null | undefined;
  workSession: workSession = {
    id: '',
    Name: '',
    CreatedDate: '',
    EndDate: ''
  };

  constructor(private readonly workSessionService: WorkSessionService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.workSessionId = params.get('id');


      }
    );
  }

  onAdd(): void {
    this.workSessionService.addWorkSession(this.workSession)
    .subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) => {

      }
    )
  }

}
