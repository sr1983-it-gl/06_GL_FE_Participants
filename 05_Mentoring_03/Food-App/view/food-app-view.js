

import {FoodCategoryUtils} from "../food-category/model/food-category-utils.js"
import {FoodItemView} from "../food-item/view/food-item-view.js"
import {FoodCategoryView} from "../food-category/view/food-category-view.js"

class FoodAppView {

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  displayMainPanel(){

    this.foodCategories.forEach( (foodCategory) => {

      const allFoodItems = FoodCategoryUtils.getAllFoodItems(foodCategory);

      allFoodItems.forEach( (foodItem) => {

          const foodItemView = new FoodItemView(foodItem);

          const foodItemFragment = foodItemView.generateFragment();

          foodItemView.placeFoodItemFragment(foodItemFragment, foodCategory)
      })
    })
  }


  displaySidePanel(){

    this.foodCategories.forEach( (foodCategory) => {

      const foodCategoryView = new FoodCategoryView(foodCategory);
      const foodCategoryFragment = foodCategoryView.generateFragment();

      const categoryListElement 
        = document.getElementById("category-list");
      categoryListElement.appendChild(foodCategoryFragment);

    })
  }
}

export {FoodAppView}