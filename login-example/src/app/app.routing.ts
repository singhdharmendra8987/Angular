import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SecurityCheck } from './services/security/security-check';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [SecurityCheck] },
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(routes);
