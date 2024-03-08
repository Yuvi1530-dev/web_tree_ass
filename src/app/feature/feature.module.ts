import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from "../service/user.service";
@NgModule({
  declarations: [
    TaskListComponent,
    TaskEditComponent,
    TaskCreateComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FeatureRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports:[ 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UserService]
})
export class FeatureModule { }
