import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsService } from './pets/pets.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PetsService]
})
export class CoreModule { }
