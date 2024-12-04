function removeEgg (foods) {
    const result = [];

    for (let i=0; i< foods.length; i++) {
        if (foods [i] === 'egg') {
            continue; //skip 'egg'
        }
    result.push (foods[i]); //Add non-'egg' to the result
    }
    return result
}

console.log (removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));