
import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {


  constructor(private service: TaskService, private snackbar: MatSnackBar) { }
  @ViewChild('form') taskForm: any
  userId: any;
  ngOnInit(): void {
    this.userId = localStorage.getItem('userid') || null
    
  }

  submitedFrm(formData: any) {
    const uploadedData = new FormData()
    uploadedData.append('task', formData['task'])
    uploadedData.append('description', formData['description'])
    uploadedData.append('priority', formData['priority'])
    uploadedData.append('user', this.userId)
    console.log(this.userId)
    this.service.submited(uploadedData).subscribe((res: 
      { statusCode: number, msg: string }) => {
      console.log("res.statusCode", res.statusCode);
      // console.log("res.uploadedData", uploadedData);

      if (res.statusCode == 201) {
        this.showSnackBar(res.msg, 'snackBarSuccess')
        // this.taskForm.reset()
      }
      else {
        this.showSnackBar(res.msg, 'snackBarDanger')
      }
    })
  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }
}
