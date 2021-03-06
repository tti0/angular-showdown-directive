/*
 * angular-showdown-directive v0.4.0
 * tti0
 * https://github.com/tti0/angular-showdown-directive
 */

"use strict";

angular.module("tti0.angular-showdown-directive", ["ngSanitize"]).
  provider("markdownConverter", function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new showdown.Converter(opts);
      }
    };
  }).
  directive("showdown", ["$sanitize", "markdownConverter", function ($sanitize, markdownConverter) {
    return {
      restrict: "AE",
      link: function (scope, element, attrs) {
        if (attrs.showdown) {
          scope.$watch(attrs.showdown, function (newVal) {
            var html = newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : "";
            element.html(html);
          });
        } else {
          var html = $sanitize(markdownConverter.makeHtml(element.text()));
          element.html(html);
        }
      }
    };
  }]);
