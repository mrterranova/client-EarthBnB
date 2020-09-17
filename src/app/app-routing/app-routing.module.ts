import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from '../directory/directory.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms/1', pathMatch: 'full' },
  {
    path: 'rooms/:id',
    component: DirectoryComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
