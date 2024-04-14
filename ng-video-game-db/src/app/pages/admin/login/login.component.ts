import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardHeader,
    MatFormField,
    MatCardContent,
    MatCardTitle,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router) {

  }
  
  onLogin() {
    if(this.loginObj.userName == "admin" && this.loginObj.password == "1") {
      this.router.navigateByUrl('/products');
    }else {
      alert('Wrong Credentials');
    }
  }
}
