import { Component } from '@angular/core';

@Component({
  selector: 'icon-priority-medium',
  standalone: true,
  imports: [],
  template: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6L18.2791 8.86045L24 12L18.2791 11.4196L12 8.76L5.72089 11.4196L0 12L5.72089 8.86045L12 6Z"
        fill="#F0EFB7"
      />
      <path
        d="M12 11L18.2791 14.3372L24 18L18.2791 17.3228L12 14.22L5.72089 17.3228L0 18L5.72089 14.3372L12 11Z"
        fill="#F0EFB7"
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
export class IconPriorityMediumComponent {}
