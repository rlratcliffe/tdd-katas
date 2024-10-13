# Fraction-Lib

## Test List
TBD

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