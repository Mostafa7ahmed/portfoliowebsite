import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
import { SkillAPI } from '../../../../core/service/skill-api';
import { ICreateSkills } from '../../../../core/interface/icreate-skills';
import { environment } from '../../../../env/environment';
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
  skills = signal<ICreateSkills[]>([]);
  baseurlFile = environment.baseUrlFiles;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private _skillServive: SkillAPI) {
    this.formService = this.fb.group({
      name: [''],
      photoUrl: [''],
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
          this.skills.update((list) => [...list, res.result]);
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
