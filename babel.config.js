module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 按需导入vant
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
