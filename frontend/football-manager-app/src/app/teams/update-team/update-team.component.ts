import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateTeamService } from './update-team.service';
import { UpdateTeamDTO } from 'src/app/shared/updateTeamDTO';
import { Location } from '@angular/common';

import axios from 'axios';

@Component({
  selector: 'fm-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css'],
})
export class UpdateTeamComponent implements OnInit {
  id: string;
  name: string;
  establishedIn: number;
  isInternational: boolean;
  // updatedData: {
  //   name: string;
  //   establishedIn: number;
  //   isInternational: boolean;
  // };

  constructor(
    private route: ActivatedRoute,
    private updateTeamService: UpdateTeamService, private _location: Location

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getById();
  }

  setName(event: any) {
    console.log(event.target.value);
    this.name = event.target.value.toString();
    // console.log(this.name);
  }

  setEstablishedIn(event: any) {
    console.log(event.target.value);
    this.establishedIn = Number(event.target.value);
  }

  setIsInternational(event: any) {
    console.log(event.target.value);
    this.isInternational = Boolean(event.target.value);
  }

  // Let op: de functionaliteit is erg beperkt tot alleen de naam en het geboortejaar beide tegelijkertijd te wijzigen.
  update() {
    // const team: string = `name:${this.name},year_of_birth:${this.establishedIn}`;
    // const team: string = `${this.name},${this.establishedIn},${this.international}`;
    // console.log(player);

    axios.put(
      `http://localhost:8080/teams/${this.id}`,
      {
        name: this.name,
        establishedIn: this.establishedIn,
        isInternational: this.isInternational,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    // this.updateTeamService
    //   .update(this.id, {
    //     name: 'fasdfa',
    //     isInternational: false,
    //     establishedIn: 32132,
    //   })
    //   .then((response: any) => {
    //     // TODO
    //     console.log('Success?');
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });
  }

  private getById() {
    this.updateTeamService
      .getById(this.id)
      .then((response: any) => {
        console.log(response.data);

        this.name = response.data.name.toString();
        this.establishedIn = Number(response.data.establishedIn);
        this.isInternational = Boolean(response.data.international);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  backClicked() {
    this._location.back();
  }

}
