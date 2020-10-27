/* eslint-disable global-require, import/no-unresolved, import/no-extraneous-dependencies, no-param-reassign */
const { parsers } = require('prettier/parser-html');

const parser = parsers.html;

module.exports = {
  options: {
    formatTrueValueAttribute: {
      type: 'boolean',
      category: 'Global',
      default: true,
      description: '格式化 true 值的属性',
    },
  },
  parsers: {
    html: {
      ...parser,
      preprocess(text, options) {
        if (parser.preprocess) {
          text = parser.preprocess(text, options);
        }
        if (options.formatTrueValueAttribute) {
          text = text.replace(/=["']{{true}}["']/g, '');
        }
        return text;
      },
    },
  },
};
