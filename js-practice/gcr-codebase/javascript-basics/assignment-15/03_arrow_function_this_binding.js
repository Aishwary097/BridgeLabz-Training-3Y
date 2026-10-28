"use strict";

const userContext = {
  createUser(name) {
    return {
      name,
      showName: () => console.log(this.name)
    };
  }
};

const user = userContext.createUser("Aishwary Agrawal");

user.showName();
console.log("The arrow function captures this from its surrounding scope, so it does not refer to the user object.");

user.showName = function showName() {
  console.log(this.name);
};

user.showName();
