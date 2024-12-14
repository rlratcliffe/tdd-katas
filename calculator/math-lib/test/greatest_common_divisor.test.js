import Fraction from "../src/fraction.js";
import { expect } from 'chai';
import  NumberTheory  from "../src/number_theory.js";

describe("Greatest common divisor", function() {
    it("Reflexive examples", function(done) {
        expect(NumberTheory.gcd(1, 1)).to.be.equal(1);
        expect(NumberTheory.gcd(2, 2)).to.be.equal(2);
        expect(NumberTheory.gcd(-1, -1)).to.be.equal(1);
        done();
    });

    it("Relatively prime", function(done) {
        expect(NumberTheory.gcd(2, 3)).to.be.equal(1);
        expect(NumberTheory.gcd(4, 7)).to.be.equal(1);
        expect(NumberTheory.gcd(-2, -3)).to.be.equal(1);
        done();
    });

    it("One is multiple of the other", function(done) {
        expect(NumberTheory.gcd(3,9)).to.be.equal(3);
        expect(NumberTheory.gcd(5,30)).to.be.equal(5);
        done();
    });

    it("Common factor", function(done) {
        expect(NumberTheory.gcd(6,8)).to.be.equal(2);
        expect(NumberTheory.gcd(49,315)).to.be.equal(7);
        expect(NumberTheory.gcd(-24,-28)).to.be.equal(4);
        done();
    });

    it("Negatives", function(done) {
        expect(NumberTheory.gcd(-24,28)).to.be.equal(4);
        expect(NumberTheory.gcd(24,-28)).to.be.equal(4);
        done();
    })
});

