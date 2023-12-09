// Business Logic 
// object constructor for toppings and size
// prototype method for selections -- use own formula 

function pizzaType(topping, size) {
    this.topping = topping;
    this.size = size;
}

pizzaType.prototype.priceIs = function () {
    return this.topping + " " + this.size + " = "
};


// UI logic 

// if statement