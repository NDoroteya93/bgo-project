export interface Breed {
  id: number;
  name: string;
  life_span: string;
  bred_for: string;
  breed_group: string;
  temperament: string;
  weight: { imperial: string, metric: string };
  height: { imperial: string, metric: string };
}