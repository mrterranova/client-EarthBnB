import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


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
import { HostDataService } from './host-data-service/host-data.service';
import { TitleMptsComponent } from './mpts/title-mpts/title-mpts.component';
import { MptsComponentComponent } from './mpts/mpts-component/mpts-component.component';
import { CardMptsComponent } from './mpts/card-mpts/card-mpts.component';


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
    TitleMptsComponent,
    MptsComponentComponent,
    CardMptsComponent,
  ],
  imports: [BrowserModule, RouterModule, HttpClientModule, ],

  providers: [HostDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
