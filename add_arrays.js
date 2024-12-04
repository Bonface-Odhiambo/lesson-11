function addArrays(array1, array2) {
    return array1.map((num, index) => num + array2[index]);
}

// Examples
console.log(addArrays([1, 1, 2], [1, 1, 3]));  // [2, 2, 5]
console.log(addArrays([1, 2, 3], [4, 5, 6]));  // [5, 7, 9]