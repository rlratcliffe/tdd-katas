import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe("ReduceFractionTest", function() {
    it("Already in lowest terms", function(done) {
        expect(new Fraction(3,4).equals(new Fraction(3,4))).to.be.true;
        done();
    });

    it("Reduce to not whole number", function(done) {
        expect(new Fraction(4,8).equals(new Fraction(1,2))).to.be.true;
        done();
    });

    it("Reduce to whole number", function(done) {
        expect(new Fraction(6).equals(new Fraction(24,4))).to.be.true;
        done();
    });
});