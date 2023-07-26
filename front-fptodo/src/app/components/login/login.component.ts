import { Component } from '@angular/core';
import { TodoapiService } from 'src/app/services/todoapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private todoApiService: TodoapiService) {}

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // login using login method in service and store the result as a Bearer JWT token
    this.todoApiService
      .login(this.username, this.password)
      .subscribe((result: any) => {
        console.log(result);
        localStorage.setItem('token', result);
      });
  }
}
