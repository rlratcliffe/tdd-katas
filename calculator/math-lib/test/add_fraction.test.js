import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions', function() {
    it('Zero plus zero outputs zero', function(done) {
        let sum = new Fraction(0).plus(new Fraction(0));
        expect(sum.intValue()).to.equal(0)
        done();
    });
});