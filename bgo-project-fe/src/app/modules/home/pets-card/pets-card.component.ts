import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../../shared/interfaces/pet.interface';

@Component({
  selector: 'bgo-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.scss']
})
export class PetsCardComponent {
  @Input() public pet: Pet;
  @Output() public hidePet = new EventEmitter<Pet>();

  public onClick(pet: Pet): void {
    this.hidePet.emit(pet);
  }
}
