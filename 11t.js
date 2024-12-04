function removeEgg(foods) {
    const reversed = foods.reverse(); // Reverse the array
    const result = [];
    let eggCount = 0;
  
    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === 'egg' && eggCount < 2) {
        eggCount++; // Increment counter and skip this 'egg'
        continue;
      }
      result.push(reversed[i]); // Add non-'egg' items or excess 'egg' items
    }
  
    return result.reverse(); // Reverse the array back to the original order
  }
  
  // Example:
  console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // Output: ['egg', 'apple', 'ham']
  

