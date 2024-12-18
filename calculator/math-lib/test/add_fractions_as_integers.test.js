import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions as integers', function() {
    it('Zero as integer plus zero as integer equals zero as integer', function(done) {
        let sum = new Fraction(0).plus(new Fraction(0));
        expect(sum.equals(new Fraction(0))).to.be.true;
        done();
    });

    it('Non zero integer plus zero integer equals non zero integer', function(done) {
        let sum = new Fraction(1).plus(new Fraction(0));
        expect(sum.equals(new Fraction(1))).to.be.true;
        done();
    });

    it('Zero as integer plus non zero integer equals non zero integer', function(done) {
        let sum = new Fraction(0).plus(new Fraction(3));
        expect(sum.equals(new Fraction(3))).to.be.true;
        done();
    });

    it('Positive non zero integers and positive non zero integer', function(done) {
        let sum = new Fraction(4).plus(new Fraction(5));
        expect(sum.equals(new Fraction(9))).to.be.true;
        done();
    });

    it('Negative integer plus different positive integer equals negative integer', function(done) {
        let sum = new Fraction(-7).plus(new Fraction(2));
        expect(sum.equals(new Fraction(-5))).to.be.true;
        done();
    });

    it('Positive integer plus different negative integer equals positive integer', function(done) {
        let sum = new Fraction(5).plus(new Fraction(-3));
        expect(sum.equals(new Fraction(2))).to.be.true;
        done();
    });

    it('Negative integer plus different negative integer equals negative integer', function(done) {
        let sum = new Fraction(-12).plus(new Fraction(-4));
        expect(sum.equals(new Fraction(-16))).to.be.true;
        done();
    });

    it('Negative integer plus its negation equals zero', function(done) {
        let sum = new Fraction(-7).plus(new Fraction(7));
        expect(sum.equals(new Fraction(0))).to.be.true;
        done();
    });
});