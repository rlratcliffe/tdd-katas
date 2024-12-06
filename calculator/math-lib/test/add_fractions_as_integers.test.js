import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions as integers', function() {
    it('Zero plus zero outputs zero', function(done) {
        let sum = new Fraction(0).plus(new Fraction(0));
        expect(sum.intValue()).to.equal(0)
        done();
    });

    it('Non zero plus zero outputs non zero', function(done) {
        let sum = new Fraction(1).plus(new Fraction(0));
        expect(sum.intValue()).to.equal(1);
        done();
    });

    it('Zero plus non zero outputs non zero', function(done) {
        let sum = new Fraction(0).plus(new Fraction(3));
        expect(sum.intValue()).to.equal(3);
        done();
    });

    it('Positive non zero inputs and positive non zero outputs', function(done) {
        let sum = new Fraction(4).plus(new Fraction(5));
        expect(sum.intValue()).to.equal(9);
        done();
    });

    it('Negative plus positive outputs negative', function(done) {
        let sum = new Fraction(-7).plus(new Fraction(2));
        expect(sum.intValue()).to.equal(-5);
        done();
    });

    it('Positive plus negative equals positive', function(done) {
        let sum = new Fraction(5).plus(new Fraction(-3));
        expect(sum.intValue()).to.equal(2);
        done();
    });

    it('Negative plus negative equals negative', function(done) {
        let sum = new Fraction(-12).plus(new Fraction(-4));
        expect(sum.intValue()).to.equal(-16)
        done();
    });

    it('Negative plus postive outputs zero', function(done) {
        let sum = new Fraction(-7).plus(new Fraction(7));
        expect(sum.intValue()).to.equal(0);
        done();
    });
});