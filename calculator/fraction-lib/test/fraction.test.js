import Fraction from "../src/fraction.js";
import { expect } from 'chai';


describe('Get numerator', function() {
    it('Numerator should be correct value', function(done) {
        let fraction = new Fraction(1,1);
        expect(fraction.getNumerator()).to.equal(1);
        done();
    });
});

// Can't override equals in JS so this will always fail
xdescribe('Same fractions are equal', function() {
    it('1/3 = 1/3', function(done) {
        expect(new Fraction(1,3) ==  new Fraction(1,3)).to.be.true;
        done();
    });
});

describe('Same fractions are equal, custom equals', function() {
    it('1/3 = 1/3', function(done) {
        expect(new Fraction(1,3).equals(new Fraction(1,3))).to.be.true;
        done();
    });
});

describe('Same denominator, no simplification', function() {
    it('1/3 + 1/3 = 2/3', function(done) {
        expect(new Fraction(1,3).plus(new Fraction(1,3)).equals(new Fraction(2,3)))
        done();
    });
});