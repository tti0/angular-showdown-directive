
# angular-showdown-directive

A very simple AngularJS 1.x directive to load Markdown and display as HTML, using Showdown.

Based on the excellent https://github.com/btford/angular-markdown-directive, but updated for newer versions of Showdown, and with a few bug fixes.

Overview of operation:

+ Give the directive Markdown code
+ Markdown code is converted to HTML
+ HTML is sanitized, to guard against XSS attacks
+ HTML is injected into the view

## Instructions

### Prerequisites

The following libraries must be included in your project for this directive to work properly (`<script>` tags in the main HTML file of your project work fine):

+ AngularJS (**1.x**, 1.7.5+) - https://github.com/angular/angular.js
+ angular-sanitize (same version as AngularJS) - https://github.com/angular/angular.js
+ ShowdownJS (1.9.0+) - https://github.com/showdownjs/showdown

### Usage

+ Include the file `angular-showdown-directive.min.js` from this repository in your HTML.
+ Import the module (`tti0.angular-showdown-directive`) into your AngularJS app:
```javascript
var mySite = angular.module("mySite", ["ngSanitize", "tti0.angular-showdown-directive"]);
```
+ Use the module in your HTML as follows:

```html
<!-- 1) Using the innerHTML of the element -->
<showdown>#Markdown directive *It works!*</showdown>
<!-- 2) Using scope variables (in this case, $scope.myVar) -->
<div showdown="myVar"></div>
<!-- 3) Using a file, with ng-include used as normal (https://docs.angularjs.org/api/ng/directive/ngInclude) -->
<div showdown ng-include="'myFile.md'"></div>
```

## License

This project is licensed under the terms of the MIT License. See the file https://github.com/tti0/angular-showdown-directive/blob/master/LICENSE for full terms. Hence, NO WARRANTY WHATSOEVER is provided.

This work is Copyright (c) 2018 tti0 (https://github.com/tti0).
