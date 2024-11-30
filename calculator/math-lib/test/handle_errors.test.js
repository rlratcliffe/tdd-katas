import Fraction from "../src/fraction.js";
import { assert, expect } from 'chai';

describe('Handle errors', function() {
    it('Zero fraction plus zero integer throws error', function(done) {
        assert.throws(() => new Fraction(0).plus(0), TypeError);
        done();
    });
});