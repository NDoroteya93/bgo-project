import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { DetailsRoutingModule } from './details-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { DetailsComponent } from './details.component';
import { MyGridComponent } from './my-grid/my-grid.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule, 
    GridModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DetailsComponent, MyGridComponent]
})
export class DetailsModule { }
