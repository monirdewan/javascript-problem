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
  const numbersArray = [3, -5, 2, -1, 8, -4, 7];
  
  // Call the function 
  const positiveSum = sumOfPositiveNumbers(numbersArray);
  
  // Output 
  console.log(positiveSum);
  