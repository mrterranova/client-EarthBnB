import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MptsComponentComponent } from '../mpts/mpts-component/mpts-component.component'

const routes: Routes = [
  {
    path: 'mpts',
    component: MptsComponentComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
