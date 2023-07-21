import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipe-list/recipe-items/recipe-items.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipe-list/recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  exports:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    RecipeStartComponent,
    RecipeEditComponent,

  ],
  imports: [SharedModule, RouterModule, ReactiveFormsModule,RecipesRoutingModule],
})
export class RecipesModule {}
