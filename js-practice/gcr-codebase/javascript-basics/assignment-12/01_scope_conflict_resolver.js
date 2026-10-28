const bonus = 5000;

function calculateSalary(isPermanent) {
  let salary = 40000;

  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Permanent: ${isPermanent} | Total salary: ${salary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: ${bonus}`);
