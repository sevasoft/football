import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DropdownComponent, DropdownValue } from 'src/app/dropdown-component/dropdown-component.component';

@Component({
  selector: 'fm-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})


export class EditMatchComponent {
  id: string;
  
  dropdownValues = [new DropdownValue( 2, 'NameTeam'),new DropdownValue( 3, 'joejoe')];
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  public updateTeam (value: any){
    alert('hoihoi');
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  setName(event: any) {
    // this.name = event.target.value;
    // console.log(this.name);
  }

}



