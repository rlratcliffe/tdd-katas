export default class NumberTheory {
    // Contract: GCD never returns 0
    static gcd(a, b) {
        if (b === 0) {
            return Math.abs(a);
        }
        return NumberTheory.gcd(b, a % b);
    }
}