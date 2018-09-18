import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
})
export class AgGridComponent implements OnInit {
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price', editable: true}
  ];
  rowData = [];

  constructor() { }

  ngOnInit() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }

}
