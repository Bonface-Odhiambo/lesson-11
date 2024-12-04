// JavaScript
function minMax(nums) {
    // Handle empty array
    if (nums.length === 0) {
        return { min: null, max: null };
    }
    
    let min = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    
    return { min, max };
}

// Examples
console.log(minMax([1, -3, 5]));  // { min: -3, max: 5 }
console.log(minMax([-2, 3, -5, 7, 10]));  // { min: -5, max: 10 }
console.log(minMax([]));  // { min: null, max: null }
console.log(minMax([3]));  // { min: 3, max: 3 }