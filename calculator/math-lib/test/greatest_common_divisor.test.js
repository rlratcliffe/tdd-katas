import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe("Greatest common divisor", function() {
    it("One and one", function(done) {
        expect(gcd(1, 1)).to.be.equal(1);
        done();
    });
});

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}