const path = require('path');

module.exports = sourceMD => {
  // Core MD
  sourceMD('commonComponents/**/*.md', 'html');
};