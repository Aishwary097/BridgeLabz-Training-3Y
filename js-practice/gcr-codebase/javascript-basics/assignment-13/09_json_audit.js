"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}'
];
const cleanEntries = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index += 1) {
  const lineNumber = index + 1;

  try {
    const entry = JSON.parse(rawData[index]);

    if (entry.user === undefined || entry.age === undefined) {
      throw new TypeError("Required user or age key is missing.");
    }

    const age = Number(entry.age);

    if (!Number.isFinite(age)) {
      throw new TypeError("Age must be a valid number.");
    }

    cleanEntries.push({ user: entry.user, age });
    console.log(`Line ${lineNumber}: parsed ${entry.user}, age ${age}`);
  } catch (error) {
    auditErrors.push({ line: lineNumber, name: error.name, message: error.message });
    console.log(`Line ${lineNumber}: ${error.name} - ${error.message}`);
  }
}

const underageUsers = cleanEntries.filter((entry) => entry.age < 18);

console.log("Clean entries:", cleanEntries);
console.log("Audit errors:", auditErrors);
console.log("Users under 18:", underageUsers);
