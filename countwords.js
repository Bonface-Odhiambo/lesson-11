
function countWords(words) {
    const counts = {};
    
    for (let word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }
    
    return counts;
}

// Example
console.log(countWords(['apple', 'mango', 'pear', 'mango', 'mango', 'pear']));
// Output: { apple: 3, grape: 1 }