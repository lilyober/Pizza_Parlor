Descibe: pizzaType()

Test: "It should creates the type of pizza based on toppings and size."
Code: let pepPizza = new pizzaType("Pepparoni", "Small")
Expected output: pepPizza {topping: "Pepparoni", "Small"}

Descibe: pizzaType.prototype.priceIs = function () {}

Test: "It should determine the price of pizzaType."
Code: pepPizza.price();
Expected output: "Pepperoni, Small = "