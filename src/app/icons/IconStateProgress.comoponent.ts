import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-state-progress',
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
      <circle cx="12" cy="12" r="10.5" stroke="#F0EFB7" stroke-width="3" />
      <path
        d="M11.5 21.5V0.5C16 0.5 20.5 4.5 21.5 9.5C22.8 16 19.8333 19.8333 18 21.5H11.5Z"
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
export class IconStateProgressComponent {}
