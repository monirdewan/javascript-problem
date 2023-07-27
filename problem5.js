/*
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

*/
function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Cannot divide by zero!");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Please use '+', '-', '*', or '/'.");
    }
  }
  
  // Example Input
  const number1 = 10;
  const number2 = 5;
  const operator = '*';
  
  // Call the function and store the result
  const result = calculator(number1, operator, number2);
  
  // Output the result
  console.log(result); // Output: 15 (10 + 5)
  