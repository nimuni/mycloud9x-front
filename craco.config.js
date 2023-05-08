const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@parts': path.resolve(__dirname, 'src/components/parts'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@slice': path.resolve(__dirname, 'src/redux/slice'),
      '@axios': path.resolve(__dirname, 'src/js/axios'),
    },
  },
};