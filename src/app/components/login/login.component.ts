import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  template: `
    <h2>User Login</h2>
    <form [formGroup]="formLogin" (ngSubmit)="onSubmit()">
      <div>
        <label>Email</label>
        <input type="text" class="form-control" formControlName="email" />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          formControlName="password"
        />
      </div>
      <input type="submit" value="Enviar" />
    </form>
    <button class="btn btn-info" (click)="onClick()">Login With Google</button>
    <h3>or</h3>
    <a
      routerLink="/register"
      routerLinkActive="active"
      ariaCurrentWhenActive="page"
      >Register</a
    >
  `,
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .login(this.formLogin.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch((error) => console.log(error));
  }

  onClick() {
    this.userService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch((error) => console.log(error));
  }
}
