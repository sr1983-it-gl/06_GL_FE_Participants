
import {FoodCategoryUtils} from "../food-category/model/food-category-utils.js"

import {FoodAppView} from "../view/food-app-view.js"

import {CartController} from "../cart/cart-controller.js"

import { MCIntegrationController } from "../mc-integration/mc-integration-controller.js";

class FoodAppController {

  init(){

    const allFoodCategories = FoodCategoryUtils.getAllFoodCategories();

    const foodAppView = new FoodAppView(allFoodCategories);

    foodAppView.displayMainPanel();
    foodAppView.displaySidePanel();


    const cartController = new CartController();
    cartController.init();

    const mcIntegrationController = new MCIntegrationController();
    mcIntegrationController.init();

    mcIntegrationController.setCartController(cartController);

  }
}

export {FoodAppController}