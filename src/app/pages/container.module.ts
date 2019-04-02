import { Component } from '@angular/core';
import { MobileNavBArComponent } from './../components/mobile-nav-bar/mobile-nav-bar.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.component';
import { ContainerPage } from './container.component';
import { RouterModule, Routes } from '@angular/router';
import {  DetallePage } from './detalle/detalle.component';



const routes: Routes = [
  {
      path     : 'pages',
      component: ContainerPage,
      children: [
        {
        path     : 'home',
        component: HomePage
      }
    ]
  
     
  },
  { path: '**', redirectTo: 'pages' }

  

];
@NgModule({
  declarations: [HomePage, ContainerPage, DetallePage,NavbarComponent,MobileNavBArComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ContainerModule { }
