import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
@Component({
  selector: 'app-education',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
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
