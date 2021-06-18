function intersectingArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !result.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result;
}

console.log(intersectingArrays([2, 2, 4, 1], [1, 2, 0, 2]));