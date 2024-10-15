import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7204/person';

  constructor() { }

  getByName(name: string): Observable<Person> {
    return this.httpClient.get<Person>(`${this.baseUrl}/${name}`);
  }

  addPerson(person: Person) {
    return this.httpClient.post<Person>(this.baseUrl, person);
  }

  getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseUrl);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.httpClient.put<Person>(this.baseUrl, person);
  }
}
