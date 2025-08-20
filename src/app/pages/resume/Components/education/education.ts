import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
import { EducationAPI } from '../../../../core/service/education-api';
import { IEducation } from '../../../../core/interface/ieducation';
@Component({
  selector: 'app-education',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  isOpen = false;
  educations = signal<IEducation[]>([]);
  constructor( private _educationAPI: EducationAPI) {

  }


    ngOnInit() {
    this.loadEducations();
  }

  loadEducations() {
    this._educationAPI.getAllEducations().subscribe({
      next: (res) => {
        this.educations.set(res.result ); 
      },
      error: (err) => {
        console.error('❌ Error loading educations:', err);
      }
    });
  }  
}
