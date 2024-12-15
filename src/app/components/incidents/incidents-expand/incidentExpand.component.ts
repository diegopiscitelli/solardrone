import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Incidents } from '../../../types/interfaces';
import { IconPriorityLowComponent } from '../../../icons/IconPriorityLow.component';
import { IconPriorityMediumComponent } from '../../../icons/IconPriorityMedium.component';
import { IconPriorityHighComponent } from '../../../icons/IconPriorityHigh.component';
import { IconPriorityCriticalComponent } from '../../../icons/IconPriorityCritical.component';
import { IconStateClosedComponent } from '../../../icons/IconStateClosed.comoponent';
import { IconStateOpenComponent } from '../../../icons/IconStateOpen.comoponent';
import { IconStateSolvedComponent } from '../../../icons/IconStateSolved.comoponent';
import { IconStateProgressComponent } from '../../../icons/IconStateProgress.comoponent';
import { User } from '../../../types/interfaces';

@Component({
  selector: 'incident-expand',
  template: `
    <div
      class="flex flex-col  fixed w-full h-screen top-0 left-0 justify-center items-center px-10 backdrop-blur-[2px]"
    >
      <div
        class="flex flex-col gap-5 relative w-3/4 h-auto rounded-lg border-blue-500 border-solid border-2 content-center shadow-lg bg-white px-10 py-5 dark:bg-gray-900"
      >
        <div class="flex justify-between">
          <h1 class="self-start text-xl font-semibold border-r">
            {{ data.summary }}
          </h1>
          <span class="flex gap-5">
            <span class="flex flex-col capitalize  justify-center items-center">
              @switch (data.state) { @case ("closed") {<icon-state-closed />}
              @case ("solved") { <icon-state-solved /> } @case ("progress")
              {<icon-state-progress /> } @default {<icon-state-open /> } }
              {{ data.state }}
            </span>
            <span class="flex flex-col items-center capitalize">
              @switch (data.priority) { @case ("critical")
              {<icon-priority-critical />} @case ("high") {
              <icon-priority-high /> } @case ("medium") {<icon-priority-medium />
              } @default {<icon-priority-low /> } }
              {{ data.priority }}
            </span>
          </span>
        </div>
        <div class="text-xs text-ellipsis">
          @for (asignee of (data.assignedTo); track asignee.id) {
          <span
            class="mr-1 italic p-2 rounded-lg bg-slate-100 dark:bg-indigo-500"
            >{{ asignee.name }},
          </span>
          }
        </div>

        <div class="mt-5">
          <h2 class="font-semibold text-lg">Description:</h2>
          {{ data.description }}
        </div>
        <button
          (click)="this.expandClosed.emit()"
          class="relative text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/6 px-5 py-2.5 text-center"
        >
          Close
        </button>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
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
export class IncidentExpand {
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
  @Output() expandClosed = new EventEmitter<void>();
}
