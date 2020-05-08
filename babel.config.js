module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "transform-react-pug",
    ["@babel/plugin-proposal-decorators", { "legacy" : true }]
  ]
};
