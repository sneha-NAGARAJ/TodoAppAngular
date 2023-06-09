import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


  export class TaskComponent implements OnInit {

    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
    logout(){
      localStorage.clear();
      this.router.navigate(['/user/dashboard'])
    }

    
  


}
