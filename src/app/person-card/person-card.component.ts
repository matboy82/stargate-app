import { Component, input } from '@angular/core';
import { Person } from '../interfaces/person';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss'
})
export class PersonCardComponent {

  person = input<Person>();
}
