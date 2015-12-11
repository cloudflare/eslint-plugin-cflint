'use strict';

module.exports = {
  rules: {
    'no-substr': require('./rules/no-substr'),
    'no-this-assignment': require('./rules/no-this-assignment')
  },
  rulesConfig: {
    'no-substr': 2,
    'no-this-assignment': 2
  }
};
