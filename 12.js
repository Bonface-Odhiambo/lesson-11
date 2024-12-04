
function countPositive(nums) {
    return nums.filter(num => num > 0).length;
}

// Examples
console.log(countPositive([1, -3, 5]));  // 2
console.log(countPositive([-2, 3, -5, 7, 10]));  // 3