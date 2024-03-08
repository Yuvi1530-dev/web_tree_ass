import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../service/user.service";
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskCreate!: FormGroup;
  taskManage: any = [];
  formSubmit : boolean =false;
  constructor(private fb: FormBuilder, private service: UserService) {
    this.taskCreate = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      describtion: ['', [Validators.required, Validators.minLength(10)]],
      due_date: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {

  }
  get f(): { [key: string]: AbstractControl } {
    return this.taskCreate.controls
  }
  submitForm() {
    this.formSubmit=true;
    if (this.taskCreate.valid) {
      this.service.createTask(this.taskCreate.value).then((result: any) => {
        if (result[0]== true) this.service.sucessAlert("Success", `${result[1]} Task Added Successfully`,'sucess',false,'Okay','');
        else this.service.failureAlert(`${result[1]} Task Already Exist`)
      })
    }
  }

}
