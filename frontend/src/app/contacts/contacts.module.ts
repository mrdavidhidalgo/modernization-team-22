import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../app-header/app-header.module';
import { BatchCreationComponent } from './batch-creation/batch-creation.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipModule } from 'primeng/tooltip';
import { DndDirective } from './batch-creation/dnd.directive';
@NgModule({
  declarations: [BatchCreationComponent,DndDirective],
  imports: [
    CommonModule, AppHeaderModule, ReactiveFormsModule,MatTooltipModule,TooltipModule
  ],
  exports: [BatchCreationComponent]
})
export class ContactsModule { }
