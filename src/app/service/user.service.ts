import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { taskIn } from "./type-declare";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  taskList!: taskIn[];
  taskManage!: taskIn[];
  constructor(private http: HttpClient) {
    this.taskList = JSON.parse(localStorage.getItem("task_details") || '[]');
    if (localStorage.getItem("task_details")) this.taskManage = JSON.parse(localStorage.getItem("task_details") || "[]");
    else this.taskManage = [];
  }

  createTask(value: any) {
    return new Promise((resolve, reject) => {
      let get_form = Object.assign(value, {});
      let task_ListDeatil = JSON.parse(localStorage.getItem("task_details") || "[]");
      let task_id = task_ListDeatil.length != 0 ? task_ListDeatil[task_ListDeatil.length - 1]['id'] + 1 : 1;
      this.taskManage.push({
        "id": task_id,
        "title": get_form.title,
        "description": get_form.describtion,
        "due_date": get_form.due_date,
        "n_status": 1
      });
      localStorage.setItem("task_details", JSON.stringify(this.taskManage));
      resolve([true, get_form.title])
    })

  };
  editTask(id: number, value: any) {
    return new Promise((resolve, reject) => {
      let get_form = Object.assign(value, {});
      this.taskList.filter((value: any, index: any) => {
        if (value.id == id) {
          this.taskList[index]['title'] = get_form.title;
          this.taskList[index]['description'] = get_form.describtion;
          this.taskList[index]['due_date'] = get_form.due_date;
          resolve(true);
        }
        localStorage.setItem('task_details', JSON.stringify(this.taskList) || '[]');
      });
    })
  }
  updateTask(id: any) {
    return new Promise((resolve, reject) => {
      this.taskList.filter((value: any, index: any) => {
        if (value.id == id) {
          this.taskList[index]['n_status'] = this.taskList[index]['n_status'] == 1 ? 2 : 1;
          resolve(true);
        }
        localStorage.setItem('task_details', JSON.stringify(this.taskList) || '[]');
      });
    })
  }
  deleteTask(id: any) {
    return new Promise((resolve, reject) => {
      let getTitle = '';
      if (this.taskList.length != 0) {
        let findIndex = this.taskList.findIndex((value: any, index: any) => { return value.id == id });
        getTitle = this.taskList[findIndex]['title'];
        this.taskList.splice(findIndex, 1)
        localStorage.setItem('task_details', JSON.stringify(this.taskList) || '[]');
        resolve([true, getTitle])
      } else {
        resolve([false, getTitle])
      }
    })
  }

  showAlert() {
    // return new Promise((resolve, reject) => { 
    return Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      text: 'You want delete this task.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Okay',
      cancelButtonText: 'cancel'
    }).then((result: any) => {
      if (result.value) {
        return true
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false
      }
      return;
    })
  };

  sucessAlert(title: string, content: string, template: any, showCancle: boolean, confirmButton: string, cancelButton: string) {
    return Swal.fire({
      title: title,
      text: content,
      icon: template,
      showCancelButton: showCancle,
      confirmButtonText: confirmButton,
      cancelButtonText: cancelButton
    })
  };
  failureAlert(title: string,) {
    return Swal.fire(
      title,
      '',
      'error'
    )
  }
}
