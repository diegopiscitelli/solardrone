import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-state-closed',
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
      <circle cx="12" cy="12" r="10.5" stroke="#D9D9D9" stroke-width="3" />
      <line
        x1="5.21602"
        y1="3.12176"
        x2="18.216"
        y2="21.1218"
        stroke="#D9D9D9"
        stroke-width="3"
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
export class IconStateClosedComponent {}
