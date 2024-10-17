export default class Fraction {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
	}

	getNumerator() {
		return this.numerator;
	}

    plus(otherFraction) {
		this.numerator += otherFraction.numerator;
        return this;
    }

    equals(otherFraction) {
        return this.numerator === otherFraction.numerator &&
               this.denominator === otherFraction.denominator;
    }
}