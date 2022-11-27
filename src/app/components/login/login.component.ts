import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupUsers: any[] =[];
  signupObj:any ={
    userName:'',
    email:'',
    password:'',
  };
  loginObj:any={
    userName:'',
    password:'',
  }
     constructor(){

     }
     ngOnInit(): void{
      const localData = localStorage.getItem('signUpUsers');
      if(localData != null){
          this.signupObj = JSON.parse(localData);
      }
     }   
     onSignUp(){
        this.signupUsers.push(this.signupObj);
        localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
        this.signupObj = {
          userName:'',
          email:'',
          password:'',
        }
     }
     onLogin(){
        const isUserExit = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)
        if(isUserExit != undefined){
          alert("Login Successfully")
        }else{
          alert("Wrong Credentials");
        }
     }
}
