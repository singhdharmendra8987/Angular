import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './content-projection/auth-form/auth-form.component';
import { ShowContentProjectionComponent } from './content-projection/show-content-projection.component';
import { HomeComponent } from './home.component';
import { CustomFormElementComponent } from './custom-form-element/custom-form-element.component';
import { CustomSelectComponent } from './custom-form-element/form-element/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    ShowContentProjectionComponent,
    HomeComponent,
    CustomFormElementComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
