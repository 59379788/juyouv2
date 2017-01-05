

var config = function($controllerProvider, $compileProvider, $filterProvider, $provide
//	, $translateProvider
	){

 	// lazy controller, directive and service
    app.controller = $controllerProvider.register;
    app.directive  = $compileProvider.directive;
    app.filter     = $filterProvider.register;
    app.factory    = $provide.factory;
    app.service    = $provide.service;
    app.constant   = $provide.constant;
    app.value      = $provide.value;



    // $translateProvider.useStaticFilesLoader({
    //   prefix: './app/998mstp/l10n/',
    //   suffix: '.js'
    // });
    // // Tell the module what language to use by default
    // $translateProvider.preferredLanguage('en');
    // // Tell the module to store the language in the local storage
    // $translateProvider.useLocalStorage();

    //alert('sdf');

};

module.exports = config;