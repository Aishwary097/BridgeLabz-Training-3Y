"use strict";

class Employee {
  constructor(id, name, department, monthlySalary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = monthlySalary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (!Number.isFinite(percent) || percent < 0) {
      throw new RangeError("Bonus percentage must be a non-negative number.");
    }

    this.salary *= 1 + percent / 100;
    return this.getAnnualSalary();
  }
}

const employees = [
  new Employee(101, "Aarav", "Engineering", 65000),
  new Employee(102, "Diya", "Design", 58000),
  new Employee(103, "Kabir", "Finance", 62000),
  new Employee(104, "Meera", "Support", 49000),
  new Employee(105, "Ishaan", "Marketing", 54000)
];

for (const employee of employees) {
  const annualSalary = employee.applyBonus(5);
  console.log(`${employee.name} | ${employee.department} | Annual salary with bonus: ${annualSalary.toFixed(2)}`);
}

const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual company payout: ${totalAnnualPayout.toFixed(2)}`);
