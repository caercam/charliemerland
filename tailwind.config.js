module.exports = {
  content: [
      './*.html',
      './**/*.html',
      './src/css/*.css',
      './src/js/*.js'
  ],
  theme: {
      extend: {
          fontFamily: {
              'sans': ['Barlow', 'sans-serif']
          },
          fontSize: {
              'xxs': '.5rem',
          },
      }
  },
  plugins: []
};