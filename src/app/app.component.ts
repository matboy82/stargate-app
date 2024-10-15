import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person';
import { PersonService } from './services/person.service';
import { PeopleListComponent } from './people-list/people-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeopleListComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  peopleList: Array<Person> = [];
  personService = inject(PersonService);

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(people => {
      
      console.log(people);
      this.peopleList = people;
    });
    
  }
}
