import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../core/pets/pets.service';
import { Pet } from '../../shared/interfaces/pet.interface';

@Component({
  selector: 'bgo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pets: Pet[];
  public breakpoint: number;
  public rowHeight: string;

  constructor(private petsService: PetsService) { }

  public ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    this.rowHeight = (window.innerWidth <= 400) ? '1:2' : '1:1';

    this.getAllPets();
  }

  public getAllPets(): void {
    this.petsService.getAllPets()
      .subscribe(
        data => {
          this.pets = data.pets;
          this.pets.map(pet => pet.showPet = true);
        },
        err => console.log(err)
      );
  }

  public onResize(event): void {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
    this.rowHeight = (window.innerWidth <= 400) ? '1:2' : '1:1';
  }

  public hidePet(pet: Pet): void {
    pet.showPet = !pet.showPet;
  }
}
