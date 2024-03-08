import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../service/user.service";
import { taskIn } from "../../service/type-declare";
// sweetalert2/dist/sweetalert2.js
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList!: taskIn[];

  constructor(private route: Router, private service: UserService) {

  }
  ngOnInit(): void {
    this.taskList = JSON.parse(localStorage.getItem("task_details") || '[]');
  }
  editTask(id: any) {
    this.route.navigate([`task/edit/${id}`], {})
  }
  changeStatus(id: any, status: any) {
    let get_status = status == 1 ? 'Complete' : 'Incomplete';
    this.service.sucessAlert("", `Are You Sure You Want Cahnge The Status To ${get_status}`, 'info', true, 'Okay', 'Cancel').then((result: any) => {
      if (result.isConfirmed == true) this.service.updateTask(id).then((res: any) => {
        if (res == true)  {
          this.service.sucessAlert("Success", 'Status Changed Successfully', 'success', false, 'Okay', '').then((result: any) => { 
            this.taskList = JSON.parse(localStorage.getItem("task_details") || '[]');
          });
        }
      })
    })
  }
  deleteTask(id: any) {
    this.service.showAlert().then((val: any) => {
      if (val == true) {
        this.service.deleteTask(id).then((res: any) => {
          if (res[0] == true) {
            this.service.sucessAlert("Task Removed", `${res[1]} Deleted`, 'success', false, 'Okay', '').then((result: any) => { });
          } else {
            this.service.failureAlert("You Can't Delete").then((result: any) => {
            });
          }
          this.taskList = JSON.parse(localStorage.getItem("task_details") || '[]');
        })
      }
      else {
        this.service.failureAlert('Canceled').then((result: any) => {
          console.log(result, "res")
        });
      }
    }).catch((err) => {
      this.service.failureAlert('Error Accured');
    })
    //;
    // this.taskList = JSON.parse(localStorage.getItem("task_details") || '[]');
  }
  viewTask(id:number){
    this.route.navigate([`task/details/${id}`])
  }
}
