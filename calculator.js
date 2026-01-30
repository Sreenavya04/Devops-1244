const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function definitions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}

// User input
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
      console.log("❌ Please enter valid numbers.");
      rl.close();
      return;
    }

    console.log("\nChoose an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    rl.question("Enter your choice (1-4): ", (choice) => {
      let result;

      switch (choice) {
        case "1":
          result = add(a, b);
          break;
        case "2":
          result = subtract(a, b);
          break;
        case "3":
          result = multiply(a, b);
          break;
        case "4":
          result = divide(a, b);
          break;
        default:
          console.log("❌ Invalid choice");
          rl.close();
          return;
      }

      console.log("\n✅ Result:", result);
      rl.close();
    });
  });
});
