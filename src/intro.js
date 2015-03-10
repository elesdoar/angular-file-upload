(function(angular, factory) {
    if (typeof define === 'function' && define.amd) {
      if(angular) {
        define('angular-file-upload', ['angular'], function(angular) {
          return factory(angular);
        });
      } else {
        define('angular-file-upload', ['angularAMD'], function() {
          return factory(angular);
        });
      }
    } else {
        return factory(angular);
    }
}(typeof angular === 'undefined' ? null : angular, function(angular) {

var module = angular.module('angularFileUpload', []);
