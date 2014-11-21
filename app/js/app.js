'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/batches', {
        templateUrl: 'partials/phone-list.html',
        controller: 'BatchesCtrl'
      }).
      when('/reports', {
        templateUrl: 'partials/hack.html',
        controller: 'ReportsCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/batches'
      });
  }]);
