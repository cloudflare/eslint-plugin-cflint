'use strict';
var rule = require('../rules/no-this-assignment');
var RuleTester = require('eslint').RuleTester;

var MESSAGE = 'this is assigned to that';

var ruleTester = new RuleTester();
ruleTester.run('no-this-assignment', rule, {
  valid: [{
    code: 'this.doSomething("out-of-this-world")'
  }],
  invalid: [{
    code: 'var that = this',
    errors: [{
      message: MESSAGE
    }]
  }, {
    code: 'var that; that = this',
    errors: [{
      message: MESSAGE
    }]
  }]
});

