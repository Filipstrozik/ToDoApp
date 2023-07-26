import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TodoapiService } from './services/todoapi.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-fptodo';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  authors: string[] = [];
  isLoggedIn = false;

  constructor(private todoApiService: TodoapiService, private router: Router) {
    this.todoApiService.getAuthors().subscribe((authors) => {
      this.authors = authors;
    });
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      // redirect to /login
      this.router.navigate(['/login']);
    }
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  logout(): void {
    if (localStorage.getItem('token') !== null) {
      this.isLoggedIn = false;
      localStorage.removeItem('token');
    }
  }
}
