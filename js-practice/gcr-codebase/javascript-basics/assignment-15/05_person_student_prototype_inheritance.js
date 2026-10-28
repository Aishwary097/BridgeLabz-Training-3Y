"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function printName() {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.printBranch = function printBranch() {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Aishwary Agrawal", "Computer Science Engineering");
student.printName();
student.printBranch();
console.log(`Student inherits from Person: ${Person.prototype.isPrototypeOf(student)}`);
