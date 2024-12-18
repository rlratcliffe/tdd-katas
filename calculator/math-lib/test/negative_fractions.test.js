import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Negative fractions', function() {
    it("Negative in numerator and denominator equals positive fraction", function(done) {
        expect(new Fraction(1,2).equals(new Fraction(-1,-2))).to.be.true;
        done();
    });

    it("Either numerator or denominator can be negative", function(done) {
        expect(new Fraction(-1,2).equals(new Fraction(1, -2))).to.be.true;
        expect(new Fraction(1,-2).equals(new Fraction(-1, 2))).to.be.true;
        done();
    });
});