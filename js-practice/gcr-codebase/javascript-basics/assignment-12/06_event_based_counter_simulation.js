let count = 0;

function increment() {
  function updateCount() {
    count += 1;
  }

  updateCount();
  console.log(`Current count: ${count}`);
}

function decrement() {
  function updateCount() {
    count -= 1;
  }

  updateCount();
  console.log(`Current count: ${count}`);
}

increment();
increment();
decrement();
