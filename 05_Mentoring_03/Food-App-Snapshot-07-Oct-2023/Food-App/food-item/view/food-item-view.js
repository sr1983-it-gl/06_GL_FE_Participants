
import {FoodItem} from "../model/food-item.js"

class FoodItemView{

  constructor(foodItem){

    this.foodItem = foodItem;
  }

  generateFragment(){

    const foodItemElement = document.createElement("div");
    foodItemElement.setAttribute("id", "item-card");

      const cardTopElement = document.createElement("div");
      cardTopElement.setAttribute("id", "card-top");

        const ratingElement = document.createElement("i");
        ratingElement.setAttribute("class", "fa fa-star");
        ratingElement.setAttribute("id", "rating");
        ratingElement.innerText = this.foodItem.rating;

        const idElement = document.createElement("i");
        idElement.setAttribute("class", "fa fa-heart-o add-to-cart");
        idElement.setAttribute("id", this.foodItem.id);

      cardTopElement.appendChild(ratingElement);
      cardTopElement.appendChild(idElement);

      const imageElement = document.createElement("img");
      imageElement.src = this.foodItem.imagePath;

      const nameElement = document.createElement("p");
      nameElement.setAttribute("id", "item-name");
      nameElement.innerText = this.foodItem.name;

      const priceElement = document.createElement("p");
      priceElement.setAttribute("id", "item-price");
      priceElement.innerText = `Price : $ ${this.foodItem.price}`
      // `` / ~  backtick []
      // ' ' - single quote 


      foodItemElement.appendChild(cardTopElement);
      foodItemElement.appendChild(imageElement);
      foodItemElement.appendChild(nameElement);
      foodItemElement.appendChild(priceElement);


    return foodItemElement;
  }

  placeFoodItemFragment(foodItemFragment, foodCategory){

    const foodCategoryElement 
      = document.getElementById(foodCategory.id)

    foodCategoryElement.appendChild(foodItemFragment);
  }

}

export {FoodItemView}