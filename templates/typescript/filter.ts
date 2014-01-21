/// <reference path="../app.ts" />

'use strict';

module <%= scriptAppName %> {
  export function <%= cameledName %>FilterFactory(): Function {
    return <%= cameledName %>Filter;
  }

  function <%= cameledName %>Filter(input, param) {
  //usage {{"text" | <%= cameledName %>: "suffix"}}
  //returns '<%= cameledName %> filter: text suffix'
    return '<%= cameledName %> filter: ' + input + (param ? ' ' + param: '');
  }
}

/**
 * @ngdoc filter
 * @name <%= scriptAppName %>.filter:<%= cameledName %>
 * @function
 * @description
 * # <%= cameledName %>
 * Filter to change your value.
 */
angular.module('<%= scriptAppName %>')
  .filter('<%= cameledName %>', <%= scriptAppName %>.<%= cameledName %>FilterFactory);
