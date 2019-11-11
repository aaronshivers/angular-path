class No9 {
  static endsWith9(number: number) {
    return number % 10 === 9;
  }

  static remove9s(array: number[]) {
    return array.filter(number => !this.endsWith9(number));
  }
}

console.log(No9.remove9s([ 1, 2, 19 ])); // [1, 2]
console.log(No9.remove9s([ 9, 19, 29, 3 ])); // [3]
console.log(No9.remove9s([ 1, 2, 3 ])); // [1, 2, 3]
