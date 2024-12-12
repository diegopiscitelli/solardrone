import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
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
