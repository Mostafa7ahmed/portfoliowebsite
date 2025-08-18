import { ServiceAPI } from './../../core/service/service-api';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ICreateService } from '../../core/interface/icreate-service';
import { SerciveComponts } from "./Components/sercive-componts/sercive-componts";
import { SkillsComponts } from "./Components/skills-componts/skills-componts";
@Component({
  selector: 'app-about',
  imports: [CommonModule, ReactiveFormsModule, SerciveComponts, SkillsComponts],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
