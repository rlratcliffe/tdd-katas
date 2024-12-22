import Fraction from "../src/fraction.js";
import { expect } from 'chai';

describe("toString", function() {
    it("toString of fraction matches value of Fraction object", function(done) {
        expect(new Fraction(1,3).toString()).to.equal("1/3");
        done();
    });

});