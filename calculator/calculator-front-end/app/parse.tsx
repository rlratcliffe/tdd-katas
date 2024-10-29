import Fraction from "@rlratcliffe/fraction-lib";


function parseInput(inputValue: String) {
    let string = inputValue;
    string = string.replace(/\s/g, "");
    let array = [...string];
    let firstFractionNumerator = array[0];
    let firstFractionDenominator = array[2];
    let secondFractionNumerator = array[4];
    let secondFractionDenominator = array[6];
    let fraction = new Fraction(firstFractionNumerator,firstFractionDenominator);
    fraction.plus(new Fraction(secondFractionNumerator, secondFractionDenominator));
    return fraction.toString();
}

export default {
    parseInput
}