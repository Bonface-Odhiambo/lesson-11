function addNum(array,num) {
    return array.map (x => x+ num)
}

//Examples
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0],99));