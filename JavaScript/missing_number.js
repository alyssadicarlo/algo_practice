function missingNumber(array) {
    array.sort();
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i) {
            return i;
        }
    }
}

console.log(missingNumber([9,6,4,3,2,5,7,0,1]));