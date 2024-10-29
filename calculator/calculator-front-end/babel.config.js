module.exports = {
  presets: [
    'babel-preset-expo',  // If you're using Expo
    '@babel/preset-env',  // For modern JavaScript support
    '@babel/preset-react', // If you're using React/React Native
    '@babel/preset-typescript' // If you use TypeScript
  ],
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ]
};