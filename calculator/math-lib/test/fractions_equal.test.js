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

    it("Same fraction is equal", function(done) {
        let fraction = new Fraction(1,3);
        expect(fraction.equals(fraction)).to.be.true;
        done();
    });

    it("Same fraction different object is equal", function(done) {
        expect(new Fraction(1,3).equals(new Fraction(1,3))).to.be.true;
        done();
    });

    it("Different denominators but same numerators", function(done) {
        expect(new Fraction(1,3).equals(new Fraction(1,4))).to.be.false;
        done();
    });

    it("Different numerators but same denominators", function(done) {
        expect(new Fraction(2,3).equals(new Fraction(1,3))).to.be.false;
        done();
    });

    it("Whole numbers", function(done) {
        expect(new Fraction(2).equals(new Fraction(2))).to.be.true;
        done();
    });

    it("Whole numbers different are not equal", function(done) {
        expect(new Fraction(1).equals(new Fraction(2))).to.be.false;
        done();
    });

    it("Compare fraction and int", function(done) {
        expect(new Fraction(1).equals(1)).to.be.false;
        done();
    });
});