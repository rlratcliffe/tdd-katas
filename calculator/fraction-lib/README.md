# Fraction-Lib

- Addition to start
- Don't convert to floating point
- Improper fractions only

## Test List 
- ~~same denominator and simplification: 1/8 + 3/8 = 1/2~~
- ~~same denominator no simplification: 1/3 + 1/3 = 2/3 (simplest?)~~
- different denominator, multiply only one side, simplify: 1/3 + 1/6 = 1/2
- different denominator, multiply both sides 1/3 + 1/5
- ~~different denominator no simplify ~~
- ~~zero numerator~~
- ~~zero denominator~~ (not actually valid math so not doing)
- whole number + fraction
- negative first fraction
- both fractions negative
- negative second fraction
- whole number 1/2 + 1/2 = 1
- ~~convert or throw error if strings are passed as input~~

- parse string fraction?
- fractions equal each other 1/2 = 4/8 = 89/178 = 56/112

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