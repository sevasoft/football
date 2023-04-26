import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from './update-team.service';

@Component({
  selector: 'fm-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css'],
})
export class TeamCompononent implements OnInit {
  id: string;
  name: string;
  establishedIn: number;
  international: boolean;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getById();
  }

  setName(name: string) {
    this.name = name;
  }

  private getById() {
    this.teamService
      .getById('9')
      .then((response: any) => {
        console.log(response.data);

        this.name = response.data.name;
        this.establishedIn = response.data.establishedIn;
        this.international = response.data.international;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
