import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceAPI } from '../../core/service/service-api';
import { PorjectAPI } from '../../core/service/porject-api';
import { Iporject } from '../../core/interface/iporject';
import { Stream } from '../../core/service/stream';
import { environment } from '../../env/environment';

interface Project {
  title: string;
  category: string;
  link: string;
  image: string;
  types: string[];
}
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  selectedCategory = 'All';

  projects: Iporject[] = [];
  baseurlFile =  environment.baseUrlFiles

  formProject: FormGroup;
  isOpen = false;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  previewUrl: string | null = null;

  constructor(private fb: FormBuilder, private _projectAPI: PorjectAPI, private uploadService: Stream) {
    this.formProject = this.fb.group({
      name: [''],
      url: [''],
      description: [''],
      sendToAccess: [''],
      tags: this.fb.array([])
    });

    this.loadProjects();
  }

  // getter for tags
  get tags(): FormArray {
    return this.formProject.get('tags') as FormArray;
  }

  addTag() {
    this.tags.push(this.fb.control(''));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      console.log(file)
      this.uploadService.uploadImage(file).subscribe((res: any) => {
        if (res.success) {
          this.formProject.patchValue({
            imageUrl: res.result.url
          });
          this.previewUrl = res.result.url;
        }
      });
    }


  }

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  save() {
    if (this.formProject.valid) {
      const payload: Iporject = this.formProject.value;

      this._projectAPI.createPorject(payload).subscribe({
        next: (res) => {
          console.log('✅ Created successfully:', res);
          this.closePopup();
          this.formProject.reset();
          this.loadProjects(); // refresh list
        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
  }

  loadProjects() {
    this._projectAPI.getAllPorjects().subscribe({
      next: (res) => {
        this.projects = res.result;
      },
      error: (err) => {
        console.error('❌ Error fetching projects:', err);
      }
    });
  }
}
