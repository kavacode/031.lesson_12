class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce(
      (total, topping) => total + topping.price,
      0
    );
    return basePrice + toppingsPrice;
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce(
      (total, topping) => total + topping.calories,
      0
    );
    return baseCalories + toppingsCalories;
  }
}

Hamburger.SIZE_SMALL = {
  price: 50,
  calories: 20,
};

Hamburger.SIZE_LARGE = {
  price: 100,
  calories: 40,
};

Hamburger.STUFFING_CHEESE = {
  price: 10,
  calories: 20,
};

Hamburger.STUFFING_SALAD = {
  price: 20,
  calories: 5,
};

Hamburger.STUFFING_POTATO = {
  price: 15,
  calories: 10,
};

Hamburger.TOPPING_SPICE = {
  price: 15,
  calories: 0,
};

Hamburger.TOPPING_MAYO = {
  price: 20,
  calories: 5,
};

const smallBurgerWithCheese = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
smallBurgerWithCheese.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + smallBurgerWithCheese.calculateCalories());
console.log("Price: " + smallBurgerWithCheese.calculatePrice());

smallBurgerWithCheese.addTopping(Hamburger.TOPPING_SPICE);
console.log("Total price: " + smallBurgerWithCheese.calculatePrice());

// const SIZE_SMALL = { price: 50, calories: 20 };
// const SIZE_LARGE = { price: 100, calories: 40 };
// const STUFFING_CHEESE = { price: 10, calories: 20 };
// const STUFFING_SALAD = { price: 20, calories: 5 };
// const STUFFING_POTATO = { price: 15, calories: 10 };
// const TOPPING_MAYO = { price: 20, calories: 5 };
// const TOPPING_SPICE = { price: 15, calories: 0 };
