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
 
    // These affect the logic itself and the tests and I'm unsure if they should be enabled
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