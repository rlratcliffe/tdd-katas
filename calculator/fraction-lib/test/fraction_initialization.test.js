import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Negatives can only be in numerators', function() {
    it('Negative numerator', function(done) {
        let fraction = new Fraction(-1,2);
        expect(fraction.getNumerator()).to.equal(-1);
        done();
    });
});