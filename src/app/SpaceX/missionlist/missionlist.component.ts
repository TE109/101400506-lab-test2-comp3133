import { Component } from '@angular/core';
import { FetchAPIService } from '../fetch-api.service';
import { CommonModule } from '@angular/common';
import { Mission } from '../../mission';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CommonModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  missionList: Mission[] = [];

  constructor(private fetchService: FetchAPIService) {}

  ngOnInit() {
    this.fetchService.fetchMissions('https://api.spacexdata.com/v3/launches').subscribe((data: any) => {
      this.missionList = data.map((mission: any) => ({
        flight_number: mission.flight_number,
        mission_name: mission.mission_name,
        launch_year: mission.launch_year,
        details: mission.details,
        mission_patch_small: mission.links.mission_patch_small,
        rocket: {
          rocket_name: mission.rocket.rocket_name,
          rocket_type: mission.rocket.rocket_type
        },
        links: {
          mission_patch_small: mission.links.mission_patch_small,
          article_link: mission.links.article_link,
          wikipedia: mission.links.wikipedia,
          video_link: mission.links.video_link
        }
      }));
    });
  }
}
