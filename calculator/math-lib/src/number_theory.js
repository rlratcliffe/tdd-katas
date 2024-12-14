export default class NumberTheory {
    static gcd(a, b) {
        if (b === 0) {
            return Math.abs(a);
        }
        return NumberTheory.gcd(b, a % b);
    }
}