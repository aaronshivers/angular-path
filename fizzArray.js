function fizzArray(n) {
    if (n === 0)
        return [];
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(String(i));
    }
    return array;
}
console.log(fizzArray(4)); // ["0", "1", "2", "3"]
console.log(fizzArray(10)); // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(fizzArray(2)); // ["0", "1"]
console.log(fizzArray(0)); // []
