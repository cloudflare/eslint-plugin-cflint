# Disallow assignment of this (no-this-assignment)

By assigning `this` to a name, it is possible to capture the current execution context.
This proves to be difficult with nested contexts, and encourages code that is more difficult to refactor.
The current execution context can be bound to subsequent functions via future language features or function binding.

## Rule Details

The following patterns are considered warnings:

```javascript
var self = this;

var that;
that = this;
```

The following patterns are not considered warning:

```
[].forEach(function() {}, this);

jQuery('li').click(function(evt) {
  this.setFoo(evt.bar);
}.bind(this));

jQuery('li').click((evt) => {
  this.setFoo(evt.bar);
});
```

## When Not To Use It

If you are comfortable with your code having captured context.

## Related Rules
* [consistent-this](http://eslint.org/docs/rules/consistent-this)

## Version
This rule was introduced in eslint-plugin-cflint 1.0.0

## Resources
* [Rule source](https://github.com/cloudflare/eslint-plugin-cflint/tree/master/rules/no-this-assignment.js)
* [Documentation source](https://github.com/cloudflare/eslint-plugin-cflint/tree/master/docs/no-this-assignment.md)

