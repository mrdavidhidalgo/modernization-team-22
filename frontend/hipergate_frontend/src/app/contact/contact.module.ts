import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactCreateComponent } from './contact-create/contact-create.component';



@NgModule({
  declarations: [
    ContactCreateComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
   exports: [
    ContactCreateComponent
   ]
})
export class ContactModule { }
