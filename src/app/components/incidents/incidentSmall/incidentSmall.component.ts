import { Component, Input, Output } from '@angular/core';
import { Incidents } from '../../../types/interfaces';
import { IconPriorityLowComponent } from '../../../icons/IconPriorityLow.component';
import { IconPriorityMediumComponent } from '../../../icons/IconPriorityMedium.component';
import { IconPriorityHighComponent } from '../../../icons/IconPriorityHigh.component';
import { IconPriorityCriticalComponent } from '../../../icons/IconPriorityCritical.component';
import { IconStateClosedComponent } from '../../../icons/IconStateClosed.comoponent';
import { IconStateOpenComponent } from '../../../icons/IconStateOpen.comoponent';
import { IconStateSolvedComponent } from '../../../icons/IconStateSolved.comoponent';
import { IconStateProgressComponent } from '../../../icons/IconStateProgress.comoponent';
import { IncidentExpand } from '../incidents-expand/incidentExpand.component';

@Component({
  selector: 'incident-small',
  template: `
    <div
      (click)="toogleExpandModal()"
      class="grid md:grid-cols-[300px_300px_auto_100px] sm:grid-cols-[100px_100px_auto_auto] px-2 py-2 rounded-md border-b border-gray-100 dark:border-gray-900 text-sm cursor-pointer hover:scale-[98%] hover:border-l-4 hover:border-x-indigo-600 dark:hover:border-x-indigo-600 transition-all"
    >
      <span
        class="self-center font-semibold px-5 border-r overflow-hidden text-ellipsis text-nowrap"
        >{{ data.summary }}</span
      >
      <span
        class="self-center text-xs  px-5 border-r overflow-hidden text-ellipsis text-nowrap"
      >
        @for (asignee of (data.assignedTo); track asignee.id) {
        <span class="mr-1 italic">{{ asignee.name }}, </span>
        }
      </span>
      <span
        class="flex flex-col justify-self-center justify-center items-center"
      >
        @switch (data.state) { @case ("closed") {<icon-state-closed />} @case
        ("solved") { <icon-state-solved /> } @case ("progress")
        {<icon-state-progress /> } @default {<icon-state-open /> } }
        {{ data.state }}
      </span>
      <span
        class="flex flex-col w-10 text-[10px] items-center justify-self-center"
      >
        @switch (data.priority) { @case ("critical") {<icon-priority-critical />}
        @case ("high") { <icon-priority-high /> } @case ("medium")
        {<icon-priority-medium /> } @default {<icon-priority-low /> } }
        {{ data.priority }}
      </span>
    </div>
    @if(isExpandOpen) {
    <incident-expand [data]="data" (expandClosed)="toogleExpandModal()" />
    }
  `,
  standalone: true,
  imports: [
    IncidentExpand,
    IconPriorityLowComponent,
    IconPriorityMediumComponent,
    IconPriorityHighComponent,
    IconPriorityCriticalComponent,
    IconStateClosedComponent,
    IconStateOpenComponent,
    IconStateSolvedComponent,
    IconStateProgressComponent,
  ],
})
export class IncidentSmall {
  isExpandOpen = false;
  toogleExpandModal() {
    this.isExpandOpen = !this.isExpandOpen;
  }
  @Input() data: Incidents = {
    name: '',
    assignedTo: [{ id: '', name: '', role: '' }],
    creatorId: '',
    id: '',
    createdAt: '',
    priority: '',
    state: '',
    description: '',
    summary: '',
  };
}
