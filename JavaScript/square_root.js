function squareRoot(number, tolerance) {
    let x0 = number;
    let current = 0;
    let count = 0;
    while (count < 10) {
        let temp = (x0 + (number/x0))/2;
        x0 = temp;
        current = temp;
        count += 1;
    }
    return current;
}

console.log(squareRoot(26));