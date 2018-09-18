import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DataTableComponent } from 'src/app/data-table/data-table.component';

const routes: Routes = [
  { path: '', component: AgGridComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'data-table', component: DataTableComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouteModule { }
