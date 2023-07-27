/*Task 3: Write a JavaScript program to find the most frequent element in an array and return it. */

//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

let a =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
const itemCounter = {};
a.map((item)=>{
    itemCounter[item] = itemCounter[item]+1 || 1;
});

let key = Object.keys(itemCounter);
let value = Object.values(itemCounter);
let max = Math.max(...value);
let i = value.findIndex((item)=>{
    return item === max
})
let frequentElement = key[i];
console.log(frequentElement)

