import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css'],
})
export class RecipeItemsComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  @Input()
  recipe!: Recipe;

  @Input()
  index!: number;

  ngOnInit(): void {}
  
}
