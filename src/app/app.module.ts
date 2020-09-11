import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module'
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
import { CohostDataService } from './cohost-data-service/cohost-data.service';
import { HouseRulesComponent } from './things-to-know/house-rules/houserules.component';
import { HealthSafetyComponent } from './things-to-know/health&safety/health&safety.component';
import { CancellationComponent } from './things-to-know/cancellation-policy/cancellation.component';
import { TtkContainerComponent } from './things-to-know/ttk-container/ttkcontainer.component';
import { TitleMptsComponent } from './mpts/title-mpts/title-mpts.component';
import { MptsComponentComponent } from './mpts/mpts-component/mpts-component.component';
import { CardMptsComponent } from './mpts/card-mpts/card-mpts.component';
import { HostcohostComponent } from './hostmod/hostcohost/hostcohost.component';



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
    HouseRulesComponent,
    HealthSafetyComponent,
    CancellationComponent,
    TtkContainerComponent,
    TitleMptsComponent,
    MptsComponentComponent,
    CardMptsComponent,
    HostcohostComponent,
  ],
  imports: [BrowserModule, RouterModule, HttpClientModule, AppRoutingModule ],

  providers: [HostDataService, CohostDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
