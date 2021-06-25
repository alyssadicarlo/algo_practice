function plus_one(array) {
    let done = false;
    let countNines = 0;
    for (let i = array.length-1; i >= 0; i--) {
        if (done === false) {
            if (array[i] < 9) {
                done = true;
                array[i] += 1;
            } else if (array[i] === 9) {
                array[i] = 0;
                countNines += 1;
            }
        }
    }
    if (countNines === array.length) {
        array[0] = 10;
        for (let i = 1; i < array.length; i++) {
            array[i] = 0;
        }
    }
    return array.join('');
}

console.log(plus_one([9,9,9,9]));