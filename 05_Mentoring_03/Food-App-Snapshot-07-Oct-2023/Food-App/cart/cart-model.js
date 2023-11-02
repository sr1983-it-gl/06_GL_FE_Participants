
import {FoodCategoryUtils} from "../food-category/model/food-category-utils.js"

class CartModel {

  // Usage of Map / Dictionary data structure

  // Operations

  constructor(){

    this.items = new Map();
  }

  add(foodItemId){

    const foodItemPresent = this.isFoodItemPresent(foodItemId);

    if (foodItemPresent){
    // Update Quantity -> Increment
     this.updateQuantity(foodItemId);

    }else{
      this.items.set(foodItemId, 1);
    }

    console.log("DISPLAY");
    console.log("-------------------------")
    console.log(this.items);
  }

  updateQuantity(foodItemId){

    const quantityValue = this.items.get(foodItemId)
    this.items.set(foodItemId, (quantityValue + 1))
  }

  remove(foodItemId){

    const foodItemPresent = this.isFoodItemPresent(foodItemId);
    if (foodItemPresent){

      const existingQuantity = this.items.get(foodItemId);

      if (existingQuantity == 1){

        this.items.delete(foodItemId);
      }else{
        this.items.set(foodItemId, (existingQuantity - 1))
      }
    }
    this.items.delete(foodItemId);

    // Update Quantity -> Decrement

  }

  getAllItems(){
    return this.items;
  }

  getQuantity(foodItemId){

    const itemPresent = this.items.has(foodItemId);

    if (itemPresent){
      return this.items.get(foodItemId);
    }else{

      // Report Error
      return 0;
    }
  }

  isFoodItemPresent(foodItemId){

    const itemPresent = this.items.has(foodItemId);
    return itemPresent;
  }

  hasItems(){

    if (this.items.size > 0){
      return true;
    }else{
      return false;
    }
  }

  getTotalNoOfItems(){

    return this.items.size;
  }

  getTotalPrice(){

    let totalPrice = 0;

    for (let foodItemId of this.items.keys()){

      const foodItemObj = 
      FoodCategoryUtils.retriveFoodItemBasedOnId(foodItemId);

      // 3 * price 

      const quantityValue = this.items.get(foodItemId)
      const price = foodItemObj.price

      const itemLevelPrice = quantityValue * price;
      totalPrice = totalPrice + itemLevelPrice;
    }

    return totalPrice;
  }

}

export {CartModel}