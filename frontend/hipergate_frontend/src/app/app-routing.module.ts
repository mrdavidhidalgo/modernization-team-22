import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';

const routes: Routes = [
    {
    /*path: 'contacts/new',*/
    path: 'contacts/new',
    component: ContactCreateComponent,
    pathMatch: 'full'
  },
  {
    /*path: 'contacts/new',*/
    path: 'contacts',
    component: ContactCreateComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
