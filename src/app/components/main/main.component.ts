import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IncidentsService } from '../../services/incidents.service';
import { Incidents, User } from '../../types/interfaces';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class MainComponent {
  private _incidentsService = inject(IncidentsService);
  private _userService = inject(UserService);
  constructor(private userService: UserService, private router: Router) {}

  incidents$ = this._incidentsService.getIncidents();
  currentUser$ = this._userService.currentUser;
  users$ = this._userService.getUsers();

  OnInit(): void {
    // this.users$ = this._userService.getUsers();
  }

  handleLogOutClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }

  async onClick1() {
    try {
      //await this.incidentsService.getIncidents();
      // this.incidents$ = this.incidentsService.getIncidents();
    } catch (error) {}
  }
}
