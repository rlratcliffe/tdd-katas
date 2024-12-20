import Fraction from "../src/fraction.js";
import { assert, expect } from 'chai';

describe('Handle errors', function() {
    it('Fraction plus non fraction throws type error', function(done) {
        assert.throws(() => new Fraction(0).plus(0), TypeError);
        done();
    });

    it('Fraction times non fraction throws type error', function(done) {
        assert.throws(() => new Fraction(0).multiply(0), TypeError);
        done();
    });

    it("Fraction can't have a denominator as 0", function(done) {
        assert.throws(() => new Fraction(1,0), TypeError);
        done();
    });
});