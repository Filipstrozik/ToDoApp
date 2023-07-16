import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersManagementComponent },
  { path: 'todos', component: ToDoListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
