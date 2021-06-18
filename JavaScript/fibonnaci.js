function fibonnaci(n) {
    console.log(n);
    if (n < 2) {
        return n;
    } else {
        return fibonnaci(n-1) + fibonnaci(n-2);
    }
}

console.log(fibonnaci(9));