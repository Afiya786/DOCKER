// Definition: Abstraction involves hiding the complex details of how something works and exposing only the essential parts. It focuses on what an object does rather than how it does it.

class Animal {
    constructor(name,breed) {
      this.name = name;
      this.breed=breed;
    }
    
    speak() {
    //  throw new Error('Subclasses must implement the speak method');
    return;
    }
  }
  
  class Dog extends Animal {
    speak() {
      return `Woof! My name is ${this.name} and my breed is ${this.breed}.`;
    }
  }
  
  const dog = new Dog('Buddy','pumilian');
  
  console.log(dog.speak()); // Outputs: "Woof! My name is Buddy."

  class Cat extends Animal {
    speak() {
        return `hey I am ${this.name} and my breed is ${this.breed}`;
    }
  }

  const cat = new Cat('meow', 'kitty');
  console.log(cat.speak());
  

  //The constructor(name) is a special method in a JavaScript class that gets called when you create an instance of the class using the new keyword