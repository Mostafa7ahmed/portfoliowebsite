import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { PorjectAPI } from '../../core/service/porject-api';
import { environment } from '../../env/environment';
import { Iporject } from '../../core/interface/iporject';

interface Project {
  title: string;
  category: string;
  link: string;
  image: string;
  types: string[];
}
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  baseurlFile = environment.baseUrlFiles;
  projects = signal<Iporject[]>([]);

  constructor(private _projectAPI: PorjectAPI) {
    effect(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this._projectAPI.getAllPorjects().subscribe({
      next: (res) => {
        this.projects.set(res.result);
      },
      error: (err) => {
        console.error('❌ Error fetching projects:', err);
      },
    });
  }
}
