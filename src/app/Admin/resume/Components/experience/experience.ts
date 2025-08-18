import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
   experiences = [
    {
      title: 'Altromeda, Front End Developer (Remote)',
      date: 'June 2025 – Present',
      description: 'Working on Angular projects focused on performance and scalability. Implementing clean UI, managing state, and collaborating with cross-functional teams to deliver high-quality features.'
    },
    {
      title: 'A Plus, Front End Developer (Remote)',
      date: 'April 2025 – Present',
      description: 'Building and maintaining Angular-based web applications. Responsible for creating dynamic UI components, handling API integrations, and ensuring responsive design across devices.'
    },
    {
      title: 'Sintac Code, Front End Developer',
      date: 'June 2023 – April 2024',
      description: 'Worked on real projects using React to build interactive web interfaces. Gained hands-on experience in UI design and improved user experience by developing and updating components.'
    },
    {
      title: 'Error Company, Front End Developer (Intern)',
      date: 'February 2023 – July 2023',
      description: 'Built and styled web pages using HTML, CSS, and JavaScript. Helped improve user interfaces and fix layout issues.'
    }
  ];
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


    formService: FormGroup;
  isOpen = false;

  constructor(private fb: FormBuilder, private _serviceAPI: ServiceAPI) {
    this.formService = this.fb.group({
      title: [''],
      position: [''],
      company: [''],
      description: [''],
      from: [''],
      to: ['']
    });
  }

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  save() {
    if (this.formService.valid) {
      const payload = {
        ...this.formService.value,
        from: new Date(this.formService.value.from).toISOString(),
        to: new Date(this.formService.value.to).toISOString()
      };

      this._serviceAPI.createService(payload).subscribe({
        next: (res) => {
          console.log('✅ Created successfully:', res);
          this.closePopup();
          this.formService.reset();
        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
  }
}
