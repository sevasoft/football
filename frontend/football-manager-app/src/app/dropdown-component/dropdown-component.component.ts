import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";


export class DropdownValue {
  value: number;
  label: string;

  constructor(value: number, label: string) {
    this.value = value;
    this.label = label;
  }
}


@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'dropdown',
  template: `

    <ul>    
    <select #teams (change)="selectItem(teams.value)" name="value" id="values">
        <option *ngFor="let value of values" value="{{ value.value }}">{{ value.label }}</option>
        </select>
    </ul>
  `
})
export class DropdownComponent {
  @Input()
  values: DropdownValue[];

  @Output()
  select: EventEmitter<DropdownValue>;

  constructor() {
    this.select = new EventEmitter();
  }

  selectItem(value: any) {
    this.select.emit(value);
    console.log(value);
  }


}