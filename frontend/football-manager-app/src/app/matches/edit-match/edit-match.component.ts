import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DropdownComponent, DropdownValue } from 'src/app/dropdown-component/dropdown-component.component';
import { TeamsService } from 'src/app/teams/teams.service';

@Component({
  selector: 'fm-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})


export class EditMatchComponent {
  id: string;
  team1: string;
  team2: string;
  goalsTeam1: number;
  goalsTeam2: number;
  matchDate: Date;
  
  
  
  dropdownValues: DropdownValue[] = [];  
  
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  public updateTeam (value: any){
  }

  ngOnInit() {
    let teamsService = new TeamsService;
    let teamsFromDatabase = teamsService.getTeams().then((response: any)=>{ 
      let data = response.data
      console.log(data);
      for (let team of data) {
      this.dropdownValues.push(new DropdownValue(team.id, team.name));
      
    }; });
    this.id = this.route.snapshot.paramMap.get('id')!;
    
    
  }

  setName(event: any) {
    // this.name = event.target.value;
    // console.log(this.name);
  }

  update() {
    const team: string = `team1:${this.team1},established_in:${this.goalsTeam1}`;
    console.log(team);
  }
}
