function arraySwap(array) {
    if (array.length > 1) { // Ensure there are at least two elements
      const temp = array[0]; // Store the first element
      array[0] = array[array.length - 1]; // Set the first element to the last
      array[array.length - 1] = temp; // Set the last element to the stored value
    }
    return array; // Return the modified array
  }
  
  // Examples:
  console.log(arraySwap([1, 20, 22, 24, 5])); // Output: [5, 20, 22, 24, 1]
  console.log(arraySwap(['hi', 'hello', 'good'])); // Output: ['good', 'hello', 'hi']
  