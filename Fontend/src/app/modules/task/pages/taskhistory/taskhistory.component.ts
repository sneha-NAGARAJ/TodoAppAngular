import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-taskhistory',
  templateUrl: './taskhistory.component.html',
  styleUrls: ['./taskhistory.component.css']
})
export class TaskhistoryComponent {
  
  constructor(private service: TaskService) { }
  
  taskList: any[] = [];
  
  userid: any;
  showSpinner = false

  searchText: string = ''


  ngOnInit(): void {

    this.userid = localStorage.getItem('userid')
    this.loadCompletedTasks();
  }

  loadCompletedTasks() {

    this.service.fetchPendingTasks(this.userid, 'completed').subscribe((res:
      { statusCode: number, tasks: any[], msg: string }) => {
      this.taskList = res.tasks

      console.log(this.taskList, this.userid)

    })
  }
  searchItems(){
    console.log(this.searchText)
    setTimeout(() => {
      this.showSpinner = true
    }, 1000);
   
    setTimeout(() => {
    
      
       this.service.searchTask(this.userid, this.searchText).subscribe((res: { statusCode: number, searchResult: any[], msg: string }) => {

      this.taskList = res.searchResult
      console.log(this.taskList)
     
    })
    this.showSpinner = false
    }, 2000);
   

  }
}
