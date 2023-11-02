

class MCIntegrationView {

  setCartModel(cartModel){
    this.cartModel = cartModel;
  }

  handleToggleBetweenMainAndCartViews(){

    document.getElementById("food-items").classList.toggle("food-items");
    document.getElementById("category-list").classList.toggle("food-items");
    document.getElementById("category-header").classList.toggle("toggle-category");
    document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
    document.getElementById("cart-page").classList.toggle("cart-toggle");
    document.getElementById("checkout").classList.toggle("cart-toggle");

  }

  enableHeartIconToggle(foodItemId){

    const foodItemElement = document.getElementById(foodItemId);
    foodItemElement.classList.add("toggle-heart");
  }

  updateCartButtonToggleText(){

    const cartButtonToggleElement = document.getElementById("cart-plus");
    const totalNoOfItems = this.cartModel.getTotalNoOfItems();

    if (totalNoOfItems == 1){
      cartButtonToggleElement.innerText = `${totalNoOfItems} Item`
    }else{
      cartButtonToggleElement.innerText = `${totalNoOfItems} Items`
    }
  }
}

export {MCIntegrationView}