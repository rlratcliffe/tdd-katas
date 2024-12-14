import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe("ReduceFractionTest", function() {
    it("Already in lowest terms", function(done) {
        expect(new Fraction(3,4).equals(new Fraction(3,4))).to.be.true;
        done();
    });

    // Wwaiting to implement gcd
    xit("Reduce to not whole number", function(done) {
        expect(new Fraction(4,8)).to.be.equal(new Fraction(1,2));
        done();
    });
});