import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Multiplying fractions as integers', function() {
    it('Zero as integer times zero as integer equals zero as integer', function(done) {
        let sum = new Fraction(0).multiply(new Fraction(0));
        expect(sum.equals(new Fraction(0))).to.be.true;
        done();
    });
});