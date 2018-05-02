(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

},{}],2:[function(require,module,exports){
'use strict';

var _calc = require('./blocks/calc');

var _calc2 = _interopRequireDefault(_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 3;

var hello = function hello() {
  return console.log('helo, world');
};

console.log(a);
console.log(hello());
console.log((0, _calc2.default)(1, 4));

},{"./blocks/calc":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9ibG9ja3MvY2FsYy5qcyIsInNyYy9zY3JpcHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSxJQUFNLE1BQU0sU0FBTixHQUFNLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxTQUFVLElBQUksQ0FBZDtBQUFBLENBQVo7O2tCQUVlLEc7Ozs7O0FDRmY7Ozs7OztBQUVBLElBQU0sSUFBSSxDQUFWOztBQUVBLElBQU0sUUFBUSxTQUFSLEtBQVE7QUFBQSxTQUFNLFFBQVEsR0FBUixDQUFZLGFBQVosQ0FBTjtBQUFBLENBQWQ7O0FBRUEsUUFBUSxHQUFSLENBQVksQ0FBWjtBQUNBLFFBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSxvQkFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3Qgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xuXG5leHBvcnQgZGVmYXVsdCBzdW07XG4iLCJpbXBvcnQgc3VtIGZyb20gJy4vYmxvY2tzL2NhbGMnO1xuXG5jb25zdCBhID0gMztcblxuY29uc3QgaGVsbG8gPSAoKSA9PiBjb25zb2xlLmxvZygnaGVsbywgd29ybGQnKTtcblxuY29uc29sZS5sb2coYSk7XG5jb25zb2xlLmxvZyhoZWxsbygpKTtcbmNvbnNvbGUubG9nKHN1bSgxLCA0KSk7XG4iXX0=
