var No9 = /** @class */ (function () {
    function No9() {
    }
    No9.endsWith9 = function (number) {
        return number % 10 === 9;
    };
    No9.remove9s = function (array) {
        var _this = this;
        return array.filter(function (number) { return !_this.endsWith9(number); });
    };
    return No9;
}());
console.log(No9.remove9s([1, 2, 19])); // [1, 2]
console.log(No9.remove9s([9, 19, 29, 3])); // [3]
console.log(No9.remove9s([1, 2, 3])); // [1, 2, 3]
