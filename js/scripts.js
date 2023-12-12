function pizzaType(topping, size) {
    this.topping = topping;
    this.size = size;

    this.price = [];
}

pizzaType.prototype.priceIs = function (topping) {
    if (this.topping === "Cheese") {
        this.price.push("$8");
    } else if (this.topping === "Pepperoni" || this.topping === "Veggie") {
        this.price.push("$10");
    }
    return this.price;
};

window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let newPizza = new pizzaType(document.getElementById("toppings").value);
        document.querySelector("span#results").innerText = newPizza.priceIs();
        document.querySelector("div#resetButton").removeAttribute("class");
    });
}