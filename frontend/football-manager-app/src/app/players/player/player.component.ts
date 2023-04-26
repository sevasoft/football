import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from './player.service';

@Component({
  selector: 'fm-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  id: string;
  name: string;
  birthYear: number;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getById();
  }

  setName(name: string) {
    this.name = name;
  }

  private getById() {
    this.playerService
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
