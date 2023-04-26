import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateTeamService } from './update-team.service';
import { Location } from '@angular/common';

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
    private updateTeamService: UpdateTeamService,
    private _location: Location
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
    const team: string = `name:${this.name},established_in:${this.establishedIn},is_international:${this.international}`;
    console.log(team);

    this.updateTeamService
      .update(this.id, team)
      .then((response: any) => {
        //TO DO
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
  backClicked() {
    this._location.back();
  }
}
