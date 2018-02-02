'use strict';

var react2angular = require('react2angular');

angular.module('demoApp', []);
.component('renderImage', react2angular(RenderImage, ['imageUrl']));
