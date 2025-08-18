import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
@Component({
  selector: 'app-sercive-componts',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sercive-componts.html',
  styleUrl: './sercive-componts.scss'
})
export class SerciveComponts {
  formService: FormGroup;
  isOpen = false;
    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder ,private  _serviceAPI:ServiceAPI) {
    this.formService = this.fb.group({
      title: [''],
      icon: ['fa-solid fa-book'],
      description: ['']
    });
  }

  openPopup() {
    this.isOpen = true;
  }
previewUrl: string | null = null;

triggerFileInput() {
  this.fileInput.nativeElement.click();
}

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

  closePopup() {
    this.isOpen = false;
  }

  save() {
    if (this.formService.valid) {

      this._serviceAPI.createService(this.formService.value).subscribe({
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
