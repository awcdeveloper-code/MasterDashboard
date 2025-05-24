import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDetailsComponent } from './table-details/table-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tables', pathMatch: 'full' },
    { path: 'table-details/:number', component: TableDetailsComponent },
    { path: '**', redirectTo: 'tables' }
  ];
  
