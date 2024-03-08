import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TaskCreateComponent
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'task-list',
        component: TaskListComponent
      }
    ]
  }, {
    path: '',
    children: [
      {
        path: 'task/edit/:id',
        component: TaskEditComponent
      }
    ]
  },{
    path: '',
    children: [
      {
        path: 'task/details/:id',
        component: TaskDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
