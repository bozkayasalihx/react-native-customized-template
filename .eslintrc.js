module.exports = {
    env: {
        'jest/globals': true,
    },
    root: true,
    extends: ['@react-native-community'],
    plugins: ['jest'],
    rules: {
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'react/require-default-props': ['error'],
        'react/default-props-match-prop-types': ['error'],
        'react/sort-prop-types': ['error'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'react-hooks/exhaustive-deps': ['warn'],
    },
    settings: {
        'import/resolver': {
            'babel-module': {},
        },
    },
};
