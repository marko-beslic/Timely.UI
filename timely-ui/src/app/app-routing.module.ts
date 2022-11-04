import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewWorkSessionComponent } from './work-sessions/view-work-session/view-work-session.component';
import { WorkSessionsComponent } from './work-sessions/work-sessions.component';

const routes: Routes = [
  {
    path: '',
    component: WorkSessionsComponent
  },
  {
    path: 'workSessions/:id',
    component: ViewWorkSessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
