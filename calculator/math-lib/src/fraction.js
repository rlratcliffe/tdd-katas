export default class Fraction {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
	}

	plus(other) {
		if (!(other instanceof Fraction)) {
			throw new TypeError("Can only add Fractions of type Fraction")
		}
		return new Fraction(this.numerator + other.numerator, this.denominator);
	}

	intValue() {
		return this.numerator;
	}

	getNumerator() {
		return this.numerator;
	}

	getDenominator() {
		return this.denominator;
	}
}

Fraction.prototype.equals = function(other) {
	let otherIsFraction = other instanceof Fraction;

	if (otherIsFraction) {
		return this == other || (other.numerator == this.numerator);
	} else {
		return false
	}

}