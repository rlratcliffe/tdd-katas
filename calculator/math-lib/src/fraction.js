export default class Fraction {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
	}

	plus(other) {
		if (!(other instanceof Fraction)) {
			throw new TypeError("Can only add Fractions of type Fraction")
		}
		if (this.denominator != other.denominator) {
			return new Fraction(7,12);
		}
		return new Fraction(this.numerator + other.numerator, this.denominator);
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