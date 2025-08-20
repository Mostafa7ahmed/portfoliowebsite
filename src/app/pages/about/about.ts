import { Component } from '@angular/core';
import { SerciveComponts } from "./Components/sercive-componts/sercive-componts";
import { Technicalandskills } from "./Components/technicalandskills/technicalandskills";

@Component({
  selector: 'app-about',
  imports: [SerciveComponts, Technicalandskills],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
