import axios from 'axios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'My App';
  data: any;

  ngOnInit() {
    axios
      // .get('https://dummyjson.com/todos')
      .get('http://localhost:8080/teams')
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
