'use strict';

var googlemaps = angular.module('googlemaps', ['adaptive.googlemaps']);

//this was used to whitelist the 'geo' and 'maps' URIs so that angular will accept them.
//if the url sanitization is ignored, angularJS will stick 'unsafe:' as a prefix to the geo and maps URIs.
googlemaps.config(function($compileProvider){
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|geo|maps):/);
      //For older versions of AngularJS, use urlSanitizationWhitelist instead of aHrefSanitizationWhitelist
    });
