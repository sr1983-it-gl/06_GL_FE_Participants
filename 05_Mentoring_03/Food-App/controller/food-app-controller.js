
import {FoodCategoryUtils} from "../food-category/model/food-category-utils.js"

import {FoodAppView} from "../view/food-app-view.js"

class FoodAppController {

  init(){

    const allFoodCategories = FoodCategoryUtils.getAllFoodCategories();

    const foodAppView = new FoodAppView(allFoodCategories);

    foodAppView.displayMainPanel();
    foodAppView.displaySidePanel();
  }
}

export {FoodAppController}