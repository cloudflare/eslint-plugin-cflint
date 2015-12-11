/**
 * @fileoverview Rule to flag usage of String.prototype.substr.
 * @author Terin Stock
 */
'use strict';

module.exports = function (context) {
  return {
    MemberExpression: function (node) {
      var objectType = node.object.type;
      var propertyName = node.property.name;

      if (objectType === 'Literal' && propertyName === 'substr') {
        context.report(node, '{{property}} exists for compatibility and shouldn\'t be used in new code', {
          property: propertyName
        });
      }
    }
  };
};
