import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() pageChange = new EventEmitter<string>();
  activePage = 'about';

  setPage(page: string) {
    this.activePage = page;
    this.pageChange.emit(page);
  }
}
