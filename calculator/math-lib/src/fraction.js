export default class Fraction {
	constructor(integer) {
		this.integer = integer;
	}

	plus(other) {
		if (!(other instanceof Fraction)) {
			throw new TypeError("Can only add Fractions of type Fraction")
		}
		return new Fraction(this.integer + other.integer);
	}

	intValue() {
		return this.integer;
	}
}