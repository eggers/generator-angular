/// <reference path="../app.ts" />

'use strict';

module <%= scriptAppName %> {
  export function <%= cameledName %>Factory() {
    return new <%= classedName %>(42);
  }

  export class <%= classedName %> {

    constructor (private meaningOfLife) {
    }

    someMethod() {
      return this.meaningOfLife;
    }
  }
}

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Factory in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
  .factory('<%= cameledName %>', <%= scriptAppName %>.<%= cameledName %>Factory);
