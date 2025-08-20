import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
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
  projects = signal<Iporject[]>([]);
  isOpen = false;
  previewUrl = signal<string | null>(null);

  baseurlFile = environment.baseUrlFiles;

  formProject: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private _projectAPI: PorjectAPI,
    private uploadService: Stream
  ) {
    this.formProject = this.fb.group({
      name: [''],
      url: [''],
      description: [''],
      photoUrl:[""],
      sendToAccess: [''],
      tags: this.fb.array([])
    });

    effect(() => {
      this.loadProjects();
    });
  }

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
      this.uploadService.uploadImage(file).subscribe((res: any) => {
        if (res.success) {
          this.formProject.patchValue({ photoUrl: res.result.url });
          this.previewUrl.set(res.result.url); 
        }
      });
    }
  }

  openPopup() {
    this.isOpen=  true;
  }

  closePopup() {
    this.isOpen =false;
  }

save() {
  if (this.formProject.valid) {
    const payload: Iporject = this.formProject.value;

    this._projectAPI.createPorject(payload).subscribe({
      next: (res) => {
        console.log('✅ Created successfully:', res);

        this.projects.update((list) => [...list, res.result]);

        this.closePopup();

        this.formProject = this.fb.group({
          name: [''],
          url: [''],
          description: [''],
          photoUrl: [''],
          sendToAccess: [''],
          tags: this.fb.array([])
        });
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
        this.projects.set(res.result); 
      },
      error: (err) => {
        console.error('❌ Error fetching projects:', err);
      }
    });
  }

  deleteProject(id: number) {
    this._projectAPI.deletePorject(id).subscribe({
      next: () => {
        console.log('🗑️ Deleted successfully');
        this.projects.update((list) => list.filter((p) => p.id !== id));
      },
      error: (err) => {
        console.error('❌ Error deleting project:', err);
      }
    });
  }
}
