import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IncidentsService } from '../../services/incidents.service';
import { DarkModeService } from '../../services/darkMode.service';
import { AsyncPipe } from '@angular/common';
import { IncidentSmall } from './incidentSmall/incidentSmall.component';
import { IncidentsCreatorComponent } from './incident-creator/incidentCreator.component';
import { IconCreateComponent } from '../../icons/IconCreate.component copy';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    IncidentSmall,
    IncidentsCreatorComponent,
    IconCreateComponent,
  ],
})
export class IncidentsComponent {
  private _incidentsService = inject(IncidentsService);
  private _userService = inject(UserService);
  public _darkModeService = inject(DarkModeService);
  constructor(private userService: UserService, private router: Router) {}

  incidents$ = this._incidentsService.getIncidents();
  currentUser$ = this._userService.currentUser;
  users$ = this._userService.getUsers();

  creatorIsOpen = false;

  toogleCreatorModal() {
    this.creatorIsOpen = !this.creatorIsOpen;
  }
  dataFiltered$ = this._incidentsService.getIncidentByStatus('open');
}
