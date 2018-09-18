import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { DataTableModule } from 'angular-6-datatable';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
    declarations: [
        AppComponent,
        AgGridComponent,
        DataTableComponent
    ],
    imports: [
        AppRouteModule,
        BrowserModule,
        DataTableModule,
        AgGridModule.withComponents(AgGridComponent)
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
