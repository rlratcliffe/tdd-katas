import Fraction from "../src/fraction.js";
import { expect } from 'chai';


describe('Get numerator', function() {
    it('Numerator should be correct value', function(done) {
        let fraction = new Fraction(1,1);
        expect(fraction.getNumerator()).to.equal(1);
        done();
    });
});