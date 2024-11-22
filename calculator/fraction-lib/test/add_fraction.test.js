import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Add fractions', function() {
    describe('Get numerator', function() {
        it('Numerator should be correct value', function(done) {
            let fraction = new Fraction(1,1);
            expect(fraction.getNumerator()).to.equal(1);
            done();
        });
    });

    describe('No simplification', function() {
        it('Same denominator', function(done) {
            expect(new Fraction(1,3).plus(new Fraction(1,3)).equals(new Fraction(2,3))).to.be.true;
            done();
        });

        it('Different denominator', function(done) {
            expect(new Fraction(1,3).plus(new Fraction(2,5)).equals(new Fraction(11,15))).to.be.true;
            done();
        });

        it('0 as numerator', function(done) {
            expect(new Fraction(0,2).plus(new Fraction(1,2)).equals(new Fraction(1,2))).to.be.true;
            done();
        });
    });

    describe('Simplification', function() {
        it('Same denominator', function(done) {
            expect(new Fraction(1,8).plus(new Fraction(3,8)).equals(new Fraction(1,2))).to.be.true;
            done();
        });

        it('Different denominator, multiply only one side', function(done) {
            expect(new Fraction(1,3).plus(new Fraction(1,6)).equals(new Fraction(1,2))).to.be.true;
            done();
        });

        it('Two fractions equal whole number', function(done) {
            expect(new Fraction(1,2).plus(new Fraction(1,2)).equals(new Fraction(1,1))).to.be.true;
            done();
        });
    });

    describe('Numbers as strings are handled', function() {
        it('Both numerator and denominator as strings', function(done) {
            expect(new Fraction("1","3").plus(new Fraction("1","3")).equals(new Fraction(2,3))).to.be.true;
            done();
        });
    });

    describe('Print fraction', function() {
        it('1/3', function(done) {
            expect(new Fraction(1,3).toString()).equals("1/3")
            done();
        });
    });
});