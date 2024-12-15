import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IncidentsService } from '../../services/incidents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
})
export class DashboardComponent {
  private _incidentsService = inject(IncidentsService);
  private _userService = inject(UserService);
  constructor(private userService: UserService, private router: Router) {}

  incidents$ = this._incidentsService.getIncidents();
  currentUser$ = this._userService.currentUser;
  users$ = this._userService.getUsers();
}
