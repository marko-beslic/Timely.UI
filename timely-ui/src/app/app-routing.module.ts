import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkSessionsComponent } from './work-sessions/work-sessions.component';

const routes: Routes = [
  {
    path: '',
    component: WorkSessionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
