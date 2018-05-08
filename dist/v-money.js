(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VMoney"] = factory();
	else
		root["VMoney"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  prefix: '',
  suffix: '',
  thousands: ',',
  decimal: '.',
  precision: 2,
  allowBlank: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbInByZWZpeCIsInN1ZmZpeCIsInRob3VzYW5kcyIsImRlY2ltYWwiLCJwcmVjaXNpb24iLCJhbGxvd0JsYW5rIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2JBLFVBQVEsRUFESztBQUViQyxVQUFRLEVBRks7QUFHYkMsYUFBVyxHQUhFO0FBSWJDLFdBQVMsR0FKSTtBQUtiQyxhQUFXLENBTEU7QUFNYkMsY0FBWTtBQU5DLENBQWYiLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9sdWNhcy9naXQvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlZml4OiAnJyxcbiAgc3VmZml4OiAnJyxcbiAgdGhvdXNhbmRzOiAnLCcsXG4gIGRlY2ltYWw6ICcuJyxcbiAgcHJlY2lzaW9uOiAyLFxuICBhbGxvd0JsYW5rOiBmYWxzZVxufVxuIl19

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (!binding.value) return;
  var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */], binding.value);

  // v-money used on a component that's not a input
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    var els = el.getElementsByTagName('input');
    if (els.length !== 1) {
      // throw new Error("v-money requires 1 input, found " + els.length)
    } else {
      el = els[0];
    }
  }

  el.onkeydown = function (e) {
    var backspacePressed = e.which == 8 || e.which == 46;
    var atEndPosition = el.value.length - el.selectionEnd === 0;
    if (opt.allowBlank && backspacePressed && atEndPosition && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* unformat */])(el.value, 0) === 0) {
      el.value = '';
      el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* event */])('change')); // v-model.lazy
    }
  };

  el.oninput = function () {
    var positionFromEnd = el.value.length - el.selectionEnd;
    if (el.value == 'R$ 0,00' || !el.value) {
      return;
    } else {
      el.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* format */])(el.value, opt);
    }

    positionFromEnd = Math.max(positionFromEnd, opt.suffix.length); // right
    positionFromEnd = el.value.length - positionFromEnd;
    positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1); // left
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* setCursor */])(el, positionFromEnd);
    el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* event */])('change')); // v-model.lazy
  };

  el.onfocus = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* setCursor */])(el, el.value.length - opt.suffix.length);
  };

  el.oninput();
  el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* event */])('input')); // force format after initialization
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiZm9ybWF0IiwidW5mb3JtYXQiLCJzZXRDdXJzb3IiLCJldmVudCIsImFzc2lnbiIsImRlZmF1bHRzIiwiZWwiLCJiaW5kaW5nIiwidmFsdWUiLCJvcHQiLCJ0YWdOYW1lIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJlbHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIm9ua2V5ZG93biIsImUiLCJiYWNrc3BhY2VQcmVzc2VkIiwid2hpY2giLCJhdEVuZFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kIiwiYWxsb3dCbGFuayIsImRpc3BhdGNoRXZlbnQiLCJvbmlucHV0IiwicG9zaXRpb25Gcm9tRW5kIiwiTWF0aCIsIm1heCIsInN1ZmZpeCIsInByZWZpeCIsIm9uZm9jdXMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVFBLE1BQVIsRUFBZ0JDLFFBQWhCLEVBQTBCQyxTQUExQixFQUFxQ0MsS0FBckMsUUFBaUQsU0FBakQ7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjs7QUFFQSxlQUFlLFVBQVVDLEVBQVYsRUFBY0MsT0FBZCxFQUF1QjtBQUNwQyxNQUFJLENBQUNBLFFBQVFDLEtBQWIsRUFBb0I7QUFDcEIsTUFBSUMsTUFBTUwsT0FBT0MsUUFBUCxFQUFpQkUsUUFBUUMsS0FBekIsQ0FBVjs7QUFFQTtBQUNBLE1BQUlGLEdBQUdJLE9BQUgsQ0FBV0MsaUJBQVgsT0FBbUMsT0FBdkMsRUFBZ0Q7QUFDOUMsUUFBSUMsTUFBTU4sR0FBR08sb0JBQUgsQ0FBd0IsT0FBeEIsQ0FBVjtBQUNBLFFBQUlELElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQjtBQUNELEtBRkQsTUFFTztBQUNMUixXQUFLTSxJQUFJLENBQUosQ0FBTDtBQUNEO0FBQ0Y7O0FBRUROLEtBQUdTLFNBQUgsR0FBZSxVQUFVQyxDQUFWLEVBQWE7QUFDMUIsUUFBSUMsbUJBQW1CRCxFQUFFRSxLQUFGLElBQVcsQ0FBWCxJQUFnQkYsRUFBRUUsS0FBRixJQUFXLEVBQWxEO0FBQ0EsUUFBSUMsZ0JBQWlCYixHQUFHRSxLQUFILENBQVNNLE1BQVQsR0FBa0JSLEdBQUdjLFlBQXRCLEtBQXdDLENBQTVEO0FBQ0EsUUFBSVgsSUFBSVksVUFBSixJQUFrQkosZ0JBQWxCLElBQXNDRSxhQUF0QyxJQUF3RGxCLFNBQVNLLEdBQUdFLEtBQVosRUFBbUIsQ0FBbkIsTUFBMEIsQ0FBdEYsRUFBMEY7QUFDeEZGLFNBQUdFLEtBQUgsR0FBVyxFQUFYO0FBQ0FGLFNBQUdnQixhQUFILENBQWlCbkIsTUFBTSxRQUFOLENBQWpCLEVBRndGLENBRXREO0FBQ25DO0FBQ0YsR0FQRDs7QUFTQUcsS0FBR2lCLE9BQUgsR0FBYSxZQUFZO0FBQ3ZCLFFBQUlDLGtCQUFrQmxCLEdBQUdFLEtBQUgsQ0FBU00sTUFBVCxHQUFrQlIsR0FBR2MsWUFBM0M7QUFDQSxRQUFHZCxHQUFHRSxLQUFILElBQVksU0FBWixJQUF5QixDQUFDRixHQUFHRSxLQUFoQyxFQUFzQztBQUNwQztBQUNELEtBRkQsTUFFSztBQUNIRixTQUFHRSxLQUFILEdBQVdSLE9BQU9NLEdBQUdFLEtBQVYsRUFBaUJDLEdBQWpCLENBQVg7QUFDRDs7QUFFRGUsc0JBQWtCQyxLQUFLQyxHQUFMLENBQVNGLGVBQVQsRUFBMEJmLElBQUlrQixNQUFKLENBQVdiLE1BQXJDLENBQWxCLENBUnVCLENBUXdDO0FBQy9EVSxzQkFBa0JsQixHQUFHRSxLQUFILENBQVNNLE1BQVQsR0FBa0JVLGVBQXBDO0FBQ0FBLHNCQUFrQkMsS0FBS0MsR0FBTCxDQUFTRixlQUFULEVBQTBCZixJQUFJbUIsTUFBSixDQUFXZCxNQUFYLEdBQW9CLENBQTlDLENBQWxCLENBVnVCLENBVTRDO0FBQ25FWixjQUFVSSxFQUFWLEVBQWNrQixlQUFkO0FBQ0FsQixPQUFHZ0IsYUFBSCxDQUFpQm5CLE1BQU0sUUFBTixDQUFqQixFQVp1QixDQVlXO0FBQ3JDLEdBYkM7O0FBZUFHLEtBQUd1QixPQUFILEdBQWEsWUFBWTtBQUN2QjNCLGNBQVVJLEVBQVYsRUFBY0EsR0FBR0UsS0FBSCxDQUFTTSxNQUFULEdBQWtCTCxJQUFJa0IsTUFBSixDQUFXYixNQUEzQztBQUNELEdBRkQ7O0FBSUFSLEtBQUdpQixPQUFIO0FBQ0FqQixLQUFHZ0IsYUFBSCxDQUFpQm5CLE1BQU0sT0FBTixDQUFqQixFQTNDb0MsQ0EyQ0g7QUFDbEMiLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2x1Y2FzL2dpdC92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmb3JtYXQsIHVuZm9ybWF0LCBzZXRDdXJzb3IsIGV2ZW50fSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuL2Fzc2lnbidcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL29wdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xuICBpZiAoIWJpbmRpbmcudmFsdWUpIHJldHVyblxuICB2YXIgb3B0ID0gYXNzaWduKGRlZmF1bHRzLCBiaW5kaW5nLnZhbHVlKVxuXG4gIC8vIHYtbW9uZXkgdXNlZCBvbiBhIGNvbXBvbmVudCB0aGF0J3Mgbm90IGEgaW5wdXRcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb2NhbGVVcHBlckNhc2UoKSAhPT0gJ0lOUFVUJykge1xuICAgIHZhciBlbHMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVxuICAgIGlmIChlbHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJ2LW1vbmV5IHJlcXVpcmVzIDEgaW5wdXQsIGZvdW5kIFwiICsgZWxzLmxlbmd0aClcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBlbHNbMF1cbiAgICB9XG4gIH1cblxuICBlbC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBiYWNrc3BhY2VQcmVzc2VkID0gZS53aGljaCA9PSA4IHx8IGUud2hpY2ggPT0gNDZcbiAgICB2YXIgYXRFbmRQb3NpdGlvbiA9IChlbC52YWx1ZS5sZW5ndGggLSBlbC5zZWxlY3Rpb25FbmQpID09PSAwXG4gICAgaWYgKG9wdC5hbGxvd0JsYW5rICYmIGJhY2tzcGFjZVByZXNzZWQgJiYgYXRFbmRQb3NpdGlvbiAmJiAodW5mb3JtYXQoZWwudmFsdWUsIDApID09PSAwKSkge1xuICAgICAgZWwudmFsdWUgPSAnJ1xuICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCgnY2hhbmdlJykpIC8vIHYtbW9kZWwubGF6eVxuICAgIH1cbiAgfVxuXG4gIGVsLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc2l0aW9uRnJvbUVuZCA9IGVsLnZhbHVlLmxlbmd0aCAtIGVsLnNlbGVjdGlvbkVuZFxuICAgIGlmKGVsLnZhbHVlID09ICdSJCAwLDAwJyB8fCAhZWwudmFsdWUpe1xuICAgICAgcmV0dXJuXG4gICAgfWVsc2V7XG4gICAgICBlbC52YWx1ZSA9IGZvcm1hdChlbC52YWx1ZSwgb3B0KVxuICAgIH1cblxuICAgIHBvc2l0aW9uRnJvbUVuZCA9IE1hdGgubWF4KHBvc2l0aW9uRnJvbUVuZCwgb3B0LnN1ZmZpeC5sZW5ndGgpIC8vIHJpZ2h0XG4gICAgcG9zaXRpb25Gcm9tRW5kID0gZWwudmFsdWUubGVuZ3RoIC0gcG9zaXRpb25Gcm9tRW5kXG4gICAgcG9zaXRpb25Gcm9tRW5kID0gTWF0aC5tYXgocG9zaXRpb25Gcm9tRW5kLCBvcHQucHJlZml4Lmxlbmd0aCArIDEpIC8vIGxlZnRcbiAgICBzZXRDdXJzb3IoZWwsIHBvc2l0aW9uRnJvbUVuZClcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KCdjaGFuZ2UnKSkgLy8gdi1tb2RlbC5sYXp5XG59XG5cbiAgZWwub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJzb3IoZWwsIGVsLnZhbHVlLmxlbmd0aCAtIG9wdC5zdWZmaXgubGVuZ3RoKVxuICB9XG5cbiAgZWwub25pbnB1dCgpXG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQoJ2lucHV0JykpIC8vIGZvcmNlIGZvcm1hdCBhZnRlciBpbml0aWFsaXphdGlvblxufVxuIl19

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(0);


function format(input) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0__options__["a" /* default */];

  if (opt.allowBlank && input == '') {
    return;
  }

  if (typeof input === 'number') {
    input = input.toFixed(fixed(opt.precision));
  }
  var negative = input.indexOf('-') >= 0 ? '-' : '';

  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, opt.precision);
  var parts = toStr(currency).split('.');
  var integer = parts[0];
  var decimal = parts[1];
  integer = addThousandSeparator(integer, opt.thousands);
  return opt.prefix + negative + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix;
}

function unformat(input, precision) {
  var negative = input.indexOf('-') >= 0 ? -1 : 1;
  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, precision);
  return parseFloat(currency) * negative;
}

function onlyNumbers(input) {
  return toStr(input).replace(/\D+/g, '') || '0';
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed(precision) {
  return between(0, precision, 20);
}

function between(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

function numbersToCurrency(numbers, precision) {
  var exp = Math.pow(10, precision);
  var float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
}

function addThousandSeparator(integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, '$1' + separator);
}

function currencyToIntegerAndDecimal(float) {
  return toStr(float).split('.');
}

function joinIntegerAndDecimal(integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer;
}

function toStr(value) {
  return value ? value.toString() : '';
}

function setCursor(el, position) {
  var setSelectionRange = function setSelectionRange() {
    el.setSelectionRange(position, position);
  };
  if (el === document.activeElement) {
    setSelectionRange();
    setTimeout(setSelectionRange, 1); // Android Fix
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
  var evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImZvcm1hdCIsImlucHV0Iiwib3B0IiwiYWxsb3dCbGFuayIsInRvRml4ZWQiLCJmaXhlZCIsInByZWNpc2lvbiIsIm5lZ2F0aXZlIiwiaW5kZXhPZiIsIm51bWJlcnMiLCJvbmx5TnVtYmVycyIsImN1cnJlbmN5IiwibnVtYmVyc1RvQ3VycmVuY3kiLCJwYXJ0cyIsInRvU3RyIiwic3BsaXQiLCJpbnRlZ2VyIiwiZGVjaW1hbCIsImFkZFRob3VzYW5kU2VwYXJhdG9yIiwidGhvdXNhbmRzIiwicHJlZml4Iiwiam9pbkludGVnZXJBbmREZWNpbWFsIiwic3VmZml4IiwidW5mb3JtYXQiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsImJldHdlZW4iLCJtaW4iLCJuIiwibWF4IiwiTWF0aCIsImV4cCIsInBvdyIsImZsb2F0Iiwic2VwYXJhdG9yIiwiY3VycmVuY3lUb0ludGVnZXJBbmREZWNpbWFsIiwidmFsdWUiLCJ0b1N0cmluZyIsInNldEN1cnNvciIsImVsIiwicG9zaXRpb24iLCJzZXRTZWxlY3Rpb25SYW5nZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNldFRpbWVvdXQiLCJldmVudCIsIm5hbWUiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsUUFBUCxNQUFxQixXQUFyQjs7QUFFQSxTQUFTQyxNQUFULENBQWlCQyxLQUFqQixFQUF3QztBQUFBLE1BQWhCQyxHQUFnQix1RUFBVkgsUUFBVTs7QUFDdEMsTUFBSUcsSUFBSUMsVUFBSixJQUFrQkYsU0FBUyxFQUEvQixFQUFtQztBQUNqQztBQUNEOztBQUVELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkEsWUFBUUEsTUFBTUcsT0FBTixDQUFjQyxNQUFNSCxJQUFJSSxTQUFWLENBQWQsQ0FBUjtBQUNEO0FBQ0QsTUFBSUMsV0FBV04sTUFBTU8sT0FB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L0I7QUFBMEMsR0FBaEY7QUFDQSxNQUFJRCxPQUFPRyxTQUFTQyxhQUFwQixFQUFtQztBQUNqQ0Y7QUFDQUcsZUFBV0gsaUJBQVgsRUFBOEIsQ0FBOUIsRUFGaUMsQ0FFQTtBQUNsQztBQUNGOztBQUVEO0FBQ0EsU0FBU0ksS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDcEIsTUFBSUMsTUFBTUwsU0FBU00sV0FBVCxDQUFxQixPQUFyQixDQUFWO0FBQ0FELE1BQUlFLFNBQUosQ0FBY0gsSUFBZCxFQUFvQixJQUFwQixFQUEwQixJQUExQjtBQUNBLFNBQU9DLEdBQVA7QUFDRDs7QUFFRCxTQUNFL0MsTUFERixFQUVFdUIsUUFGRixFQUdFZSxTQUhGLEVBSUVPLEtBSkYiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVjYXMvZ2l0L3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9vcHRpb25zJ1xuXG5mdW5jdGlvbiBmb3JtYXQgKGlucHV0LCBvcHQgPSBkZWZhdWx0cykge1xuICBpZiAob3B0LmFsbG93QmxhbmsgJiYgaW5wdXQgPT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgaW5wdXQgPSBpbnB1dC50b0ZpeGVkKGZpeGVkKG9wdC5wcmVjaXNpb24pKVxuICB9XG4gIHZhciBuZWdhdGl2ZSA9IGlucHV0LmluZGV4T2YoJy0nKSA+PSAwID8gJy0nIDogJydcblxuICB2YXIgbnVtYmVycyA9IG9ubHlOdW1iZXJzKGlucHV0KVxuICB2YXIgY3VycmVuY3kgPSBudW1iZXJzVG9DdXJyZW5jeShudW1iZXJzLCBvcHQucHJlY2lzaW9uKVxuICB2YXIgcGFydHMgPSB0b1N0cihjdXJyZW5jeSkuc3BsaXQoJy4nKVxuICB2YXIgaW50ZWdlciA9IHBhcnRzWzBdXG4gIHZhciBkZWNpbWFsID0gcGFydHNbMV1cbiAgaW50ZWdlciA9IGFkZFRob3VzYW5kU2VwYXJhdG9yKGludGVnZXIsIG9wdC50aG91c2FuZHMpXG4gIHJldHVybiBvcHQucHJlZml4ICsgbmVnYXRpdmUgKyBqb2luSW50ZWdlckFuZERlY2ltYWwoaW50ZWdlciwgZGVjaW1hbCwgb3B0LmRlY2ltYWwpICsgb3B0LnN1ZmZpeFxufVxuXG5mdW5jdGlvbiB1bmZvcm1hdCAoaW5wdXQsIHByZWNpc2lvbikge1xuICB2YXIgbmVnYXRpdmUgPSBpbnB1dC5pbmRleE9mKCctJykgPj0gMCA/IC0xIDogMVxuICB2YXIgbnVtYmVycyA9IG9ubHlOdW1iZXJzKGlucHV0KVxuICB2YXIgY3VycmVuY3kgPSBudW1iZXJzVG9DdXJyZW5jeShudW1iZXJzLCBwcmVjaXNpb24pXG4gIHJldHVybiBwYXJzZUZsb2F0KGN1cnJlbmN5KSAqIG5lZ2F0aXZlXG59XG5cbmZ1bmN0aW9uIG9ubHlOdW1iZXJzIChpbnB1dCkge1xuICByZXR1cm4gdG9TdHIoaW5wdXQpLnJlcGxhY2UoL1xcRCsvZywgJycpIHx8ICcwJ1xufVxuXG4vLyBVbmNhdWdodCBSYW5nZUVycm9yOiB0b0ZpeGVkKCkgZGlnaXRzIGFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyMCBhdCBOdW1iZXIudG9GaXhlZFxuZnVuY3Rpb24gZml4ZWQgKHByZWNpc2lvbikge1xuICByZXR1cm4gYmV0d2VlbigwLCBwcmVjaXNpb24sIDIwKVxufVxuXG5mdW5jdGlvbiBiZXR3ZWVuIChtaW4sIG4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihuLCBtYXgpKVxufVxuXG5mdW5jdGlvbiBudW1iZXJzVG9DdXJyZW5jeSAobnVtYmVycywgcHJlY2lzaW9uKSB7XG4gIHZhciBleHAgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKVxuICB2YXIgZmxvYXQgPSBwYXJzZUZsb2F0KG51bWJlcnMpIC8gZXhwXG4gIHJldHVybiBmbG9hdC50b0ZpeGVkKGZpeGVkKHByZWNpc2lvbikpXG59XG5cbmZ1bmN0aW9uIGFkZFRob3VzYW5kU2VwYXJhdG9yIChpbnRlZ2VyLCBzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIGludGVnZXIucmVwbGFjZSgvKFxcZCkoPz0oPzpcXGR7M30pK1xcYikvZ20sIGAkMSR7c2VwYXJhdG9yfWApXG59XG5cbmZ1bmN0aW9uIGN1cnJlbmN5VG9JbnRlZ2VyQW5kRGVjaW1hbCAoZmxvYXQpIHtcbiAgcmV0dXJuIHRvU3RyKGZsb2F0KS5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGpvaW5JbnRlZ2VyQW5kRGVjaW1hbCAoaW50ZWdlciwgZGVjaW1hbCwgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBkZWNpbWFsID8gaW50ZWdlciArIHNlcGFyYXRvciArIGRlY2ltYWwgOiBpbnRlZ2VyXG59XG5cbmZ1bmN0aW9uIHRvU3RyICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJydcbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yIChlbCwgcG9zaXRpb24pIHtcbiAgdmFyIHNldFNlbGVjdGlvblJhbmdlID0gZnVuY3Rpb24gKCkgeyBlbC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pIH1cbiAgaWYgKGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgc2V0U2VsZWN0aW9uUmFuZ2UoKVxuICAgIHNldFRpbWVvdXQoc2V0U2VsZWN0aW9uUmFuZ2UsIDEpIC8vIEFuZHJvaWQgRml4XG4gIH1cbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50cyNUaGVfb2xkLWZhc2hpb25lZF93YXlcbmZ1bmN0aW9uIGV2ZW50IChuYW1lKSB7XG4gIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpXG4gIHJldHVybiBldnRcbn1cblxuZXhwb3J0IHtcbiAgZm9ybWF0LFxuICB1bmZvcm1hdCxcbiAgc2V0Q3Vyc29yLFxuICBldmVudFxufVxuIl19

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return __WEBPACK_IMPORTED_MODULE_0__component___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMoney", function() { return __WEBPACK_IMPORTED_MODULE_1__directive__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_2__options__["a"]; });



var VERSION = "0.8.3";



function install(Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function (key) {
      __WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */][key] = globalOptions[key];
    });
  }
  Vue.directive('money', __WEBPACK_IMPORTED_MODULE_1__directive__["a" /* default */]);
  Vue.component('money', __WEBPACK_IMPORTED_MODULE_0__component___default.a);
}

/* harmony default export */ __webpack_exports__["default"] = (install);

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb25leSIsIlZNb25leSIsIm9wdGlvbnMiLCJWRVJTSU9OIiwicHJvY2Nlc3MiLCJlbnYiLCJpbnN0YWxsIiwiVnVlIiwiZ2xvYmFsT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJkaXJlY3RpdmUiLCJjb21wb25lbnQiLCJ3aW5kb3ciLCJ1c2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsYUFBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLElBQU1DLFVBQVVDLFNBQVNDLEdBQVQsQ0FBYUYsT0FBN0I7O0FBRUEsU0FDRUgsS0FERixFQUVFQyxNQUZGLEVBR0VDLE9BSEYsRUFJRUMsT0FKRjs7QUFPQSxTQUFTRyxPQUFULENBQWtCQyxHQUFsQixFQUF1QkMsYUFBdkIsRUFBc0M7QUFDcEMsTUFBSUEsYUFBSixFQUFtQjtBQUNqQkMsV0FBT0MsSUFBUCxDQUFZRixhQUFaLEVBQTJCRyxHQUEzQixDQUErQixVQUFTQyxHQUFULEVBQWE7QUFDMUNWLGNBQVFVLEdBQVIsSUFBZUosY0FBY0ksR0FBZCxDQUFmO0FBQ0QsS0FGRDtBQUdEO0FBQ0RMLE1BQUlNLFNBQUosQ0FBYyxPQUFkLEVBQXVCWixNQUF2QjtBQUNBTSxNQUFJTyxTQUFKLENBQWMsT0FBZCxFQUF1QmQsS0FBdkI7QUFDRDs7QUFFRCxlQUFlTSxPQUFmOztBQUVBO0FBQ0EsSUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPUixHQUE1QyxFQUFpRDtBQUMvQ1EsU0FBT1IsR0FBUCxDQUFXUyxHQUFYLENBQWVWLE9BQWY7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9sdWNhcy9naXQvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb25leSBmcm9tICcuL2NvbXBvbmVudCdcbmltcG9ydCBWTW9uZXkgZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnXG5jb25zdCBWRVJTSU9OID0gcHJvY2Nlc3MuZW52LlZFUlNJT05cblxuZXhwb3J0IHtcbiAgTW9uZXksXG4gIFZNb25leSxcbiAgb3B0aW9ucyxcbiAgVkVSU0lPTlxufVxuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUsIGdsb2JhbE9wdGlvbnMpIHtcbiAgaWYgKGdsb2JhbE9wdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhnbG9iYWxPcHRpb25zKS5tYXAoZnVuY3Rpb24oa2V5KXtcbiAgICAgIG9wdGlvbnNba2V5XSA9IGdsb2JhbE9wdGlvbnNba2V5XVxuICAgIH0pXG4gIH1cbiAgVnVlLmRpcmVjdGl2ZSgnbW9uZXknLCBWTW9uZXkpXG4gIFZ1ZS5jb21wb25lbnQoJ21vbmV5JywgTW9uZXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbGxcblxuLy8gSW5zdGFsbCBieSBkZWZhdWx0IGlmIGluY2x1ZGVkIGZyb20gc2NyaXB0IHRhZ1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoaW5zdGFsbClcbn1cbiJdfQ==

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Money',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].precision;
      }
    },
    decimal: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].decimal;
      }
    },
    thousands: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].thousands;
      }
    },
    prefix: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].prefix;
      }
    },
    suffix: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].suffix;
      }
    },
    allowBlank: {
      type: Boolean,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].allowBlank;
      }
    }
  },

  directives: { money: __WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */] },

  data: function data() {
    return {
      formattedValue: ''
    };
  },


  watch: {
    value: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        var formatted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* format */])(newValue, this.$props);
        if (formatted !== this.formattedValue) {
          this.formattedValue = formatted;
        }
      }
    }
  },

  methods: {
    change: function change(evt) {
      this.$emit('input', this.masked ? evt.target.value : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* unformat */])(evt.target.value, this.precision));
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQudnVlIl0sIm5hbWVzIjpbIm1vbmV5IiwiZGVmYXVsdHMiLCJmb3JtYXQiLCJ1bmZvcm1hdCIsIm5hbWUiLCJwcm9wcyIsInZhbHVlIiwicmVxdWlyZWQiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm1hc2tlZCIsIkJvb2xlYW4iLCJwcmVjaXNpb24iLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwicHJlZml4Iiwic3VmZml4IiwiYWxsb3dCbGFuayIsImRpcmVjdGl2ZXMiLCJkYXRhIiwiZm9ybWF0dGVkVmFsdWUiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiZm9ybWF0dGVkIiwiJHByb3BzIiwibWV0aG9kcyIsImNoYW5nZSIsImV2dCIsIiRlbWl0IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsYUFBbEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsU0FBUUMsTUFBUixFQUFnQkMsUUFBaEIsUUFBK0IsU0FBL0I7O0FBRUEsZUFBZTtBQUNiQyxRQUFNLE9BRE87QUFFYkMsU0FBTztBQUNMQyxXQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsWUFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FGRDtBQUdMQyxlQUFTO0FBSEosS0FERjtBQU1MQyxZQUFRO0FBQ05KLFlBQU1LLE9BREE7QUFFTkYsZUFBUztBQUZILEtBTkg7QUFVTEcsZUFBVztBQUNUTixZQUFNQyxNQURHO0FBRVRFLGVBQVM7QUFBQSxlQUFNVixTQUFTYSxTQUFmO0FBQUE7QUFGQSxLQVZOO0FBY0xDLGFBQVM7QUFDUFAsWUFBTUUsTUFEQztBQUVQQyxlQUFTO0FBQUEsZUFBTVYsU0FBU2MsT0FBZjtBQUFBO0FBRkYsS0FkSjtBQWtCTEMsZUFBVztBQUNUUixZQUFNRSxNQURHO0FBRVRDLGVBQVM7QUFBQSxlQUFNVixTQUFTZSxTQUFmO0FBQUE7QUFGQSxLQWxCTjtBQXNCTEMsWUFBUTtBQUNOVCxZQUFNRSxNQURBO0FBRU5DLGVBQVM7QUFBQSxlQUFNVixTQUFTZ0IsTUFBZjtBQUFBO0FBRkgsS0F0Qkg7QUEwQkxDLFlBQVE7QUFDTlYsWUFBTUUsTUFEQTtBQUVOQyxlQUFTO0FBQUEsZUFBTVYsU0FBU2lCLE1BQWY7QUFBQTtBQUZILEtBMUJIO0FBOEJMQyxnQkFBWTtBQUNWWCxZQUFNSyxPQURJO0FBRVZGLGVBQVM7QUFBQSxlQUFNVixTQUFTa0IsVUFBZjtBQUFBO0FBRkM7QUE5QlAsR0FGTTs7QUFzQ2JDLGNBQVksRUFBQ3BCLFlBQUQsRUF0Q0M7O0FBd0NicUIsTUF4Q2Esa0JBd0NMO0FBQ04sV0FBTztBQUNMQyxzQkFBZ0I7QUFEWCxLQUFQO0FBR0QsR0E1Q1k7OztBQThDYkMsU0FBTztBQUNMakIsV0FBTztBQUNMa0IsaUJBQVcsSUFETjtBQUVMQyxhQUZLLG1CQUVJQyxRQUZKLEVBRWNDLFFBRmQsRUFFd0I7QUFDM0IsWUFBSUMsWUFBWTFCLE9BQU93QixRQUFQLEVBQWlCLEtBQUtHLE1BQXRCLENBQWhCO0FBQ0EsWUFBSUQsY0FBYyxLQUFLTixjQUF2QixFQUF1QztBQUNyQyxlQUFLQSxjQUFMLEdBQXNCTSxTQUF0QjtBQUNEO0FBQ0Y7QUFQSTtBQURGLEdBOUNNOztBQTBEYkUsV0FBUztBQUNQQyxVQURPLGtCQUNDQyxHQURELEVBQ007QUFDWCxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLckIsTUFBTCxHQUFjb0IsSUFBSUUsTUFBSixDQUFXNUIsS0FBekIsR0FBaUNILFNBQVM2QixJQUFJRSxNQUFKLENBQVc1QixLQUFwQixFQUEyQixLQUFLUSxTQUFoQyxDQUFyRDtBQUNEO0FBSE07QUExREksQ0FBZiIsImZpbGUiOiJjb21wb25lbnQudnVlIiwic291cmNlUm9vdCI6Ii9ob21lL2x1Y2FzL2dpdC92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBtb25leSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL29wdGlvbnMnXG5pbXBvcnQge2Zvcm1hdCwgdW5mb3JtYXR9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01vbmV5JyxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgbWFza2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHByZWNpc2lvbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdHMucHJlY2lzaW9uXG4gICAgfSxcbiAgICBkZWNpbWFsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBkZWZhdWx0cy5kZWNpbWFsXG4gICAgfSxcbiAgICB0aG91c2FuZHM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRzLnRob3VzYW5kc1xuICAgIH0sXG4gICAgcHJlZml4OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBkZWZhdWx0cy5wcmVmaXhcbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdHMuc3VmZml4XG4gICAgfSxcbiAgICBhbGxvd0JsYW5rOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdHMuYWxsb3dCbGFua1xuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7bW9uZXl9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZTogJydcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlciAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBmb3JtYXQobmV3VmFsdWUsIHRoaXMuJHByb3BzKVxuICAgICAgICBpZiAoZm9ybWF0dGVkICE9PSB0aGlzLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2UgKGV2dCkge1xuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLm1hc2tlZCA/IGV2dC50YXJnZXQudmFsdWUgOiB1bmZvcm1hdChldnQudGFyZ2V0LnZhbHVlLCB0aGlzLnByZWNpc2lvbikpXG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (defaults, extras) {
  defaults = defaults || {};
  extras = extras || {};
  return Object.keys(defaults).concat(Object.keys(extras)).reduce(function (acc, val) {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val];
    return acc;
  }, {});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NpZ24uanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJleHRyYXMiLCJPYmplY3QiLCJrZXlzIiwiY29uY2F0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFVBQVVBLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ3pDRCxhQUFXQSxZQUFZLEVBQXZCO0FBQ0FDLFdBQVNBLFVBQVUsRUFBbkI7QUFDQSxTQUFPQyxPQUFPQyxJQUFQLENBQVlILFFBQVosRUFBc0JJLE1BQXRCLENBQTZCRixPQUFPQyxJQUFQLENBQVlGLE1BQVosQ0FBN0IsRUFBa0RJLE1BQWxELENBQTBELFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNuRkQsUUFBSUMsR0FBSixJQUFXTixPQUFPTSxHQUFQLE1BQWdCQyxTQUFoQixHQUE0QlIsU0FBU08sR0FBVCxDQUE1QixHQUE0Q04sT0FBT00sR0FBUCxDQUF2RDtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQUhNLEVBR0osRUFISSxDQUFQO0FBSUQiLCJmaWxlIjoiYXNzaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2x1Y2FzL2dpdC92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRlZmF1bHRzLCBleHRyYXMpIHtcbiAgZGVmYXVsdHMgPSBkZWZhdWx0cyB8fCB7fVxuICBleHRyYXMgPSBleHRyYXMgfHwge31cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5jb25jYXQoT2JqZWN0LmtleXMoZXh0cmFzKSkucmVkdWNlKCBmdW5jdGlvbiAoYWNjLCB2YWwpIHtcbiAgICBhY2NbdmFsXSA9IGV4dHJhc1t2YWxdID09PSB1bmRlZmluZWQgPyBkZWZhdWx0c1t2YWxdIDogZXh0cmFzW3ZhbF1cbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxufVxuIl19

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "money",
      rawName: "v-money",
      value: ({
        precision: _vm.precision,
        decimal: _vm.decimal,
        thousands: _vm.thousands,
        prefix: _vm.prefix,
        suffix: _vm.suffix,
        allowBlank: _vm.allowBlank
      }),
      expression: "{precision, decimal, thousands, prefix, suffix, allowBlank}"
    }],
    staticClass: "v-money",
    attrs: {
      "type": "tel"
    },
    domProps: {
      "value": _vm.formattedValue
    },
    on: {
      "change": _vm.change
    }
  })
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});