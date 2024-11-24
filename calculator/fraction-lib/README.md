# Fraction-Lib

- Addition to start
- Don't convert to floating point
- Improper fractions only

## Test List 
- ~~same denominator and simplification: 1/8 + 3/8 = 1/2~~
- ~~same denominator no simplification: 1/3 + 1/3 = 2/3 (simplest?)~~
- ~~different denominator, multiply only one side (simplification): 1/3 + 1/6 = 1/2~~ (added, but already covered)
- ~~different denominator, multiply both sides 1/3 + 1/5~~ (not added, already covered)
- ~~different denominator no simplify ~~
- different denominator, not an easy common denominator?
- ~~zero numerator~~
- ~~zero denominator~~ (not actually valid math so not doing)
- whole number + fraction
- ~~negative first fraction $-\frac{2}{5} + \frac{1}{5} = \frac{3}{5}$~~
- ~~both fractions negative~~
- ~~negative second fraction~~
- ~~numerator negative~~
- ~~denominator negative~~
- ~~both numerator and denominator negative, which would make the fraction positive?~~
- ~~convert or throw error if strings are passed as input~~

- parse string fraction?
- fractions equal each other 1/2 = 4/8 = 89/178 = 56/112

## Questions
- Need to have different class to represent whole numbers? Convert fractions to whole numbers? 1/1 -> 1?
- If I've implemented a custom equals and the custom equals that also simplifies. Using the same simplify in the equals and in plus, will incorrectly show a fraction as being simplified when it hasn't.
- Related to the above, moving the equals class helps with this a bit, but is there a way to document that certain tests should be more prioritized because fixing those tests might fix issues in aother test? Or is that the wrong problem.
- Should I be writing my test lists by hand instead?
- Are there mental "tests" to ensure I'm doing things correctly?
- Making mistakes like implementing simplifies in the wrong place, or implementing equals too early might be good examples of how to recover from them
- How do you decide whether method should be private or not, and whether it should be tested by itself or not

## How to Use this Package

### Locally
NPM packages generally can be used with `npm link` but for React Native, it appears symlinks don't work.

In library project:
`npm pack`

Then copy the path to the `.tgz` file to your clipboard.

In react native project:
`npm install <path>`

### With GitHub
Identify where your .nprmrc file is by running `npm config get userconfig` and edit it similar to this 

```
@rlratcliffe:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<PAT>
always-auth=true

```