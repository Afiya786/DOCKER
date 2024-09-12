const gift = {
    name: "cloth",
    price: 2000,
    brand: "zara",
    item: function() {
        console.log(`this items name is ${this.name} and its price is ${this.price}`);
    }
};


gift.item();

// In JavaScript, an object literal is a way to encapsulate related data (properties) and behavior (methods) into a single object
// The gift object encapsulates the following information:

// name: A property storing the name "John."
// price: A property storing the age 30.
//item: A method that allows the object to perform an action, which, in this case, is to log a greeting to the console.

//Encapsulation allows you to group related data and functions into a single unit, which makes the code more organized and understandable. In this case, the person object bundles the person's data (name and age) with the behavior (saying hello).

