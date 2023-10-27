const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733', // Change this color to your desired scrollbar color
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'html': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${theme('colors.primary')} ${theme('colors.gray-300')}`,
        },
      });
    },
  ],
  darkMode: 'class',
};
