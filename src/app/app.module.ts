import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HostsliceComponent } from './hostslice/hostslice.component';
import { BrianPhotoComponent} from './brian-photo/brian-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HostsliceComponent,
    BrianPhotoComponent,
  ],
  imports: [
    BrowserModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
