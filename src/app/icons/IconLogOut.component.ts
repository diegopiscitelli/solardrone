import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-logOut',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="fill-slate-400 dark:fill-slate-200"
    >
      <path
        fill-rule="evenodd"
        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
        clip-rule="evenodd"
      />
    </svg>
  `,
  styles: [
    `
      svg {
        width: 24px;
        height: 24px;
      }
    `,
  ],
})
export class IconLogOutComponent {}