import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe("Greatest common divisor", function() {
    it("Reflexive examples", function(done) {
        expect(gcd(1, 1)).to.be.equal(1);
        expect(gcd(2, 2)).to.be.equal(2);
        expect(gcd(-1, -1)).to.be.equal(-1);
        done();
    });

    it("Relatively prime", function(done) {
        expect(gcd(2, 3)).to.be.equal(1);
        expect(gcd(4, 7)).to.be.equal(1);
        expect(gcd(-2, -3)).to.be.equal(-1);
        done();
    });

    it("One is multiple of the other", function(done) {
        expect(gcd(3,9)).to.be.equal(3);
        expect(gcd(5,30)).to.be.equal(5);
        done();
    });

    it("Common factor", function(done) {
        expect(gcd(6,8)).to.be.equal(2);
        expect(gcd(49,315)).to.be.equal(7);
        expect(gcd(-24,-28)).to.be.equal(-4);
        done();
    });

    it("Negatives", function(done) {
        expect(gcd(-24,28)).to.be.equal(4);
        expect(gcd(24,-28)).to.be.equal(-4);
        done();
    })
});

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}