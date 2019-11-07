
class Blackjack {

  private static hasBusted(val: number) {
    return val > 21
  }

  static getHighCard(val1: number, val2: number) {
    if (this.hasBusted(val1) && this.hasBusted(val2)) return 0;

    return Math.max(val1, val2)
  }
}

console.log(Blackjack.getHighCard(19, 21)); // 21
console.log(Blackjack.getHighCard(21, 19)); // 21
console.log(Blackjack.getHighCard(19, 22)); // 19
console.log(Blackjack.getHighCard(23, 22)); // 0
