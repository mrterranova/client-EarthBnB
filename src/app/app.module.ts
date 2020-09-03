import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrianPhotoComponent } from './brian-photo/brian-photo.component';
import { HostsliceComponent } from './hostmod/hostslice/hostslice.component';
import { HostheaderComponent } from './hostmod/hostheader/hostheader.component';
import { LefthostbodyComponent } from './hostmod/lefthostbody/lefthostbody.component';
import { RighthostbodyComponent } from './hostmod/righthostbody/righthostbody.component';
import { HosticonsComponent } from './hostmod/hosticons/hosticons.component';
import { HostbioComponent } from './hostmod/hostbio/hostbio.component';
import { HostduringyourstayComponent } from './hostmod/hostduringyourstay/hostduringyourstay.component';
import { HostsuperhostexplainationComponent } from './hostmod/hostsuperhostexplaination/hostsuperhostexplaination.component';
import { HostlanguageandresponserateComponent } from './hostmod/hostlanguageandresponserate/hostlanguageandresponserate.component';
import { HostbuttonsandsecurityComponent } from './hostmod/hostbuttonsandsecurity/hostbuttonsandsecurity.component';

@NgModule({
  declarations: [
    AppComponent,
    HostsliceComponent,
    BrianPhotoComponent,
    HostheaderComponent,
    LefthostbodyComponent,
    RighthostbodyComponent,
    HosticonsComponent,
    HostbioComponent,
    HostduringyourstayComponent,
    HostsuperhostexplainationComponent,
    HostlanguageandresponserateComponent,
    HostbuttonsandsecurityComponent,
  ],
  imports: [BrowserModule, RouterModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
