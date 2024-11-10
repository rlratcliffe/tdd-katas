export default class Fraction {
	constructor(numerator, denominator) {
		this.numerator = Number(numerator);
		this.denominator = Number(denominator);
	}

	getNumerator() {
		return this.numerator;
	}

    plus(otherFraction) {
		if (this.denominator != otherFraction.denominator) {
			let newFirstFractionNumerator = this.numerator * otherFraction.denominator;
			let newSecondFractionNumerator = otherFraction.numerator * this.denominator;
			this.numerator = newFirstFractionNumerator +newSecondFractionNumerator;
			this.denominator *= otherFraction.denominator;
		}
		else {
			this.numerator += otherFraction.numerator;
		}

		let gcd = this.#gcd(this.numerator, this.denominator);
		if (gcd > 1) {
			this.numerator = this.numerator / gcd;
			this.denominator = this.denominator / gcd;
		}
        return this;
    }

	#gcd(numerator, denominator) {
		while (denominator !== 0) {
		  let temp = denominator;
		  denominator = numerator % denominator;
		  numerator = temp;
		}
		return numerator;
	}

    equals(otherFraction) {
        return this.numerator === otherFraction.numerator &&
               this.denominator === otherFraction.denominator;
    }

	toString() {
		return this.numerator.toString() + "/" + this.denominator.toString()
	}
}