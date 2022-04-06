module.exports = {
  plugins: [
    'autoprefixer',
    [
      'postcss-font-magician',
      {
        variants: {
          'DM Serif Display': {
            '400 regular': ['woff', 'woof2', 'eot'],
          },
          Karla: {
            '400 regular': ['woff', 'woof2', 'eot'],
            '700 bold': ['woff', 'woof2', 'eot'],
          },
        },
      },
    ],
  ],
};
