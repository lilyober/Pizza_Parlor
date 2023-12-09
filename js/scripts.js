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

function pizzaToppingPrice() {
    button1.addEventListener("submit", () => {
        document.getElementById("toppings").innerText = toppingType;
        document.getElementById("size").innerText = sizeType;
        pizzaPrice = [];

        if (toppingType === "Veggie" || toppingType === "Pepperoni" && sizeType === "Small") {
            pizzaPrice.push("$10");
        } else if (toppingType === "Veggie" || toppingType === "Pepperoni" && sizeType === "Medium") {
            pizzaPrice.push("$12");
        } else if (toppingType === "Veggie" || toppingType === "Pepperoni" && sizeType === "Large") {
            pizzaPrice.push("$14");
        } else if (toppingType === "Cheese" && sizeType === "Small") {
            pizzaPrice.push("$8");
        } else if (toppingType === "Cheese" && sizeType === "Medium") {
            pizzaPrice.push("$10");
        } else if (toppingType === "Cheese" && sizeType === "Large") {
            pizzaPrice.push("$12");
        } else {
            pizzaPrice.push("Please Select the options above.")
        };

        document.querySelector("span#results").innerText = pizzaPrice;


    });
}
