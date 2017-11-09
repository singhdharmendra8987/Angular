import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SecurityCheck } from './services/security/security-check';
import { AuthData } from './services/auth-data.service';
import { routing } from './app.routing';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [ SecurityCheck, AuthData ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
