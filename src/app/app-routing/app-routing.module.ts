import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MainpgComponent } from '../AdditionalPgs/mainpg/mainpg.component';
import { DirectoryComponent } from '../directory/directory.component';


const routes: Routes = [
  {
    path:"",
    component: MainpgComponent
  },{
      path:"rooms/:id",
      component: DirectoryComponent
    }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
