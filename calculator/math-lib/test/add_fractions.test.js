import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions', function() {

    it('Add positive common denominator fractions', function(done) {
        let sum = new Fraction(1,5).plus(new Fraction(2,5))
        expect(sum.equals(new Fraction(3,5))).to.be.true;
        done();
    });
});