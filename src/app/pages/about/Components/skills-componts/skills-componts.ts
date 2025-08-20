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
  isOpen = false;


  constructor(private fb: FormBuilder, private _skillServive: SkillAPI) {

  }


}
