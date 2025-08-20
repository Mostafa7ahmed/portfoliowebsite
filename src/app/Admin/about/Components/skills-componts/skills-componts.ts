import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
import { SkillAPI } from '../../../../core/service/skill-api';
import { ICreateSkills } from '../../../../core/interface/icreate-skills';
import { environment } from '../../../../env/environment';
import { Stream } from '../../../../core/service/stream';
@Component({
  selector: 'app-skills-componts',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skills-componts.html',
  styleUrl: './skills-componts.scss'
})
export class SkillsComponts {
  formService: FormGroup;
  isOpen = false;
  previewUrl = signal<string | null>(null);
  selectedFile: File | null = null;
  skills = signal<ICreateSkills[]>([]);
  baseurlFile = environment.baseUrlFiles;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private _skillServive: SkillAPI , private uploadService: Stream
  ) {
    this.formService = this.fb.group({
      name: [''],
      photoUrl: ['8/photo/.svg/49136a62-0847-4681-885b-93d47d59bad3.svg'],
      tech: [false]
    });
    effect(()=>{
      this.loadSkills()
    })
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
   const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      this.uploadService.uploadImage(file).subscribe((res: any) => {
        if (res.success) {
          this.formService.patchValue({ photoUrl: res.result.url });
          this.previewUrl.set(res.result.url); 
        }
      });
    }
  }

  save() {
    if (this.formService.valid) {
      const payload = this.formService.value;

      this._skillServive.createSkills(payload).subscribe({
        next: (res) => {
          console.log('✅ Created successfully:', res);
          this.closePopup();
          this.skills.update((list) => [...list, res.result]);
          this.formService.reset({
            name: '',
            photoUrl: '',
            tech: false
          });
          
          this.previewUrl.set( null );
          this.selectedFile = null;
        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
  }


  loadSkills() {
    this._skillServive.getAllSkills().subscribe({
      next: (res) => {
        this.skills.set(res.result);
      },
      error: (err) => {
        console.error('❌ Error fetching Skills:', err);
      }
    });
  }
  get techSkills() {
    return this.skills().filter(s => s.tech === true);
  }

  get normalSkills() {
    return this.skills().filter(s => s.tech === false);
  }
  deleteSkill(id: number) {
    this._skillServive.deleteSkill(id).subscribe({
      next: () => {
        console.log('🗑️ Deleted successfully');
        this.skills.update((list) => list.filter((p) => p.id !== id));
      },
      error: (err) => {
        console.error('❌ Error deleting Skill:', err);
      }
    });
  }
}
