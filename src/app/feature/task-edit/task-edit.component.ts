import { Component, OnInit } from '@angular/core';
import { taskIn } from "../../service/type-declare";
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  taskEdit!: FormGroup;
  formSubmit: boolean = false;
  taskDetails: any = [];
  constructor(private fb: FormBuilder, private routerValue: ActivatedRoute, private route: Router, private service: UserService) {
    this.taskEdit = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      describtion: [null, [Validators.required, Validators.minLength(10)]],
      due_date: [null, [Validators.required]]
    })
  }
  ngOnInit(): void {
    let taskFilter = JSON.parse(localStorage.getItem("task_details") || '[]');
    taskFilter.forEach((res: any) => {
      if (res.id == this.routerValue.snapshot.paramMap.get('id')) {
        this.taskDetails = res;
      }
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.taskEdit.controls
  }

  submitForm() {
    this.formSubmit = true;
    if (this.taskEdit.valid) {
      this.service.editTask(parseInt(this.routerValue.snapshot.paramMap.get('id')!, 10), this.taskEdit.value).then((res: any) => {
        if (res == true) {
          this.service.sucessAlert("Success", "Task Saved Successfully", "success", false, "Okay", "").then((result: any) => {
            if (result.isConfirmed == true) {
              this.route.navigate(['task-list'])
            }
          })
        }
      })
    }
  }
}
