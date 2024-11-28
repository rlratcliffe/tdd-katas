import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Fractions are equal', function() {
    xit('Can\'t override equals in JS so this will always fail', function(done) {
        expect(new Fraction(1,3) ==  new Fraction(1,3)).to.be.true;
        done();
    });

    it('Custom equals, same fraction', function(done) {
        expect(new Fraction(1,3).equals(new Fraction(1,3))).to.be.true;
        done();
    });

});