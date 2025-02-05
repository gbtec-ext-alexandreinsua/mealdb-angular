import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { MealCardComponent } from './meals/meal-card/meal-card.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { MealIngredientsComponent } from './meals/meal-ingredients/meal-ingredients.component';
import { MealInstructionsComponent } from './meals/meal-instructions/meal-instructions.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MealListComponent,
    MealDetailComponent,
    MealCardComponent,
    MealIngredientsComponent,
    MealInstructionsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
