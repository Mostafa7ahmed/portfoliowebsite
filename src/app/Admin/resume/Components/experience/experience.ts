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


    formService: FormGroup;
  isOpen = false;

  constructor(private fb: FormBuilder, private _experienceAPI: ExperienceAPI) {
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

      this._experienceAPI.createExperience(payload).subscribe({
        next: (res) => {
          console.log('✅ Created successfully:', res);
          this.experiences.update(list => [...list, res.result]); 

          this.closePopup();
          this.formService.reset();
        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
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

    deleteExperience(id: number) {
    this._experienceAPI.deleteExperience(id).subscribe({
      next: () => {
        this.experiences.update(list => list.filter(item => item.id !== id));
      },
      error: (err) => {
        console.error('❌ Error deleting experience:', err);
      }
    });
  }

    ngOnInit() {
    this.getAllExperiences();
  }
}
