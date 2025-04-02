import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchAPIService } from '../fetch-api.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'] 
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(private fetchService: FetchAPIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('flight_number');
    if (id) {
      this.fetchById(id); 
    }
  }

  fetchById(id: string): void {
    this.fetchService.fetchMissions('https://api.spacexdata.com/v3/launches/' + id).subscribe((data: any) => {
      if (data) {
        this.mission = {
          flight_number: data.flight_number,
          mission_name: data.mission_name,
          launch_year: data.launch_year,
          details: data.details,
          mission_patch_small: data.links.mission_patch_small,
          rocket: {
            rocket_name: data.rocket.rocket_name,
            rocket_type: data.rocket.rocket_type
          },
          links: {
            mission_patch_small: data.links.mission_patch_small,
            article_link: data.links.article_link,
            wikipedia: data.links.wikipedia,
            video_link: data.links.video_link
          }
        };
      }
    });
  }
}
