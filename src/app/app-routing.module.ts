import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './SpaceX/missionlist/missionlist.component';
import { MissionfilterComponent } from './SpaceX/missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './SpaceX/missiondetails/missiondetails.component';

const routes: Routes = [
  {path:"missionlist",component:MissionlistComponent},
{path:"missionfilter",component:MissionfilterComponent},
{path:"missiondetails/:flight_number",component:MissiondetailsComponent,data: { flight_number: 1 }}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
