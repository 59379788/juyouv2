var angular = require('angular');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('angular-touch');
require('ngstorage');
require('angular-ui-router');
require('angular-bootstrap');

require('ui-select');
require('../node_modules/ui-select/dist/select.min.css');


require('./998mstp/js/services/ui-load');
require('./998mstp/js/directives/ui-jq');
require('./998mstp/js/directives/ui-validate');

require('./998mstp/js/directives/ui-nav');
require('./998mstp/js/directives/setnganimate');
require('./998mstp/js/directives/ui-butterbar');
require('./998mstp/js/directives/ui-focus');
require('./998mstp/js/directives/ui-fullscreen');
require('./998mstp/js/directives/ui-module');
require('./998mstp/js/directives/ui-scroll');
require('./998mstp/js/directives/ui-shift');
require('./998mstp/js/directives/ui-toggleclass');
require('./998mstp/js/controllers/bootstrap');
require('./998mstp/js/filters/fromNow');

require('angular-translate');
require('oclazyload');
require('angular-datatables');


// ------------ 富文本编辑器 ----------------------//
//require('../node_modules/textangular/dist/textAngular-rangy.min');
require('../node_modules/textangular/dist/textAngular-sanitize.min');
require('../node_modules/textangular/dist/textAngular.min');
require('../node_modules/textangular/dist/textAngular.umd');
require('../node_modules/textangular/dist/textAngularSetup');
require('../node_modules/textangular/dist/textAngular.css');
// ------------ 富文本编辑器 ----------------------//



// ------------ angular tree ----------------------//
require('../node_modules/angular-tree-control/angular-tree-control');
require('../node_modules/angular-tree-control/css/tree-control.css');
require('../node_modules/angular-tree-control/css/tree-control-attribute.css');
// ------------ angular tree ----------------------//






//require('./998mstp/css/bootstrap.css');
require('./998mstp/vendor/jquery/datatables/dataTables.bootstrap.css');
require('./998mstp/css/font-awesome.min.css');
require('./998mstp/css/simple-line-icons.css');
require('./998mstp/css/font.css');
require('./998mstp/css/app.css');




require('./00pageframework/app');
require('./01dashboard/app');
require('./02product/app');
require('./03sys/app');
require('./04permission/app');
require('./995util/app');
require('./996tpl/app');
require('./997test/app');


require('./00pageframework/css/app.css');



//=================[ 权限模块加载 ]===========================//

(require('./04permission/boot'))(jQuery);

//=================[ 权限模块加载 ]===========================//




var juyou = angular.module('app', [
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
    'ui.nav',
    'oc.lazyLoad',
    'pascalprecht.translate',

    'fromnow',
    'setnganimate',
    'ui.butterbar',
    'ui.focus',
    'ui.fullscreen',
    'ui.module',
    'ui.scroll',
    'ui.shift',
    'ui.select',
    'ui.toggleclass',
    'ctrl.bootstrap',

    'datatables',
    'datatables.bootstrap',
    'datatables.tabletools',
    'datatables.colvis',
    'datatables.light-columnfilter',
    'datatables.columnfilter',

    'textAngular',
    'treeControl',

    'pageframework',
    'dashboard',
    'product',
    'sys',
    'permission',
    'util',
    'juyoutpl',
    'test', 
]);



juyou.config(require('./config'));
juyou.constant('JQ_CONFIG',require('./config.jq'));
juyou.constant('CONST',require('./config.const'));
juyou.config(require('./config.lazyLoad'));
juyou.run(require('./config.run'));
juyou.controller('AppCtrl', require('./main'));



juyou.config(function($stateProvider,   $urlRouterProvider){

    $urlRouterProvider.otherwise('/app/supplier_dashboard');

});




