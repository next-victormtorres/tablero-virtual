import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardNoteComponent } from './dashboard-note/dashboard-note.component';

export const dashboardRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard-note',
        component: DashboardNoteComponent
    }


];    

export const RUTAS_DASHBOARD = RouterModule.forChild(dashboardRoutes);