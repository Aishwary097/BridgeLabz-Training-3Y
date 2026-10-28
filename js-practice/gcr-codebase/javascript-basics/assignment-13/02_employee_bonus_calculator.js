"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Nia", salary: "unknown", years: "1" },
  { name: "Dev", years: "4" }
];

for (const employee of employees) {
  try {
    if (!employee || typeof employee !== "object") {
      throw new TypeError("Employee record must be an object.");
    }
    if (!employee.name || employee.salary === undefined || employee.years === undefined) {
      throw new ReferenceError("Employee name, salary, or years is missing.");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary and years must be valid numbers.");
    }

    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;
    console.log(`${employee.name}: salary ${salary.toFixed(2)}, bonus ${bonus.toFixed(2)}, total ${(salary + bonus).toFixed(2)}`);
  } catch (error) {
    console.log(`${employee.name ?? "Unknown employee"}: ${error.name} - ${error.message}`);
  }
}
