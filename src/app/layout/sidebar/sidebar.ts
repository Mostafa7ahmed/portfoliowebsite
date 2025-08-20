import { CommonModule } from '@angular/common';
import { IPorfile } from '../../core/interface/iporfile';
import { SidebarPorfile } from './../../core/service/sidebar';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  

  private data = inject(SidebarPorfile);
  isSidebarActive = false;

  profile = signal<IPorfile | null>(null);

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  ngOnInit() {
    this.data.getporfile().subscribe({
      next: (res) => {
        this.profile.set(res.result);  // تخزن الداتا في signal
      },
      error: (err) => {
        console.error('Error fetching profile', err);
      }
    });
  }

}
