var Blackjack = /** @class */ (function () {
    function Blackjack() {
    }
    Blackjack.isBlackjack = function (val1, val2) {
        if (val1 > 21 && val2 > 21)
            return 0;
        return Math.max(val1, val2);
    };
    return Blackjack;
}());
console.log(Blackjack.isBlackjack(19, 21)); // 21
console.log(Blackjack.isBlackjack(21, 19)); // 21
console.log(Blackjack.isBlackjack(19, 22)); // 19
