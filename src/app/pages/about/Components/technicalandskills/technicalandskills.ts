import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillAPI } from '../../../../core/service/skill-api';
import { ICreateSkills } from '../../../../core/interface/icreate-skills';
import { environment } from '../../../../env/environment';
@Component({
  selector: 'app-technicalandskills',
  imports: [CommonModule],
  templateUrl: './technicalandskills.html',
  styleUrl: './technicalandskills.scss'
})
export class Technicalandskills {
  previewUrl: string | null = null;
  selectedFile: File | null = null;
  skills = signal<ICreateSkills[]>([]);
  baseurlFile = environment.baseUrlFiles;


  constructor( private _skillServive: SkillAPI) {

    effect(()=>{
      this.loadSkills()
    })
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

}
