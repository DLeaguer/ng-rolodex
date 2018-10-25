import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { CreateContactsComponent } from './pages/create-contacts/create-contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'view-contacts', component: ViewContactsComponent },
  { path: 'create-contacts', component: CreateContactsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }