
import {FoodCategoryUtils} from "../food-category/model/food-category-utils.js"

class CartView {

  constructor(cartModel){

    this.cartModel = cartModel;
  }

  render(){

    this.renderCartItemsView();
    this.renderCartCheckoutView();
  }

  renderCartItemsView(){

    const cartItemsTableBody 
      = document.getElementById("table-body")
    cartItemsTableBody.innerHTML = '';

    const allItems = this.cartModel.getAllItems();

    console.log('Render Cart Items View...')
    for (let foodItemId of allItems.keys()){

      console.log(`Food item ID ${foodItemId}`);

      const foodItemObj = 
      FoodCategoryUtils.retriveFoodItemBasedOnId(foodItemId);
      
      const foodItemRow = document.createElement('tr');

        // Image Element
        const imageTDElement = document.createElement("td");
          
          const foodImageElement = document.createElement("img");
          foodImageElement.src = foodItemObj.imagePath

        imageTDElement.appendChild(foodImageElement);

        // Name Element

        console.log(`Food name ${foodItemObj.name}`);

        const foodNameElement = document.createElement("td");

          const nameElement = document.createElement("span");
          nameElement.innerText = foodItemObj.name;

        foodNameElement.appendChild(nameElement); 

        // Quantity Element
        const quantityTDElement = document.createElement('td');

          // Button '-'
          const decrementButton = document.createElement("button");
          decrementButton.innerText = "-";

          // Quantity Value [2, 3]
          const quantityValueElement = document.createElement("span");
          quantityValueElement.innerText = this.cartModel.getQuantity(foodItemId);

          // Button '+'
          const incrementButton = document.createElement("button");
          incrementButton.innerText = "+";

          quantityTDElement.appendChild(decrementButton);
          quantityTDElement.appendChild(quantityValueElement);
          quantityTDElement.appendChild(incrementButton);
        
        // Price
        const priceTDElement = document.createElement("td");
        priceTDElement.innerText = foodItemObj.price;
        
        
      foodItemRow.appendChild(imageTDElement);
      foodItemRow.appendChild(foodNameElement);
      foodItemRow.appendChild(quantityTDElement);
      foodItemRow.appendChild(priceTDElement);
    
      cartItemsTableBody.appendChild(foodItemRow);
    }

  }

  renderCartCheckoutView(){

    // Total Items
    const totalItemsElement = document.getElementById("total-item")
    totalItemsElement.innerText = `Total Item : ${this.cartModel.getTotalNoOfItems()}`;

    // Total Price
    const totalPriceElement = document.getElementById("total-price")
    totalPriceElement.innerText = `Total Price : $ ${this.cartModel.getTotalPrice()}`;

  }

}

export {CartView}