
import {MCIntegrationView} from "./mc-integration-view.js"

class MCIntegrationController {

  constructor(){

    this.mcIntegrationView = new MCIntegrationView();
  }

  init(){

    this.addListeners();
  }

  setCartController(cartController){

    this.cartController = cartController;
    this.mcIntegrationView.setCartModel(this.cartController.cartModel);
  }

  addListeners(){

    // Cart Button Toggle
    const cartToggleButton = document.getElementById("cart-plus")
    
    cartToggleButton.addEventListener("click", (event) => {

      if (this.cartController.cartModel.hasItems()){
        
        this.mcIntegrationView.handleToggleBetweenMainAndCartViews()
      }else{

        alert("No items in the cart...")
      }
    })


    // For all items - heart iconn / add-to-cart

    const allFoodItems = document.querySelectorAll(".add-to-cart");

    allFoodItems.forEach( (aFoodItem) => {

      aFoodItem.addEventListener("click", (event) => {

        const foodItemId = event.target.getAttribute("id");

        this.cartController.cartModel.add(foodItemId);

        this.mcIntegrationView.enableHeartIconToggle(foodItemId);
        this.mcIntegrationView.updateCartButtonToggleText();

        this.cartController.cartView.render();
      })
    })
  }

}

export {MCIntegrationController}