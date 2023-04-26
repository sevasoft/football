import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateTeamService } from './update-team.service';

@Component({
  selector: 'fm-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css'],
})
export class UpdateTeamComponent implements OnInit {
  id: string;
  name: string;
  establishedIn: string;
  international: boolean;

  constructor(
    private route: ActivatedRoute,
    private updateTeamService: UpdateTeamService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getById();
  }

  setName(event: any) {
    this.name = event.target.value;
    // console.log(this.name);
  }

  setBirthYear(event: any) {
    this.establishedIn = event.target.value;
  }

  // Let op: de functionaliteit is erg beperkt tot alleen de naam en het geboortejaar beide tegelijkertijd te wijzigen.
  update() {
    const team: string = `name:${this.name},year_of_birth:${this.establishedIn}`;
    // console.log(player);

    this.updateTeamService
      .update(this.id, team)
      .then((response: any) => {
        // TODO
        console.log('Success?');
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  private getById() {
    this.updateTeamService
      .getById(this.id)
      .then((response: any) => {
        // console.log(response.data);

        this.name = response.data.name.toString();
        this.establishedIn = response.data.establishedIn.toString();
        this.international = response.data.international.toString();
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
