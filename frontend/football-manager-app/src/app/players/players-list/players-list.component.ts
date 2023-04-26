import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../shared/player';
import { PlayersListService } from './players-list.service';

@Component({
  selector: 'fm-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  data: any;
  editLink: string;
  @Input() player: Player;

  constructor(private playersListService: PlayersListService) {}

  ngOnInit(): void {
    this.editLink = '/players/' + this.player.id;
  }

  addPlayer(player: string) {
    this.playersListService.add(player);
  }

  deletePlayer() {
    this.playersListService.delete(this.player.id.toString());
  }
}
