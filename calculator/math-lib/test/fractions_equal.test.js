import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Fractions are equal', function() {

    it('Null isn\'t equal', function(done) {
        expect(new Fraction(1,5).equals(null)).to.be.false;
        done();
    });
});