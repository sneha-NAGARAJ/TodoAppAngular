import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserloginService } from '../../service/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private service: UserloginService, private snackbar: MatSnackBar, private router: Router) { }

  login(formlogin: NgForm) {
    console.log(formlogin);

    this.service.login(formlogin).subscribe((res:
      {
        pic: string,
        statusCode: number,
        message: string,
        token: string,
        userId: number,
        userName: string

      }) => {
      console.log(res.statusCode)
      if (res.statusCode == 200) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("userid", res.userId.toString());
        localStorage.setItem("username", res.userName);
        localStorage.setItem("pic", res.pic);
        this.router.navigate(['task/task/maintask'])
        console.log("hi")

        this.showSnackBar(res.message, 'snackBarSucces')
      } else {
        this.showSnackBar(res.message, 'snackBarDanger')
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





