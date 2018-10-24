import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { CreateContactsComponent } from './pages/create-contacts/create-contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';

import { BackendService } from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewContactsComponent,
    CreateContactsComponent,
    ProfileComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule,
    HttpClientModule,
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
