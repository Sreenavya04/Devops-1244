/*const fs = require('fs');
fs.writeFileSync("sample.txt", "This is a Node.js file");
console.log("File created successfully");*/

/*const fs = require('fs');
const data = fs.readFileSync("sample.txt", "utf-8");
console.log(data);*/

/*const fs = require('fs');
fs.readFile("sample.txt", "utf-8", (err, data) => {
if (err) {
console.log("Error reading file");
} else {
console.log(data);
}
});*/

/*CHECK EVEN OR ODD*/
/*const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter a number: ", (num) => {
if (num % 2 === 0)
console.log("Even Number");
else
console.log("Odd Number");
rl.close();
});*/

/*factorial of a number*/
/*function factorial(n) {
let fact = 1;
for (let i = 1; i <= n; i++) {
fact *= i;
}
return fact;
}
console.log("Factorial:", factorial(5));*/

/*Display Current Date and Time*/
const date = new Date();
console.log("Current Date & Time:", date.toLocaleString());



