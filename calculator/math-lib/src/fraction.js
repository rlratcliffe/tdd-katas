export default class Fraction {
	plus(other) {
		if (!(other instanceof Fraction)) {
			throw new TypeError("Can only add Fractions of type Fraction")
		}
	}
}