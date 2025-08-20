import { Component } from '@angular/core';
import { SerciveComponts } from "./Components/sercive-componts/sercive-componts";
import { SkillsComponts } from "./Components/skills-componts/skills-componts";

@Component({
  selector: 'app-about',
  imports: [SerciveComponts, SkillsComponts],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
