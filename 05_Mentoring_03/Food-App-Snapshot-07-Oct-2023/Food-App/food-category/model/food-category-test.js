
import {FoodCategoryUtils} from "./food-category-utils.js"
import { FoodCategory } from "./food-category.js";

function testGetAllFoodCategories(){

  const allFoodCategories 
    = FoodCategoryUtils.getAllFoodCategories();

  console.log("Length is " + allFoodCategories.length);
  console.log(allFoodCategories);
}

function testGetAllFoodItemsBasedOnFoodCategory(){
 
  const chineseFoodCategory = new FoodCategory("chinese", "Chinese", "");
  const allFoodItems = FoodCategoryUtils.getAllFoodItems(chineseFoodCategory)

  console.log("Length is " + allFoodItems.length);
  console.log("Food items");
  console.log(allFoodItems);
}

// testGetAllFoodCategories();

testGetAllFoodItemsBasedOnFoodCategory();