function removeEgg(foods) {
    const result = [];
    let eggCount = 0; // Counter for eggs removed
  
    for (let i = 0; i < foods.length; i++) {
      if (foods[i] === 'egg' && eggCount < 2) {
        eggCount++; // Increment counter and skip this 'egg'
        continue;
      }
      result.push(foods[i]); // Add non-'egg' items or excess 'egg' items
    }
    return result;
  }
  
  // Example:
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // Output: ['apple', 'egg', 'ham']
  