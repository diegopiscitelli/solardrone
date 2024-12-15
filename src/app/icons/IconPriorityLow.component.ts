import { Component } from '@angular/core';

@Component({
  selector: 'icon-priority-low',
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
        d="M12 8L18.2791 11.3372L24 15L18.2791 14.3228L12 11.22L5.72089 14.3228L0 15L5.72089 11.3372L12 8Z"
        fill="#B9F2C2"
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
export class IconPriorityLowComponent {}
