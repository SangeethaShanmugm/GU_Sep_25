// forEach()
const num = [1, 2, 3, 4];
num.forEach(no => console.log(no))


//find() => return first element based on condition

const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 100)
console.log(found)

// slice() => return a portion of an array => end index not included

const city = ["Bangalore", "Chennai", "Pune", "Delhi"];
//               0             1         2       3
const result = city.slice(1, 3);
console.log(result);

// splice() => remove or replace elements in an array

const num1 = [1, 2, 3, 4];
//            0  1  2  3   
//syntax => splice(startIndex, countToDelete,addElement)
num1.splice(2, 1, 99)//remove 1 element at index 2, add 99
console.log(num1);