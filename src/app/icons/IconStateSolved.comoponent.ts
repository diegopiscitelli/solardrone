import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-state-solved',
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
      <circle cx="12" cy="12" r="12" fill="#B9F2C2" />
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
export class IconStateSolvedComponent {}
