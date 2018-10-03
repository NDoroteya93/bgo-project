import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './modules/layout/layout.module';
import { CoreModule } from './core/core.module';
import { MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PetsCardComponent } from './modules/home/pets-card/pets-card.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    PetsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    CoreModule, 
    MatCardModule, 
    MatButtonModule, 
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
