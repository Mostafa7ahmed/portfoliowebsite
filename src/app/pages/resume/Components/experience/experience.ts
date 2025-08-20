import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
import { IExperience } from '../../../../core/interface/iexperience';
import { ExperienceAPI } from '../../../../core/service/experience-api';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences = signal<IExperience[]>([]);



  constructor( private _experienceAPI: ExperienceAPI) {

  }


  getAllExperiences() {
    this._experienceAPI.getAllExperiences().subscribe({
      next: (res) => {
        this.experiences.set(res.result); 
      },
      error: (err) => {
        console.error('❌ Error fetching experiences:', err);
      }
    });
  }


    ngOnInit() {
    this.getAllExperiences();
  }
}
