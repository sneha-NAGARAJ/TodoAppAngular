import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pendingtask',
  templateUrl: './pendingtask.component.html',
  styleUrls: ['./pendingtask.component.css']
})
export class PendingtaskComponent {


  constructor(private service: TaskService, private snackbar: MatSnackBar) { }

  // [x: string]: any;
  userid: any
  taskList: any[] = []

  taskPriority: any;
  filteredList: any;

  isSelected = false;
  idModal: number = 0;
  i: number = 0;

  ngOnInit(): void {



    this.userid = localStorage.getItem('userid')
    console.log(this.userid)
    this.loadPendingTasks()
  }



  loadPendingTasks() {

    this.service.fetchPendingTasks(this.userid, 'pending').subscribe((res:
      { statusCode: number, tasks: any[], msg: string }) => {

      if (res.tasks.length > 0) {
        this.taskList = res.tasks
        this.filteredList = this.taskList
        console.log(this.taskList)
      }
    })

  }

  changeCount = 0
  filterTask() {

    if (this.taskPriority != 'all') {


      if (this.isSelected == false) {

        this.filteredList = this.taskList.filter((item: any) => {

          return item.priority.includes(this.taskPriority);
        });



        this.isSelected = true
      }

      else {
        this.filteredList = this.taskList
        this.filteredList = this.taskList.filter((item: any) => {

          return item.priority.includes(this.taskPriority);
        });
      }
    }
    else {
      this.filteredList = this.taskList
    }
  }
  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }

  updateRow(selectedItem: any, index: number) {
    console.log(selectedItem)
    const uploadedData = new FormData()

    let currentDate = new Date().toLocaleDateString()
    uploadedData.append('completion_date', currentDate)
    uploadedData.append('description', selectedItem['description'])
    uploadedData.append('task', selectedItem['task'])
    uploadedData.append('status', 'completed')
    uploadedData.append('user', this.userid)

    this.service.updateTask(selectedItem.id, uploadedData).subscribe((res:
      { statusCode: number, msg: string }) => {
      console.log(res.msg)
      this.taskList.splice(index, 1)

    })

  }
  deleteTask(id: number, index: number) {
    this.service.removeTask(id).subscribe((res:
      { statusCode: number, msg: string }) => {
      console.log(res.msg)
      this.taskList.splice(index, 1)
      console.log(this.taskList)
      this.showSnackBar(res.msg, 'snackBarDanger')

    })



  }
  modalfun(selectedItem: any, index: number) {
    console.log("selectedItem " + selectedItem['task'] + 'index' + index)
    this.task = selectedItem['task']
    this.description = selectedItem['description']
    this.priority = selectedItem['priority']
    this.idModal = index;
  }

  task = ''
  description = ''
  priority = ''


  modalfuns(formData: any) {
    console.log('data')
    const uploadedData = new FormData()

    uploadedData.append('description', formData['description'])
    uploadedData.append('task', formData['task'])
    uploadedData.append('priority', formData['priority'])
    uploadedData.append('user', this.userid)


    this.service.modalfuction(this.idModal, uploadedData).subscribe((res:
      { statusCode: number, msg: string }) => {

      console.log(res.msg)
      // this.loadPendingTasks()

      if (res.statusCode == 202) {
        console.log('dom');

        this.showSnackBar(res.msg, 'snackBarSuccess');
        this.filteredList[this.i].task = formData['task'];
        this.filteredList[this.i].description = formData['description'];
        this.filteredList[this.i].priority = formData['priority'];
      }
      else {
        console.log('doms')
        this.showSnackBar(res.msg, 'snackBarDanger')
      }
    })
  }


}
