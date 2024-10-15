import { Component, input } from '@angular/core';
import { AstronautDuty } from '../interfaces/astronaut-duty';
import { AstronautDutyCardComponent } from '../astronaut-duty-card/astronaut-duty-card.component';

@Component({
  selector: 'app-astronaut-duty-list',
  standalone: true,
  imports: [AstronautDutyCardComponent],
  templateUrl: './astronaut-duty-list.component.html',
  styleUrl: './astronaut-duty-list.component.scss'
})
export class AstronautDutyListComponent {

  astronautDuties = input<Array<AstronautDuty>>();
}
