function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//first pizza
let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("First pizza is a ");
console.log(pizza1);

//second pizza
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Second pizza is a ");
console.log(pizza2);

//third pizza 
let pizza3 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["ham", "pineapple"]);
console.log("Third pizza is a ");
console.log(pizza3);

//forth pizza
let pizza4 = pizzaOven("stuffed", "traditional", ["mozzarella"], ["pepperoni"]);
console.log("Forth pizza is a ");
console.log(pizza4);

//Bonus Challenge
function randomPizza() {
    let crustType = ["deep dish", "hand tossed", "stuffed"];
    let sauceType = ["traditional", "marinara"];
    let cheeses = ["mozzarella", "feta"];
    let toppings = ["mushrooms", "olives", "onions", "pepperoni", "sausage", "ham", "pineapple"];
    let randCrust = Math.floor(Math.random() * crustType.length);
    let randSauce = Math.floor(Math.random() * sauceType.length);
    let randCheese = Math.floor(Math.random() * cheeses.length);
    let count = 0;
    let choosenTopping = [];
    while(count < 3) {
        let randTopping = Math.floor(Math.random() * toppings.length);
        if(!choosenTopping.includes(toppings[randTopping])) {
            choosenTopping.push(toppings[randTopping]);
            count++;
        }
    }
    return pizzaOven(crustType[randCrust], sauceType[randSauce], [cheeses[randCheese]], choosenTopping);
}
let pizza5 = randomPizza();
console.log("Fifth pizza is a ");
console.log(pizza5);