import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { NavbarAdmin } from "../navbar-admin/navbar-admin";

@Component({
  selector: 'app-admin-layout',
  imports: [ RouterOutlet, NavbarAdmin],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayout {

}
