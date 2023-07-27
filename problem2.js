/*
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

*/
function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
  
    for (const num of numbersArray) {
      if (num > 0) {
        sum += num;
      }
    }
  
    return sum;
  }
  
  // Example 
  const numbersArray = [3, -5, 2, -1, 8, -4, 2,-5,3];
  
  // Call the function 
  const positiveSum = sumOfPositiveNumbers(numbersArray);
  
  // Output 
  console.log(positiveSum);
  