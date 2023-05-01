const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@slice': path.resolve(__dirname, 'src/redux/'),
      '@axios': path.resolve(__dirname, 'src/js/axios'),
    },
  },
};