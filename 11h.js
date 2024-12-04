function addOne(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] + 1);
    }
    return newArray;
  }
  
  // Examples:
  console.log(addOne([1, 2, 3])); // Output: [2, 3, 4]
  console.log(addOne([-2, -1, 0, 99])); // Output: [-1, 0, 1, 100]

  
 
