(function(angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define('angular-file-upload', ['angular'], function(angular) {
            if(angular) {
              return factory(angular);
            } else {
              define('angular-file-upload', ['angularAMD'], function() {
                return factory(angular);
              });
            }
        });
    } else {
        return factory(angular);
    }
}(typeof angular === 'undefined' ? null : angular, function(angular) {

var module = angular.module('angularFileUpload', []);
