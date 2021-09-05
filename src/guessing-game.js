class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.lowerNumber = min;
        this.higherNumber = max;
    }

    guess() {
        this.result = Math.ceil((this.lowerNumber + this.higherNumber) / 2);
        return this.result;
    }

    lower() {
        this.higherNumber = this.result;
    }

    greater() {
        this.lowerNumber = this.result;
    }
}

module.exports = GuessingGame;
