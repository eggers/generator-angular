/// <reference path="../app.ts" />

'use strict';

module <%= scriptAppName %> {
  export class <%= classedName %> {
    awesomeThings:any[] = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
}

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Service in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
  .service('<%= cameledName %>', <%= scriptAppName %>.<%= classedName %>);
