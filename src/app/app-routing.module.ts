import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'view-contacts', component: ViewContactsComponent },
  { path: 'createContact', component: CreateContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'contact-detail', component: ContactDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }