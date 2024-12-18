import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavOpen: boolean = false;

  openNav(): void {
    const sidenav: HTMLElement | null = document.getElementById("mySidenav");
    const main: HTMLElement | null = document.getElementById("main");

    if (sidenav) {
      sidenav.style.width = "250px";
    }
    if (main) {
      main.style.marginLeft = "250px";
    }
    this.isNavOpen = true;
  }

  closeNav(): void {
    const sidenav: HTMLElement | null = document.getElementById("mySidenav");
    const main: HTMLElement | null = document.getElementById("main");

    if (sidenav) {
      sidenav.style.width = "0";
    }
    if (main) {
      main.style.marginLeft = "0";
    }
    this.isNavOpen = false;
  }
}
