import { Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeSignal = signal<boolean>(false);
  toogleDarkMode() {
    this.darkModeSignal.set(!this.darkModeSignal());
    console.log(this.darkModeSignal);
  }
  constructor() {}
}
