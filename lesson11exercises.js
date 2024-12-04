/*
const array = ['hello', 'good', 'search', 'world'];
    let index = [-1];

    for (let i= 0; i < array.length; i++) {
        if (array [i] === 'search') {
            index = 1;
            break;
        }
    }
console.log (index); */

function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return i; // Return the index of the first match
      }
    }
    return -1; // Return -1 if the word is not found
  }
  
  // Examples
  console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));    // Output: 1
  console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow')); // Output: -1
  
  