import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Negatives can only be in numerators', function() {
    it('Negative numerator', function(done) {
        let fraction = new Fraction(-1,2);
        expect(fraction.getNumerator()).to.equal(-1);
        expect(fraction.getDenominator()).to.equal(2);
        done();
    });

    it('Negative denominator', function(done) {
        let fraction = new Fraction(1,-2);
        expect(fraction.getNumerator()).to.equal(-1);
        expect(fraction.getDenominator()).to.equal(2);
        done();
    });

    it('Negative numerator and negative denominator', function(done) {
        let fraction = new Fraction(-1,-2);
        expect(fraction.getNumerator()).to.equal(1);
        expect(fraction.getDenominator()).to.equal(2);
        done();
    });
});