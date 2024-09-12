class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
    getInfo() {
      return `${this.make} ${this.model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model);
      this.year = year;
    }
    
    getInfo() {
      return `${super.getInfo()} (${this.year})`;
    }
  }
  
  const myCar = new Car('Toyota', 'Camry', 2020);
  console.log(myCar.getInfo()); // Outputs: "Toyota Camry (2020)"
  