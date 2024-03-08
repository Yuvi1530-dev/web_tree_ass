import { Component, OnInit } from '@angular/core';
import { taskIn } from "../../service/type-declare";
import { ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
 taskDetail:taskIn[]=[];
  constructor(private route :ActivatedRoute,private routes : Router){}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
     let task_List= JSON.parse(localStorage.getItem("task_details") || '[]');
     task_List.forEach((val:any)=>{
      if(val.id==parseInt(this.route.snapshot.paramMap.get('id')!,10)){
        this.taskDetail.push(val);
      }
    });
    }else{
      this.routes.navigate(['task-list'])
    }
  }
}
