import { Component, OnInit, ViewChild } from '@angular/core';
import { PetsService } from '../../../core/pets/pets.service';
import { Pet } from '../../../shared/interfaces';
import { State } from '@progress/kendo-data-query';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GridComponent, EditEvent } from '@progress/kendo-angular-grid';

const newFormGroup = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id),
  'name': new FormControl(dataItem.name)
});

@Component({
  selector: 'bgo-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.scss']
})
export class MyGridComponent implements OnInit {
  public formGroup: FormGroup;
  public pets: Pet[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  @ViewChild(GridComponent) private grid: GridComponent;
  private editedRowIndex: number;
  private isNew = false;

  constructor(private petService: PetsService, private fb: FormBuilder) { }

  public get isInEditingMode(): boolean {
    return this.editedRowIndex !== undefined || this.isNew;
  }


  public ngOnInit(): void {
    this.getAllPets();
  }

  public getAllPets(): void {
    this.petService.getAllPets().subscribe(data => this.pets = data.pets);
  }

  public onStateChange(state: State): void {
    this.gridState = state;
}

  public createFormGroup(dataItem: Pet): FormGroup {
    this.formGroup = this.fb.group({
      'id': dataItem.id,
      'name': [dataItem.name, Validators.required],
    });
    return this.formGroup;
  }

  public editClick({ dataItem, rowIndex }: any): void {
    this.editHandler({
        dataItem: dataItem,
        rowIndex: rowIndex,
        isNew: this.isNew,
        sender: this.grid
    });
  }
  public removeHandler({ sender, dataItem }) {
    const foundIndex = this.pets.findIndex(pet => (pet.id === dataItem.id) || (dataItem.title === pet.name));
    if (foundIndex > -1) {
      this.pets.splice(foundIndex, 1);
    }

    sender.cancelCell();
  }

  public saveRow({dataItem}): void {
    if (this.isInEditingMode) {
      this.save(dataItem, this.formGroup.value);
    }

    this.closeEditor(this.grid);
  }

  private save(dataItem, newData): void {
    const foundIndex = this.pets.findIndex(pet => (pet.id === dataItem.id) || (dataItem.title === pet.name));
    if (foundIndex !== -1) { 
      this.pets[foundIndex].name = newData.name;
      this.pets[foundIndex].id = newData.id;
    }
  }

  private closeEditor(grid: GridComponent, rowIndex: number = this.editedRowIndex): void {
    this.isNew = false;
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  private editHandler({ sender, rowIndex, dataItem }: EditEvent): void {
    if (this.formGroup && !this.formGroup.valid) {
      return;
    }

    this.formGroup = newFormGroup(dataItem);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.formGroup);
  }

}
