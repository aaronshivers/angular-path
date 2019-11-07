var Blackjack = /** @class */ (function () {
    function Blackjack() {
    }
    Blackjack.hasBusted = function (val) {
        return val > 21;
    };
    Blackjack.getHighCard = function (val1, val2) {
        if (this.hasBusted(val1) && this.hasBusted(val2))
            return 0;
        return Math.max(val1, val2);
    };
    return Blackjack;
}());
console.log(Blackjack.getHighCard(19, 21)); // 21
console.log(Blackjack.getHighCard(21, 19)); // 21
console.log(Blackjack.getHighCard(19, 22)); // 19
