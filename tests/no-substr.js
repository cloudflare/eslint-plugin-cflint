'use strict';
var rule = require('../rules/no-substr');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('no-substr', rule, {
  valid: [{
    code: '"testing".substring(1)'
  }],
  invalid: [{
    code: '"testing".substr(0, 4)',
    errors: [{
      message: 'substr exists for compatibility and shouldn\'t be used in new code'
    }]
  }]
});

