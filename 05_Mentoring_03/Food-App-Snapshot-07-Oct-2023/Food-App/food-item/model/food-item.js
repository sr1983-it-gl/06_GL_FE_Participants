

class FoodItem {

  constructor(id, name, rating, price, imagePath, category){

    this.id = id;
    this.name = name;
    this.rating = rating;
    this.price = price;

    // imagePath -> images/paneer/shahi-paneer.jpg
    // ideal imagePath -> food-item/model/images/paneer/

    const desiredImgePath = `food-item/model/${imagePath}`;
    this.imagePath = desiredImgePath;
    this.category = category;
  }
}

export {FoodItem}