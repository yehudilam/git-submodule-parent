module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 0,
      },
    },
  ],
};
