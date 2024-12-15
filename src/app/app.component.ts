import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './services/darkMode.service';
import { NavComponent } from './layout/Nav.component';
// import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  titleIsTrue = false;
  title = 'solardrone';
  public _darkModeService = inject(DarkModeService);

  @HostBinding('class.dark') get mode() {
    return this._darkModeService.darkModeSignal();
  }
}
