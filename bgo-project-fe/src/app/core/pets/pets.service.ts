import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../../shared/interfaces/pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  public getAllPets(): Observable<any> {
    return this.httpClient.get('/db/pets.json');
  }
}
