import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
import { SkillAPI } from '../../../../core/service/skill-api';
@Component({
  selector: 'app-skills-componts',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skills-componts.html',
  styleUrl: './skills-componts.scss'
})
export class SkillsComponts {
  formService: FormGroup;
  isOpen = false;
  previewUrl: string | null = null;
  selectedFile: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private _skillServive: SkillAPI) {
    this.formService = this.fb.group({
      name: [''],
      photoUrl: [''],   
      tech: [false]     
    });
  }

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
        this.formService.patchValue({ photoUrl: this.previewUrl }); 
      };
      reader.readAsDataURL(file);
    }
  }

  save() {
    if (this.formService.valid) {
      const payload = this.formService.value;

      this._skillServive.createSkills(payload).subscribe({
        next: (res) => {
          console.log('✅ Created successfully:', res);
          this.closePopup();
          this.formService.reset({ tech: false });
          this.previewUrl = null;
          this.selectedFile = null;
        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
  }
}
