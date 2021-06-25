function shortest_distance(array, word1, word2) {
    let count = 1;
    let counting = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word1) {
            counting = true;
        } else if (array[i] === word2) {
            return count;
        } else if (counting === true) {
            count += 1;
        }
    }
}

const words = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortest_distance(words, "practice", "coding"));
//expected output = 3