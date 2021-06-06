import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharityDetailComponent } from './charity-detail/charity-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',component:HomeComponent},
  { path: 'dashboard',component:CharityDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent= [HomeComponent,CharityDetailComponent]
