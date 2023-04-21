import { Component, Input } from '@angular/core';
import { Team } from 'src/app/shared/team';


@Component({
  selector: 'fm-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  @Input() teams: Team[];

}
