function largest_product(array) {
    array.sort((a, b) => b-a);
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                if (i !== j && i !== k & j !== k) {
                    let currentProduct = array[i]*array[j]*array[k];
                    if (currentProduct > largest) {
                        largest = currentProduct;
                    }
                }
            }
        }
    }
    return largest;
}

console.log(largest_product([-10, 7, 29, 30, 5, -10, -70]));