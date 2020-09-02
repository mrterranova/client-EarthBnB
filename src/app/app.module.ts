import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrianPhotoComponent } from './brian-photo/brian-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    BrianPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
