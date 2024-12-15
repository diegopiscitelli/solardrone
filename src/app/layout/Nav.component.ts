import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../services/darkMode.service';
import { UserService } from '../services/user.service';
import { IconThemeComponent } from '../icons/IconTheme.component';
import { IconLogOutComponent } from '../icons/IconLogOut.component';
import { initFlowbite } from 'flowbite';
import { LogoComponent } from '../icons/Logo.component';

@Component({
  selector: 'nav-component',
  imports: [
    RouterLink,
    RouterLinkActive,
    IconThemeComponent,
    IconLogOutComponent,
    LogoComponent,
  ],
  template: `
    <nav
      class="w-full h-16 px-10 flex items-center justify-between border-b border-blue-100 dark:border-indigo-500/10"
    >
      <span>
        <app-logo [size]="130" />
      </span>
      @if (isAuthenticated) {
      <span class="flex h-16 gap-10">
        <a
          class="flex items-center align-middle border-b-2 pt-5 border-transparent transition-all"
          routerLink="/incidents"
          routerLinkActive="active"
          >Incidents</a
        >
        <a
          class="flex items-center align-middle border-b-2 pt-5 border-transparent transition-all"
          routerLink="/dashboard"
          routerLinkActive="active"
          >Dashboard</a
        >
      </span>
      }
      <span>
        <!-- Hidden if no Autheticated user (Need to preserve element in the DOM)-->
        <button
          [hidden]="!isAuthenticated"
          (click)="handleLogOutClick()"
          data-tooltip-target="tooltip-logOut"
          data-tooltip-trigger="hover"
          type="button"
        >
          <icon-logOut></icon-logOut>
        </button>
        <div
          id="tooltip-logOut"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-2 py-1 text-sm font-medium bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-transparent rounded-md shadow-sm opacity-0 tooltip"
        >
          Log Out
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <!-- EMD - Hidden -->
        <button
          (click)="handleToogleDarkMode()"
          data-tooltip-target="tooltip-theme"
          data-tooltip-trigger="hover"
          class="ml-5"
        >
          <icon-theme [darkMode]="isDarkModeOn()"></icon-theme>
        </button>
        <div
          id="tooltip-theme"
          role="tooltip"
          class="top-48 fixed z-10 invisible inline-block px-2 py-1 text-sm font-medium bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-transparent rounded-md shadow-sm opacity-0 tooltip"
        >
          Theme
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </span>
    </nav>
  `,
  standalone: true,
})
export class NavComponent {
  public _darkModeService = inject(DarkModeService);
  public _userService = inject(UserService);
  constructor(private router: Router) {}

  isAuthenticated = {};
  isDarkModeOn = this._darkModeService.darkModeSignal;

  ngOnInit() {
    this._userService.currentAuthStatus.subscribe(
      (authStatus) => (this.isAuthenticated = authStatus)
    );
    initFlowbite();
  }

  handleToogleDarkMode() {
    this._darkModeService.toogleDarkMode();
  }

  handleLogOutClick() {
    this._userService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
