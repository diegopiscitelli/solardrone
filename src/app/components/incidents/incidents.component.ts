import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IncidentsService } from '../../services/incidents.service';
import { DarkModeService } from '../../services/darkMode.service';
import { Incidents, User } from '../../types/interfaces';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IncidentSmall } from './incidentSmall/incidentSmall.component';
import { IncidentsCreatorComponent } from './incident-creator/incidentCreator.component';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  standalone: true,
  imports: [AsyncPipe, IncidentSmall, IncidentsCreatorComponent],
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

  OnInit() {
    console.log(this.users$);
  }

  toogleCreatorModal() {
    this.creatorIsOpen = !this.creatorIsOpen;
  }

  // Row Data: The data to be displayed.
  rowData = this.incidents$;

  dataFiltered$ = this._incidentsService.getIncidentByStatus('open');
  // rowData1 = this.dataFiltered$;

  // Column Definitions: Defines the columns to be displayed.
  colDefs = [
    { field: 'assignedTo' },
    { field: 'creatorId' },
    { field: 'name' },
    { field: 'priority' },
    { field: 'state' },
  ];
}
