class Pairs {
  static pairMap = {};

  static createPairMap(array: string[]) {
    for (const word of array) {
      this.pairMap[this.getFirstCharacter(word)] = this.getLastCharacter(word);
    }
  }

  static getFirstCharacter(string: string) {
    return string.charAt(0);
  }

  static getLastCharacter(string: string) {
    return string.charAt(string.length - 1);
  }

  static getPairMap(array: string[]) {
    this.createPairMap(array);
    return this.pairMap;
  }
}

// console.log(Pairs.getPairMap([ 'code', 'bug' ])); // {"b": "g", "c": "e"}
// console.log(Pairs.getPairMap([ 'man', 'moon', 'main' ])); // {"m": "n"}
console.log(Pairs.getPairMap([ 'man', 'moon', 'good', 'night' ])); // {"g": "d", "m": "n", "n": "t"}
