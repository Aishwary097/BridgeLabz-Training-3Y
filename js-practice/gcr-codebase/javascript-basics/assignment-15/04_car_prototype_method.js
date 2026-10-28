"use strict";

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function getDetails() {
  console.log(`${this.brand} ${this.model}`);
};

const firstCar = new Car("Toyota", "Camry");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();
console.log(`Both cars share the prototype method: ${firstCar.getDetails === secondCar.getDetails}`);
