import { Component } from '@angular/core';
import { basepicUrl } from 'environment';

@Component({
  selector: 'app-maintask',
  templateUrl: './maintask.component.html',
  styleUrls: ['./maintask.component.css']
})
export class MaintaskComponent {
  
  constructor() {

  }
  image: any
  userName: any;


  ngOnInit(): void {
    this.image = basepicUrl + localStorage.getItem('pic')

    this.userName = localStorage.getItem('username') || null
  }
}