module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      commonjs: true,	
      es6: true,	
      jquery: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      '@nuxtjs',
      'prettier',
      'prettier/vue',
      'plugin:prettier/recommended',
      'plugin:nuxt/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
      semi: [2, 'never'],
      'no-console': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'prettier/prettier': ['error', { semi: false }],
      'vue/comment-directive': 0,
      "vue/valid-template-root": "off"
    },
    globals: {
      "$": false,
    }
  }
  