/**
 * 
 *Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh"

 */

function reverseString(inputString) {
    let reversedString = '';
  
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
  
    return reversedString;
  }
  
  //  Input
  const input = "Hello, World!";
  
  // Call the function
  const reversed = reverseString(input);
  
  // Output the result
  console.log(reversed); 
  