import Fraction from "../src/fraction.js";
import { expect } from 'chai';

// References: 
// JS strict equality https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// and Java equality https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-
describe('Fractions are equal', function() {
    it('Fraction not equal to null', function(done) {
        expect(new Fraction(1,5).equals(null)).to.be.false;
        done();
    });

    it("Fraction not equal to object", function(done) {
        expect(new Fraction(1,2).equals(new Object)).to.be.false;
        done();
    });

    it("Fraction not equal to NaN", function(done) {
        expect(new Fraction(1,5).equals(NaN)).to.be.false;
        done();
    });

    it("Fraction not equal to undefined", function(done) {
        expect(new Fraction(1,5).equals(undefined)).to.be.false;
        done();
    });

    it("Fraction equals same fraction object", function(done) {
        let fraction = new Fraction(1,3);
        expect(fraction.equals(fraction)).to.be.true;
        done();
    });

    it("Fraction equals same value different object", function(done) {
        expect(new Fraction(1,3).equals(new Fraction(1,3))).to.be.true;
        done();
    });

    it("Fractions not equal when denominators are different but numerators are same", function(done) {
        expect(new Fraction(1,3).equals(new Fraction(1,4))).to.be.false;
        done();
    });

    it("Fractions not equal when numerators are different but denominators are same", function(done) {
        expect(new Fraction(2,3).equals(new Fraction(1,3))).to.be.false;
        done();
    });

    it("Fractions not equal when numerators and denominators are different", function(done) {
        expect(new Fraction(1,3).equals(new Fraction(2,4))).to.be.false;
        done();
    });

    it("Whole number equals same number", function(done) {
        expect(new Fraction(2).equals(new Fraction(2))).to.be.true;
        done();
    });

    it("Whole number not equal to different whole number", function(done) {
        expect(new Fraction(1).equals(new Fraction(2))).to.be.false;
        done();
    });

    it("Fraction not equal to non-Fraction whole number", function(done) {
        expect(new Fraction(1).equals(1)).to.be.false;
        done();
    });

    it("Denominator should be 1 when not specified", function(done) {
        expect(new Fraction(3).equals(new Fraction(3,1))).to.be.true;
        done();
    });

    it("Negative denominator", function(done) {
        expect(new Fraction(1,2).equals(new Fraction(-1,-2))).to.be.true;
        expect(new Fraction(-1,2).equals(new Fraction(1, -2))).to.be.true;
        done();
    });
});