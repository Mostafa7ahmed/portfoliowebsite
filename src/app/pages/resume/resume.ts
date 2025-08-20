import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Education } from "./Components/education/education";
import { Experience } from "./Components/experience/experience";

@Component({
  selector: 'app-resume',
  imports: [CommonModule, Education, Experience],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {

}
