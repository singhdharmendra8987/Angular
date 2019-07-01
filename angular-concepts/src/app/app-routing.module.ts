import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowContentProjectionComponent } from './content-projection/show-content-projection.component';
import { HomeComponent } from './home.component';
import { CustomFormElementComponent } from './custom-form-element/custom-form-element.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'content-projetion', component: ShowContentProjectionComponent },
  { path: 'custom-form-control', component: CustomFormElementComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
