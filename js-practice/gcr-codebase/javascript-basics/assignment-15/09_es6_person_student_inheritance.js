"use strict";

function PrototypePerson(name) {
  this.name = name;
}

PrototypePerson.prototype.printName = function printName() {
  console.log(`Name: ${this.name}`);
};

function PrototypeStudent(name, branch) {
  PrototypePerson.call(this, name);
  this.branch = branch;
}

PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;
PrototypeStudent.prototype.printBranch = function printBranch() {
  console.log(`Branch: ${this.branch}`);
};

class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const prototypeStudent = new PrototypeStudent("Aishwary Agrawal", "Computer Science Engineering");
const classStudent = new Student("Aishwary Agrawal", "Computer Science Engineering");

console.log("Prototype inheritance version:");
prototypeStudent.printName();
prototypeStudent.printBranch();
console.log("ES6 class inheritance version:");
classStudent.printName();
classStudent.printBranch();
