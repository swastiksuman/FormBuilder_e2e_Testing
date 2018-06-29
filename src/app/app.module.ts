import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { NewLoginComponent } from './form-builder/new-login.component';



@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    NewLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
