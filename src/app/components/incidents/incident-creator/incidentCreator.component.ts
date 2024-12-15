import { Component, inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { IncidentsService } from '../../../services/incidents.service';
import { DarkModeService } from '../../../services/darkMode.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'incident-creator',
  templateUrl: './incidentCreator.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, MultiSelectModule],
})
export class IncidentsCreatorComponent {
  private _incidentsService = inject(IncidentsService);
  private _userService = inject(UserService);
  public _darkModeService = inject(DarkModeService);

  formNewIncident: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formNewIncident = new FormGroup({
      summary: new FormControl(),
      description: new FormControl(),
      assignedTo: new FormControl(),
      priority: new FormControl(),
    });
  }

  defaultIncidentValues = {
    assignedTo: [{ id: '', name: '', role: 'user' }],
    description: '',
    priority: 'low',
    createdAt: '',
    creatorId: '',
    name: '',
    state: 'open',
  };

  handleFormSubmit() {
    let newIncident = {
      ...this.defaultIncidentValues,
      ...this.formNewIncident.value,
      createdAt: new Date(),
      creatorId: this._userService.currentUser,
    };
    this._incidentsService.createIncident(newIncident);
  }

  users: any;
  async readUsers() {
    this.users = await this._userService.getUsers();
  }

  ngOnInit() {
    this.readUsers();
  }

  @Output() creatorClosed = new EventEmitter<void>();
}
