import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LogoComponent } from '../../icons/Logo.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, LogoComponent],
  templateUrl: './login.component.html',
  standalone: true,
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
        this.router.navigate(['/']);
      })
      .catch((error) => console.log(error));
  }

  onClick() {
    this.userService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch((error) => console.log(error));
  }
}
