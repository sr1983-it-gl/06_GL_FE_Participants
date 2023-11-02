
import {FoodCategory} from "./food-category.js"
import {FoodItem} from "../../food-item/model/food-item.js"
import {foodItemsDataArray} from "../../food-item/model/food-items-data.js"

class FoodCategoryUtils {

  static retriveFoodItemBasedOnId(foodItemId){

    
    const foodItemSampleDataResult = foodItemsDataArray.find( 
      (foodItemSampleData) => {

      return (foodItemId == foodItemSampleData.id)
    })

    const foodItemObj = new FoodItem(
      foodItemSampleDataResult.id,
      foodItemSampleDataResult.name,
      foodItemSampleDataResult.rating,
      foodItemSampleDataResult.price,
      foodItemSampleDataResult.img,
      foodItemSampleDataResult.category
    );

    return foodItemObj;
  }

  static getAllFoodItems(foodCategory){

    const allFoodItems = new Array();

    // const filteredFoodItems = foodItemsDataArray.filter((foodItemSampleData) => {

    //   return foodCategory.id == foodItemSampleData.category;
    // })

    foodItemsDataArray.forEach( (foodItemSampleData) => {

      if (foodCategory.id == foodItemSampleData.category){

      const foodItemObj = new FoodItem(
        foodItemSampleData.id,
        foodItemSampleData.name,
        foodItemSampleData.rating,
        foodItemSampleData.price,
        foodItemSampleData.img,
        foodItemSampleData.category
      );

      allFoodItems.push(foodItemObj);

      }
    })

    return allFoodItems;
  }

  static getAllFoodCategories(){

    const allFoodCategories = new Array();

    allFoodCategories.push(
      new FoodCategory("biryani", "Biryani", 
        FoodCategoryUtils.retriveFoodItemBasedOnId(1).imagePath)
    )
    allFoodCategories.push(
      new FoodCategory("chicken", "Chicken", 
      FoodCategoryUtils.retriveFoodItemBasedOnId(10).imagePath)
    )
    allFoodCategories.push(
      new FoodCategory("paneer", "Paneer", 
      FoodCategoryUtils.retriveFoodItemBasedOnId(17).imagePath)
    )
    allFoodCategories.push(
      new FoodCategory("vegetable", "Vegetable Dishes",
      FoodCategoryUtils.retriveFoodItemBasedOnId(24).imagePath)
    )
    allFoodCategories.push(
      new FoodCategory("chinese", "Chinese", 
      FoodCategoryUtils.retriveFoodItemBasedOnId(30).imagePath)
    )
    allFoodCategories.push(
      new FoodCategory("south indian", "South Indian",
      FoodCategoryUtils.retriveFoodItemBasedOnId(37).imagePath)
    )

    return allFoodCategories;

  }
}

export {FoodCategoryUtils}