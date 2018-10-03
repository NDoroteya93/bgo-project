import { Breed } from './breed.interface';

export interface Pet {
  id: string;
  url: string;
  width?: number;
  height?: number;
  mime_type: string;
  entities: any[];
  name: string;
  breeds: Breed;
  animals: any[];
  categories: any[];
  showPet: boolean;
}
