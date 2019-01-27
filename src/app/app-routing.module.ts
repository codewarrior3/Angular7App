import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: PageComponent, data: {
      page: 'home', title: 'Home Page'
    }},
    {path: 'about', component: AboutComponent, data: {
      page: 'about', title: 'About Page'
    }},
    {path: 'contact', component: ContactComponent, data: {
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