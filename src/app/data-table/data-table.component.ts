import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit {
  public data: any;
  constructor() { }

  ngOnInit() {
    // this.data = [{ 'name': 'Anil', 'anil.singh581@gmail.com': 'ssd', 'age': '34', 'city': 'Noida, UP, India' },
    // { 'name': 'Anil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'Sunil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'Alok', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'Tinku', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'XYZ', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'asas', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'erer', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'jhjh', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' }
    // ];

    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.data = rowData);
  }

}
