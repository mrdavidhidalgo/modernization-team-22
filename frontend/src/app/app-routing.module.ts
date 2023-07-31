import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatchCreationComponent} from './contacts/batch-creation/batch-creation.component';
const routes: Routes = [
  {
    path: 'upload',
    component: BatchCreationComponent
  },
  {
    path: '',
    component: BatchCreationComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
