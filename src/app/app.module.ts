import { PostService } from './service/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import  { Bootstrap } from 'bootstrap';
import  { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NewTempComponent } from './new-temp/new-temp.component';
import { GetModuleComponent } from './http/get-module/get-module.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FormComponent,
    NewTempComponent,
    GetModuleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
