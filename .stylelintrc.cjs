module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/astro',
    'stylelint-config-html',
  ],
  rules: {
    'property-no-vendor-prefix': null,
  },
};
