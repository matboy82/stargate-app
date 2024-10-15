import { Component, inject, input } from '@angular/core';
import { Person } from '../interfaces/person';
import { PersonCardComponent } from '../person-card/person-card.component';
import { AstronautDutyService } from '../services/astronaut-duty.service';
import { AstronautDuty } from '../interfaces/astronaut-duty';
import { AstronautDutyListComponent } from '../astronaut-duty-list/astronaut-duty-list.component';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [PersonCardComponent, AstronautDutyListComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {

  people = input<Array<Person>>();
  dutyService = inject(AstronautDutyService);
  astroDuties: Array<AstronautDuty> = [];
  selectedPerson: Person | undefined;

  getPersonDuties(person: Person) {
    this.dutyService.getByName(person.name).subscribe(duties => {
      person.astronautDuties = duties;
      this.selectedPerson = person;
      this.astroDuties = duties;
    });
  }
}
