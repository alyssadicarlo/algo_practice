function removeDuplicates(array) {
    array.sort();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i+1]) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]));