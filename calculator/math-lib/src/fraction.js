import  NumberTheory  from "../src/number_theory.js";

export default class Fraction {
	constructor(numerator, denominator) {
		if (denominator === undefined) {
			denominator = 1;
		}
		let signOfDenominator = denominator < 0 ? -1 : 1;
		let gcd = NumberTheory.gcd(numerator, denominator) * signOfDenominator;
		this.numerator = numerator / gcd;
		this.denominator = denominator / gcd;
	}

	plus(other) {
		if (!(other instanceof Fraction)) {
			throw new TypeError("Can only add Fractions of type Fraction")
		}
		let newDenominator = this.denominator * other.denominator;
		let newNumerator = (this.numerator * other.denominator) + (other.numerator * this.denominator);
		return new Fraction(newNumerator, newDenominator);
	}

	toString() {
		return this.numerator + "/" + this.denominator;
	}
}

Fraction.prototype.equals = function(other) {
	let otherIsFraction = other instanceof Fraction;

	if (otherIsFraction) {
		return this == other || (this.numerator == other.numerator && this.denominator == other.denominator);
	} else {
		return false
	}

}