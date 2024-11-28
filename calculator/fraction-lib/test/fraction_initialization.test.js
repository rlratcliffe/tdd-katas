import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Negatives can only be in numerators', function() {
    // Instead of testing adding fractions with negatives in different places
    // Testing that initialization of negative fractions is normalized so that isn't an issue
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

// TODO: move simplifying to entry point
describe('All fractions should be simplified', function() {
    xit('Custom equals, simplified first example', function(done) {
        expect(new Fraction(1,2).equals(new Fraction(4,8))).to.be.true;
        done();
    });

    xit('Custom equals, simplified second example', function(done) {
        expect(new Fraction(1,2).equals(new Fraction(89,178))).to.be.true;
        done();
    });
    
    xit('Custom equals, simplified third example', function(done) {
        expect(new Fraction(1,2).equals(new Fraction(56,112))).to.be.true;
        done();
    });
});