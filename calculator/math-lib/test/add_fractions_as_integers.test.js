import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions as integers', function() {
    it('Zero plus zero equals zero', function(done) {
        let sum = new Fraction(0).plus(new Fraction(0));
        expect(sum.equals(new Fraction(0))).to.be.true;
        done();
    });

    it('Non zero plus zero whole number equals non zero whole number', function(done) {
        let sum = new Fraction(1).plus(new Fraction(0));
        expect(sum.equals(new Fraction(1))).to.be.true;
        done();
    });

    it('Zero plus non zero whole number equals non zero whole number', function(done) {
        let sum = new Fraction(0).plus(new Fraction(3));
        expect(sum.equals(new Fraction(3))).to.be.true;
        done();
    });

    it('Positive non zero whole numbers and positive non zero whole number', function(done) {
        let sum = new Fraction(4).plus(new Fraction(5));
        expect(sum.equals(new Fraction(9))).to.be.true;
        done();
    });

    it('Negative whole number plus positive whole number equals negative whole number', function(done) {
        let sum = new Fraction(-7).plus(new Fraction(2));
        expect(sum.equals(new Fraction(-5))).to.be.true;
        done();
    });

    it('Positive whole number plus negative whole number equals positive whole number', function(done) {
        let sum = new Fraction(5).plus(new Fraction(-3));
        expect(sum.equals(new Fraction(2))).to.be.true;
        done();
    });

    it('Negative whole njumber plus negative whole number equals negative whole number', function(done) {
        let sum = new Fraction(-12).plus(new Fraction(-4));
        expect(sum.equals(new Fraction(-16))).to.be.true;
        done();
    });

    it('Negative whole number plus negation equals zero', function(done) {
        let sum = new Fraction(-7).plus(new Fraction(7));
        expect(sum.equals(new Fraction(0))).to.be.true;
        done();
    });
});