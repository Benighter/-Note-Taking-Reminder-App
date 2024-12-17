import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  openNav() {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    if (sidenav) {
      sidenav.style.width = "250px";
    }
    if (main) {
      main.style.marginLeft = "250px";
    }
  }

  closeNav() {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    if (sidenav) {
      sidenav.style.width = "0";
    }
    if (main) {
      main.style.marginLeft = "0";
    }
  }
}
