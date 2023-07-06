module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
    [
      'transform-inline-environment-variables',
      {
        include: 'NODE_ENV',
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
  ];
  //change to 'production' to check if this is working in 'development' mode
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', {exclude: ['error', 'warn']}]);
  }
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
