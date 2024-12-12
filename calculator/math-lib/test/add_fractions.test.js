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
});