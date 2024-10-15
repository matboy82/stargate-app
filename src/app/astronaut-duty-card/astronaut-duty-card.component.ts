import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AstronautDuty } from '../interfaces/astronaut-duty';
@Component({
  selector: 'app-astronaut-duty-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './astronaut-duty-card.component.html',
  styleUrl: './astronaut-duty-card.component.scss'
})
export class AstronautDutyCardComponent {

  astroDuty = input<AstronautDuty>();
  
}
