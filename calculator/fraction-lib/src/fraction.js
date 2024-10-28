export default class Fraction {
	constructor(numerator, denominator) {
		this.numerator = Number(numerator);
		this.denominator = Number(denominator);
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

	toString() {
		return this.numerator.toString() + "/" + this.denominator.toString()
	}
}