var Pairs = /** @class */ (function () {
    function Pairs() {
    }
    Pairs.createPairMap = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var word = array_1[_i];
            this.pairMap[this.getFirstCharacter(word)] = this.getLastCharacter(word);
        }
    };
    Pairs.getFirstCharacter = function (string) {
        return string.charAt(0);
    };
    Pairs.getLastCharacter = function (string) {
        return string.charAt(string.length - 1);
    };
    Pairs.getPairMap = function (array) {
        this.createPairMap(array);
        return this.pairMap;
    };
    Pairs.pairMap = {};
    return Pairs;
}());
// console.log(Pairs.getPairMap([ 'code', 'bug' ])); // {"b": "g", "c": "e"}
// console.log(Pairs.getPairMap([ 'man', 'moon', 'main' ])); // {"m": "n"}
console.log(Pairs.getPairMap(['man', 'moon', 'good', 'night'])); // {"g": "d", "m": "n", "n": "t"}
