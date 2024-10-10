# Fraction-Lib

## Test List
empty

## How to Use this Package
NPM packages generally can be used with `npm link` but for React Native, it appears symlinks don't work.

In library project:
`npm pack`

Then copy the path to the `.tgz` file.

In react native project:
`npm install <path>`