function pizzaType(topping, size) {
    this.topping = topping;
    this.size = size;

    this.price = [];
}

pizzaType.prototype.priceIs = function (topping) {
    if (this.topping === "Cheese" && this.size === "Small") {
        this.price.push("$8");
    } else if (this.topping === "Cheese" && this.size === "Medium") {
        this.price.push("$10");
    } else if (this.topping === "Cheese" && this.size === "Large") {
        this.price.push("$12");
    } else if (this.topping === "Pepperoni" && this.size === "Small" || this.topping === "Veggies" && this.size === "Small") {
        this.price.push("$10");
    } else if (this.topping === "Pepperoni" && this.size === "Medium" || this.topping === "Veggies" && this.size === "Medium") {
        this.price.push("$12");
    } else if (this.topping === "Pepperoni" && this.size === "Large" || this.topping === "Veggies" && this.size === "Large") {
        this.price.push("$14");
    }
    return this.price;
};

window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let newPizza = new pizzaType(document.getElementById("toppings").value, document.getElementById("size").value);
        document.querySelector("span#results").innerText = newPizza.priceIs();
        document.querySelector("div#resetButton").removeAttribute("class");
    });
} 