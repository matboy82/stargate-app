import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AstronautDuty } from '../interfaces/astronaut-duty';

@Injectable({
  providedIn: 'root'
})
export class AstronautDutyService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7204/astronautduty';

  constructor() { }

  getByName(name: string): Observable<Array<AstronautDuty>> {
    return this.httpClient.get<Array<AstronautDuty>>(`${this.baseUrl}/${name}`);
  }

  addDuty(duty: AstronautDuty) {
    return this.httpClient.post<AstronautDuty>(this.baseUrl, duty);
  }
}
