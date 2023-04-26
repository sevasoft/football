import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from './team.service';

@Component({
  selector: 'fm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamCompononent implements OnInit {
  id: string;
  name: string;
  birthYear: number;

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
        this.birthYear = response.data.birthYear;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
