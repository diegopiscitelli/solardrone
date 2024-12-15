import { Component } from '@angular/core';

@Component({
  selector: 'icon-priority-critical',
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
        d="M12 0L18.2791 3.33719L24 7L18.2791 6.32281L12 3.22L5.72089 6.32281L0 7L5.72089 3.33719L12 0Z"
        fill="#F19595"
      />
      <path
        d="M12 6L18.2791 8.86045L24 12L18.2791 11.4196L12 8.76L5.72089 11.4196L0 12L5.72089 8.86045L12 6Z"
        fill="#F19595"
      />
      <path
        d="M12 11L18.2791 14.3372L24 18L18.2791 17.3228L12 14.22L5.72089 17.3228L0 18L5.72089 14.3372L12 11Z"
        fill="#F19595"
      />
      <path
        d="M12 17L18.2791 20.3372L24 24L18.2791 23.3228L12 20.22L5.72089 23.3228L0 24L5.72089 20.3372L12 17Z"
        fill="#F19595"
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
export class IconPriorityCriticalComponent {}
