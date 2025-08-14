import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {
  skills = [
    { name: 'HTML & HTML5', value: 90 },
    { name: 'CSS & CSS3', value: 90 },
    { name: 'JavaScript (ES6, OOP)', value: 90 },
    { name: 'TypeScript', value: 75 },
    { name: 'Angular (16 to 18)', value: 85 },
    { name: 'React JS', value: 90 },
    { name: 'Bootstrap 4/5', value: 90 },
    { name: 'Tailwind CSS', value: 85 },
    { name: 'Redux & Redux Toolkit', value: 80 },
    { name: 'NGRX & SignalR', value: 70 },
    { name: 'Git & GitHub', value: 85 },
    { name: 'Figma (UI/UX)', value: 75 },
    { name: 'Node.js & Express.js', value: 70 },
    { name: 'MongoDB & SQL', value: 65 }
  ];
}
