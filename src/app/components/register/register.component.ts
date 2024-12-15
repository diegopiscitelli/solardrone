import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LogoComponent } from '../../icons/Logo.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, LogoComponent],
  templateUrl: './register.component.html',
  standalone: true,
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formReg = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .register(this.formReg.value)
      .then((response) => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
