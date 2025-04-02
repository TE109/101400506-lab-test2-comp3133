import { Component } from '@angular/core';
import { FetchAPIService } from '../fetch-api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  missionList: any[] = [];
  searchForm: any;

  constructor(private fetchService: FetchAPIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      year: ['']
    })
  }

  fetchByYear() {
    this.fetchService.fetchMissions('https://api.spacexdata.com/v3/launches?launch_year=' + this.searchForm.value.year).subscribe((data: any) => {
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
