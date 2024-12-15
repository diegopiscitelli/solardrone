import { Component } from '@angular/core';

@Component({
  selector: 'icon-priority-high',
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
        d="M12 3L18.2791 6.33719L24 10L18.2791 9.32281L12 6.22L5.72089 9.32281L0 10L5.72089 6.33719L12 3Z"
        fill="#F6C09E"
      />
      <path
        d="M12 9L18.2791 11.8604L24 15L18.2791 14.4196L12 11.76L5.72089 14.4196L0 15L5.72089 11.8604L12 9Z"
        fill="#F6C09E"
      />
      <path
        d="M12 14L18.2791 17.3372L24 21L18.2791 20.3228L12 17.22L5.72089 20.3228L0 21L5.72089 17.3372L12 14Z"
        fill="#F6C09E"
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
export class IconPriorityHighComponent {}
