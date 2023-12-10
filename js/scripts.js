// Business Logic 
// object constructor for toppings and size
// prototype method for selections and cost -- use own formula 

function pizzaType(topping, size) {
    this.topping = topping;
    this.size = size;
}

pizzaType.prototype.priceIs = function (topping) {
    if (topping === "Cheese") {
        this.topping = "$8";
    } else if (topping === "Pepperoni" || topping === "Veggie") {
        this.topping = "$10";
    }
    return this.topping;

};

// UI logic 

window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let toppingsSelection = document.getElementById("toppings").value;

        // let price = pizzaType;
        // toppingsSelection.priceIs;

        document.querySelector("span#results").innerText = toppingsSelection.priceIs;
        document.querySelector("div#resetButton").removeAttribute("class");
    });
}