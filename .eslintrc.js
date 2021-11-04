module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:vue/vue3-recommended'
  ],
  globals: {
    __static: true
  },
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-alert': 0,
    'vue/no-mutating-props': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-console': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    // 'no-underscore-dangle': 0,
    // 'space-before-function-paren': 'off'
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', 'src/**/*.js'] }]
  }
}
