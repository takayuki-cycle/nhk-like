module.exports = {
  rules: { 'character-reference': false },
  parser: {
    '.astro$': '@markuplint/astro-parser',
  },
  extends: ['markuplint:recommended'],
  pretenders: [
    {
      selector: 'Head',
      as: {
        element: 'head',
      },
    },
  ],
  nodeRules: [
    {
      selector: 'head',
      rules: {
        'permitted-contents': false,
        'required-element': false,
      },
    },
  ],
};
