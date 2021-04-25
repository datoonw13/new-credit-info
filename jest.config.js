module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [],
  setupFilesAfterEnv: [],
  testRegex: ['(/tests/unit/.*|(\\.|/)(test|spec))\\.[jt]sx?$'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
