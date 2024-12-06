import Fraction from "../src/fraction.js";
import { expect } from 'chai';

// References: 
// JS strict equality https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// and Java equality https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-
describe('Fractions are equal', function() {
    it('Null isn\'t equal', function(done) {
        expect(new Fraction(1,5).equals(null)).to.be.false;
        done();
    });

    it("Not a fraction isn't equal", function(done) {
        expect(new Fraction(1,2).equals(new Object)).to.be.false;
        done();
    });

    it("NaN", function(done) {
        expect(new Fraction(1,5).equals(NaN)).to.be.false;
        done();
    });

    it("Undefined not equal", function(done) {
        expect(new Fraction(1,5).equals(undefined)).to.be.false;
        done();
    });

});