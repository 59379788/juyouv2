/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	

	var juyou = angular.module('juyou', [
	    'ngAnimate',
	    'ngCookies',
	    'ngResource',
	    'ngSanitize',
	    'ngTouch',
	    'ngStorage',
	    'ui.router',
	    'ui.bootstrap',
	    'ui.load',
	    'ui.jq',
	    'ui.validate',
	    'oc.lazyLoad',
	    'pascalprecht.translate'
	]);

	juyou.config(__webpack_require__(2));

/***/ },
/* 2 */
/***/ function(module, exports) {

	

	var config = function($controllerProvider, $compileProvider, $filterProvider, 
		$provide, $translateProvider){

	 	// lazy controller, directive and service
	    app.controller = $controllerProvider.register;
	    app.directive  = $compileProvider.directive;
	    app.filter     = $filterProvider.register;
	    app.factory    = $provide.factory;
	    app.service    = $provide.service;
	    app.constant   = $provide.constant;
	    app.value      = $provide.value;



	    $translateProvider.useStaticFilesLoader({
	      prefix: './app/998mstp/l10n/',
	      suffix: '.js'
	    });
	    // Tell the module what language to use by default
	    $translateProvider.preferredLanguage('en');
	    // Tell the module to store the language in the local storage
	    $translateProvider.useLocalStorage();

	    alert('sdf');

	};

	module.exports = config;

/***/ }
/******/ ]);