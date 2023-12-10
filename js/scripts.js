// Business Logic 
// object constructor for toppings and size
// prototype method for selections and cost -- use own formula 

function pizzaType(topping) {
    this.topping = topping;
    // this.size = size;
}

pizzaType.prototype.priceIs = function (topping) {
    if (topping === "Cheese") {
        this.topping.push(8);
    } else if (topping === "Pepperoni" || topping === "Veggie") {
        this.topping.push(10);
    }
    return this.topping.toString();
};

// UI logic 

window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let newPizza = new pizzaType(" ")
        let toppingsSelection = document.getElementById("toppings").value;

        // let price = pizzaType;
        newPizza.priceIs(toppingsSelection);

        document.querySelector("span#results").innerText = pizzaType();
        document.querySelector("div#resetButton").removeAttribute("class");
    });
}