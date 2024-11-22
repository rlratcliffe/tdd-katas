export default class Fraction {
	constructor(numerator, denominator) {
		this.numerator = Number(numerator);
		this.denominator = Number(denominator);
	}

	// need to allow initializing a fraction with no denominator, but multiple constructors not allowed in JSs
	static noDenominator(numerator) {
		return new Fraction(numerator, 1);
	}

	getNumerator() {
		return this.numerator;
	}

	getDenominator() {
		return this.denominator;
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
		
		let [numerator, denominator] = this.#simplify(this.numerator, this.denominator);
		this.numerator = numerator;
		this.denominator = denominator;

        return this;
    }

    equals(otherFraction) {
		// if simplifying inside equals
		// let [simplifiedFractionNumerator, simplifiedFractionDenominator] = this.#simplify(this.numerator, this.denominator);
		// let [otherFractionNumerator, otherFractionDenominator] = this.#simplify(otherFraction.numerator, otherFraction.denominator);
		
        // return simplifiedFractionNumerator === otherFractionNumerator &&
		// 		simplifiedFractionDenominator === otherFractionDenominator;


		return this.numerator === otherFraction.numerator &&
		this.denominator === otherFraction.denominator;
    }

	toString() {
		return this.numerator.toString() + "/" + this.denominator.toString()
	}

	#gcd(numerator, denominator) {
		while (denominator !== 0) {
		  let temp = denominator;
		  denominator = numerator % denominator;
		  numerator = temp;
		}
		return numerator;
	}

	#simplify(numerator, denominator) {
		let gcd = this.#gcd(numerator, denominator);
		if (gcd > 1) {
			numerator = numerator / gcd;
			denominator = denominator / gcd;
		}
		return [numerator, denominator];
	}
}