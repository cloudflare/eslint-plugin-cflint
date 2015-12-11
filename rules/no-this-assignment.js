/**
 * @fileoverview Rule to flag assignment of `this` to other variable names.
 * @author Terin Stock
 */
'use strict';

var MESSAGE = 'this is assigned to {{name}}';

module.exports = function (context) {
  return {
    VariableDeclaration: function (node) {
      node.declarations.forEach(function (declaration) {
        if (declaration.init && declaration.init.type === 'ThisExpression') {
          context.report(declaration, MESSAGE, {
            name: declaration.id.name
          });
        }
      });
    },
    AssignmentExpression: function (node) {
      if (node.right.type === 'ThisExpression') {
        context.report(node, MESSAGE, {
          name: node.left.name
        });
      }
    }
  };
};
