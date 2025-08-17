import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./layout/sidebar/sidebar";
import { Navbar } from "./layout/navbar/navbar";
import { About } from "./pages/about/about";
import { Resume } from "./pages/resume/resume";
import { Portfolio } from "./pages/portfolio/portfolio";
import { Certificates } from "./pages/certificates/certificates";
import { Contact } from "./pages/contact/contact";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfoliowebsite');

    currentPage = 'about';

}
