import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: PageComponent, data: {
      page: 'home', title: 'Home Page'
    }},
    {path: 'about', component: PageComponent, data: {
      page: 'about', title: 'About Page'
    }},
    {path: 'contact', component: PageComponent, data: {
      page: 'contact', title: 'Contact Page'
    }},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}