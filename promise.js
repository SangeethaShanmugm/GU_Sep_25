//Object => complete/ fail

//create a promise
const orderPizza = new Promise((resolve, reject) => {
    let pizzaAvailable = false;
    setTimeout(() => {
        if (pizzaAvailable) {
            resolve("🍕 Pizza order placed successfully!"); //success
        } else {
            reject("❌ Pizza is not available right now."); //reject
        }
    }, 3000) //delay for 3 sec delivery time
});
//use promise
orderPizza
    .then((message) => console.log(message))//handle succes
    .catch((error) => console.log(error))//handle failure
console.log("Waiting for the pizza....")