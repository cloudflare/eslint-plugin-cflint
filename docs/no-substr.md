# Disallow substr (no-substr)

JavaScript has two String methods that look very similar: [`substr`][MDN-substr] and [`substring`][MDN-substring].
The former takes an offset and a length, while the latter takes two offsets.
As the method names do not adequately describe the differences of each method, in addition to the non-normative nature of `substr`, we reduce confusion by warning against `substr` usage.

## Rule Details

The following patterns are considered warnings:

```javascript
var _ = 'literal'.substr(2);
var _ = 'literal'.substr(2, 3);
```

The following patterns are not considered warning:

```
var _ = 'literal'.substring(2);
var _ = 'literal'.substring(2, 5);
```

## When Not To Use It

If your code contains many calls to `substr`, if you don't care that it's name is confusing with `substring`, or if you don't care about using non-normative JavaScript features.

## Version
This rule was introduced in eslint-plugin-cflint 1.0.0

## Resources
* [Rule source](https://github.com/cloudflare/eslint-plugin-cflint/tree/master/rules/no-substr.js)
* [Documentation source](https://github.com/cloudflare/eslint-plugin-cflint/tree/master/docs/no-substr.md)

[MDN-substr]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
[MDN-substring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

