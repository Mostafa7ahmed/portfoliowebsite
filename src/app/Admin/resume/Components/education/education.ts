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
  formEducation: FormGroup;
  isOpen = false;
  educations = signal<IEducation[]>([]);
  constructor(private fb: FormBuilder, private _educationAPI: EducationAPI) {
    this.formEducation = this.fb.group({
      name: [''],
      degree: [''],
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
    if (this.formEducation.valid) {
      const payload = {
        ...this.formEducation.value,
        from: new Date(this.formEducation.value.from).toISOString(),
        to: new Date(this.formEducation.value.to).toISOString()
      };

      this._educationAPI.createEducation(payload).subscribe({
        next: (res) => {
          console.log('✅ Created successfully:', res);
          this.closePopup();
          this.formEducation.reset();
        this.educations.update(list => [...list, res.result]);

        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
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
  }  deleteEducation(id: number) {
    this._educationAPI.deleteEducation(id).subscribe({
      next: () => {
        this.educations.update(list => list.filter(e => e.id !== id));
        console.log('🗑️ Deleted successfully');
      },
      error: (err) => {
        console.error('❌ Error deleting:', err);
      }
    });
  }
}
