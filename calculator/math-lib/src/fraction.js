export default class Fraction {
	constructor(integer) {
		this.integer = integer;
	}

	plus(other) {
		if (!(other instanceof Fraction)) {
			throw new TypeError("Can only add Fractions of type Fraction")
		}
		return this;
	}

	intValue() {
		return this.integer;
	}
}