import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe('Adding fractions', function() {
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

    // it('', function(done) {

    //     done();
    // });
});