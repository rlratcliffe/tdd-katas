import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions', function() {
    it('Add two fractions with positive common denominator', function(done) {
        let sum = new Fraction(1,5).plus(new Fraction(2,5))
        expect(sum.equals(new Fraction(3,5))).to.be.true;
        done();
    });

    it("Add two fractions with positive different denominators with easy least common multiple", function(done) {
        let sum = new Fraction(1,3).plus(new Fraction(1,4));
        expect(sum.equals(new Fraction(7,12))).to.be.true;
        done();
    });

    it("Additional case of add two fractions with positive different denominators with easy least common multiple", function(done) {
        let sum = new Fraction(1,2).plus(new Fraction(1,3));
        expect(sum.equals(new Fraction(5,6))).to.be.true;
        done();
    });

    it("Add two fractions with reduce to whole number", function(done) {
        let sum = new Fraction(1,3).plus(new Fraction(2,3));
        expect(sum.equals(new Fraction(1))).to.be.true;
        done();
    });

    it("Add two fractions where one denominator is a multiple of the other", function(done) {
        expect(new Fraction(3,4).plus(new Fraction(5,8)).equals(new Fraction(11,8))).to.be.true;
        done();
    });

    it("Additional case of add two fractions with positive common denominators with more complicated common multiple", function(done) {
        expect(new Fraction(1,6).plus(new Fraction(4,9)).equals(new Fraction(11,18))).to.be.true;
        done();
    });

    it("Add two fractions and reduce when denominators are same", function(done) {
        expect(new Fraction(3,4).plus(new Fraction(3,4)).equals(new Fraction(3,2))).to.be.true;
        done();
    });

    it("Add two negative numerator fractions and reduce", function(done) {
        expect(new Fraction(-1,4).plus(new Fraction(3,4)).equals(new Fraction(1,2))).to.be.true;
        expect(new Fraction(3,8).plus(new Fraction(-1,2)).equals(new Fraction(-1,8))).to.be.true;
        done();
    });

    it("Add two negative fractions with negative signs in numerator and denominator", function(done) {
        expect(new Fraction(1,-4).plus(new Fraction(-3,-4)).equals(new Fraction(1,2))).to.be.true;
        done();
    });

});