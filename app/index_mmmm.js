// var angular = require('angular');
require('angular-resource');
// require('angular-ui-router');
// require('angular-ui-bootstrap');
// require('angular-file-upload');
// require('angular-ui-tree');

require('ocLazyLoad');
// require('angular-sanitize');
// require('angular-touch');


// ------------ 富文本编辑器 ----------------------//
//require('../node_modules/textangular/dist/textAngular-rangy.min');
// require('../node_modules/textangular/dist/textAngular-sanitize.min');
// require('../node_modules/textangular/dist/textAngular.min');
// require('../node_modules/textangular/dist/textAngular.umd');
// require('../node_modules/textangular/dist/textAngularSetup');
// require('../node_modules/textangular/dist/textAngular.css');




//require('../node_modules/font-awesome/css/font-awesome.min.css');


require('./00pageframework/app');
require('./01dashboard/app');
require('./02product/app');


//名词定义
//供应商：supplier
//分销商：distributor
//商户：seller
//系统：system
//客服：customerService


/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var Juyou = angular.module("Juyou", [

    'pageframework',
    'dashboard',
    'product',

    "ui.router", 
    "ui.bootstrap.tpls", 
    "oc.lazyLoad",
    "ngSanitize"
]); 

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
Juyou.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
Juyou.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
Juyou.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        //assetsPath: './app/999metronic/assets',
        //globalPath: './app/999metronic/assets/global',
        layoutPath: './app/00pageframework',
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
// Juyou.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
//     $scope.$on('$viewContentLoaded', function() {
//         App.initComponents(); // init core components
//         //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
//     });
// }]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
// Juyou.controller('HeaderController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Layout.initHeader(); // init header
//     });
// }]);

/* Setup Layout Part - Sidebar */
// Juyou.controller('SidebarController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Layout.initSidebar(); // init sidebar
//     });
// }]);

/* Setup Layout Part - Sidebar */
// Juyou.controller('PageHeadController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {        
//         Demo.init(); // init theme panel
//     });
// }]);

/* Setup Layout Part - Quick Sidebar */
// Juyou.controller('QuickSidebarController', ['$scope', function($scope) {    
//     $scope.$on('$includeContentLoaded', function() {
//        setTimeout(function(){
//             QuickSidebar.init(); // init quick sidebar        
//         }, 2000)
//     });
// }]);

/* Setup Layout Part - Theme Panel */
// Juyou.controller('ThemePanelController', ['$scope', function($scope) {    
//     $scope.$on('$includeContentLoaded', function() {
//         Demo.init(); // init theme panel
//     });
// }]);

/* Setup Layout Part - Footer */
// Juyou.controller('FooterController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Layout.initFooter(); // init footer
//     });
// }]);

/* Setup Rounting For All Pages */
Juyou.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    //$urlRouterProvider.otherwise("/dashboard.html");  



    //$urlRouterProvider.otherwise('/app/m1/dashboard1.html');
    $urlRouterProvider.otherwise('/app/supplier/dashboard.html');
    
    //$stateProvider



        // Dashboard
        // .state('dashboard', {
        //     url: "/dashboard.html",
        //     templateUrl: "./app/views/dashboard.html",            
        //     data: {pageTitle: 'Admin Dashboard Template'},
        //     controller: "DashboardController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/morris/morris.css',                            
        //                     './app/999metronic/assets/global/plugins/morris/morris.min.js',
        //                     './app/999metronic/assets/global/plugins/morris/raphael-min.js',                            
        //                     './app/999metronic/assets/global/plugins/jquery.sparkline.min.js',

        //                     './app/999metronic/assets/pages/scripts/dashboard.min.js',
        //                     './app/controllers/DashboardController.js',
        //                 ] 
        //             });
        //         }]
        //     }
        // })

        // AngularJS plugins
        // .state('fileupload', {
        //     url: "/file_upload.html",
        //     templateUrl: "views/file_upload.html",
        //     data: {pageTitle: 'AngularJS File Upload'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'angularFileUpload',
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
        //                 ] 
        //             }, {
        //                 name: 'Juyou',
        //                 files: [
        //                     'js/controllers/GeneralPageController.js'
        //                 ]
        //             }]);
        //         }]
        //     }
        // })

        // // UI Select
        // .state('uiselect', {
        //     url: "/ui_select.html",
        //     templateUrl: "views/ui_select.html",
        //     data: {pageTitle: 'AngularJS Ui Select'},
        //     controller: "UISelectController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'ui.select',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
        //                     './app/999metronic/assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
        //                 ] 
        //             }, {
        //                 name: 'Juyou',
        //                 files: [
        //                     'js/controllers/UISelectController.js'
        //                 ] 
        //             }]);
        //         }]
        //     }
        // })

        // // UI Bootstrap
        // .state('uibootstrap', {
        //     url: "/ui_bootstrap.html",
        //     templateUrl: "views/ui_bootstrap.html",
        //     data: {pageTitle: 'AngularJS UI Bootstrap'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'Juyou',
        //                 files: [
        //                     'js/controllers/GeneralPageController.js'
        //                 ] 
        //             }]);
        //         }] 
        //     }
        // })

        // // Tree View
        // .state('tree', {
        //     url: "/tree",
        //     templateUrl: "views/tree.html",
        //     data: {pageTitle: 'jQuery Tree View'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/jstree/dist/themes/default/style.min.css',

        //                     './app/999metronic/assets/global/plugins/jstree/dist/jstree.min.js',
        //                     './app/999metronic/assets/pages/scripts/ui-tree.min.js',
        //                     'js/controllers/GeneralPageController.js'
        //                 ] 
        //             }]);
        //         }] 
        //     }
        // })     

        // // Form Tools
        // .state('formtools', {
        //     url: "/form-tools",
        //     templateUrl: "views/form_tools.html",
        //     data: {pageTitle: 'Form Tools'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
        //                     './app/999metronic/assets/global/plugins/typeahead/typeahead.css',

        //                     './app/999metronic/assets/global/plugins/fuelux/js/spinner.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
        //                     './app/999metronic/assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
        //                     './app/999metronic/assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
        //                     './app/999metronic/assets/global/plugins/typeahead/handlebars.min.js',
        //                     './app/999metronic/assets/global/plugins/typeahead/typeahead.bundle.min.js',
        //                     './app/999metronic/assets/pages/scripts/components-form-tools-2.min.js',

        //                     'js/controllers/GeneralPageController.js'
        //                 ] 
        //             }]);
        //         }] 
        //     }
        // })        

        // // Date & Time Pickers
        // .state('pickers', {
        //     url: "/pickers",
        //     templateUrl: "views/pickers.html",
        //     data: {pageTitle: 'Date & Time Pickers'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/clockface/css/clockface.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',

        //                     './app/999metronic/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
        //                     './app/999metronic/assets/global/plugins/clockface/js/clockface.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',

        //                     './app/999metronic/assets/pages/scripts/components-date-time-pickers.min.js',

        //                     'js/controllers/GeneralPageController.js'
        //                 ] 
        //             }]);
        //         }] 
        //     }
        // })

        // // Custom Dropdowns
        // .state('dropdowns', {
        //     url: "/dropdowns",
        //     templateUrl: "views/dropdowns.html",
        //     data: {pageTitle: 'Custom Dropdowns'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load([{
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
        //                     './app/999metronic/assets/global/plugins/select2/css/select2.min.css',
        //                     './app/999metronic/assets/global/plugins/select2/css/select2-bootstrap.min.css',

        //                     './app/999metronic/assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
        //                     './app/999metronic/assets/global/plugins/select2/js/select2.full.min.js',

        //                     './app/999metronic/assets/pages/scripts/components-bootstrap-select.min.js',
        //                     './app/999metronic/assets/pages/scripts/components-select2.min.js',

        //                     'js/controllers/GeneralPageController.js'
        //                 ] 
        //             }]);
        //         }] 
        //     }
        // }) 

        // // Advanced Datatables
        // .state('datatablesAdvanced', {
        //     url: "/datatables/managed.html",
        //     templateUrl: "views/datatables/managed.html",
        //     data: {pageTitle: 'Advanced Datatables'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [                             
        //                     './app/999metronic/assets/global/plugins/datatables/datatables.min.css', 
        //                     './app/999metronic/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

        //                     './app/999metronic/assets/global/plugins/datatables/datatables.all.min.js',

        //                     './app/999metronic/assets/pages/scripts/table-datatables-managed.min.js',

        //                     'js/controllers/GeneralPageController.js'
        //                 ]
        //             });
        //         }]
        //     }
        // })

        // // Ajax Datetables
        // .state('datatablesAjax', {
        //     url: "/datatables/ajax.html",
        //     templateUrl: "views/datatables/ajax.html",
        //     data: {pageTitle: 'Ajax Datatables'},
        //     controller: "GeneralPageController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({
        //                 name: 'Juyou',
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/datatables/datatables.min.css', 
        //                     './app/999metronic/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
        //                     './app/999metronic/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',

        //                     './app/999metronic/assets/global/plugins/datatables/datatables.all.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
        //                     './app/999metronic/assets/global/scripts/datatable.min.js',

        //                     'js/scripts/table-ajax.js',
        //                     'js/controllers/GeneralPageController.js'
        //                 ]
        //             });
        //         }]
        //     }
        // })

        // // User Profile
        // .state("profile", {
        //     url: "/profile",
        //     templateUrl: "views/profile/main.html",
        //     data: {pageTitle: 'User Profile'},
        //     controller: "UserProfileController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({
        //                 name: 'Juyou',  
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
        //                     './app/999metronic/assets/pages/css/profile.css',
                            
        //                     './app/999metronic/assets/global/plugins/jquery.sparkline.min.js',
        //                     './app/999metronic/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

        //                     './app/999metronic/assets/pages/scripts/profile.min.js',

        //                     'js/controllers/UserProfileController.js'
        //                 ]                    
        //             });
        //         }]
        //     }
        // })

        // // User Profile Dashboard
        // .state("profile.dashboard", {
        //     url: "/dashboard",
        //     templateUrl: "views/profile/dashboard.html",
        //     data: {pageTitle: 'User Profile'}
        // })

        // // User Profile Account
        // .state("profile.account", {
        //     url: "/account",
        //     templateUrl: "views/profile/account.html",
        //     data: {pageTitle: 'User Account'}
        // })

        // // User Profile Help
        // .state("profile.help", {
        //     url: "/help",
        //     templateUrl: "views/profile/help.html",
        //     data: {pageTitle: 'User Help'}      
        // })

        // // Todo
        // .state('todo', {
        //     url: "/todo",
        //     templateUrl: "views/todo.html",
        //     data: {pageTitle: 'Todo'},
        //     controller: "TodoController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({ 
        //                 name: 'Juyou',  
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     './app/999metronic/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
        //                     './app/999metronic/assets/apps/css/todo-2.css',
        //                     './app/999metronic/assets/global/plugins/select2/css/select2.min.css',
        //                     './app/999metronic/assets/global/plugins/select2/css/select2-bootstrap.min.css',

        //                     './app/999metronic/assets/global/plugins/select2/js/select2.full.min.js',
                            
        //                     './app/999metronic/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',

        //                     './app/999metronic/assets/apps/scripts/todo-2.min.js',

        //                     'js/controllers/TodoController.js'  
        //                 ]                    
        //             });
        //         }]
        //     }
        // })

}]);

/* Init global settings and run the app */
Juyou.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view

    var data = [
        {
            'sysname' : '供应商',
            'icon' : 'icon-docs',
            'url' : 'app.supplier_dashboard',
            'menu' : [
                {
                    'menuname' : '产品',
                    'icon' : 'icon-settings',
                    'menu' : [
                        {
                            'menuname' : '新建',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.product_template'
                        },
                        {
                            'menuname' : '上架产品列表',
                            'icon' : 'icon-share',
                            'url' : 'app.product_list'
                        },
                        {
                            'menuname' : '下架产品列表',
                            'icon' : 'icon-check',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '草稿列表',
                            'icon' : 'icon-puzzle',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '删除列表',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        }
                    ]
                },
                {
                    'menuname' : '销量',
                    'icon' : 'icon-wrench',
                    'menu' : [
                        {
                            'menuname' : '销量1',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量2',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量3',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量4',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量5',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        }
                    ]
                }
                // ,
                // {
                //     'menuname' : '呵呵',
                //     'icon' : 'icon-tag',
                //     'menu' : []
                // }
            ]
        },
        {
            'sysname' : '分销商',
            'icon' : 'icon-tag',
            'url' : 'app.distributor_dashboard',
            'menu' : [
                {
                    'menuname' : '产品11',
                    'icon' : 'icon-share',
                    'menu' : [
                        {
                            'menuname' : '新建1',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '上架产品列表2',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '下架产品列表3',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '草稿列表4',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '删除列表5',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        }
                    ]
                },
                {
                    'menuname' : '销量6',
                    'icon' : 'icon-flag',
                    'menu' : [
                        {
                            'menuname' : '销量17',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量28',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量39',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量40',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        },
                        {
                            'menuname' : '销量51',
                            'icon' : 'icon-paper-clip',
                            'url' : 'app.test1'
                        }
                    ]
                }
            ]
        }

    ];

    $rootScope.menudata = data;
    $rootScope.currentsys = $rootScope.menudata[0];
    $rootScope.currentmenu = $rootScope.currentsys.menu[0];

}]);



/***
GLobal Directives
***/

// Route State Load Spinner(used on page or content load)
Juyou.directive('ngSpinnerBar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });

                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function() {
                    element.addClass('hide'); // hide spinner bar
                    $('body').removeClass('page-on-load'); // remove page loading indicator
                    Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu
                   
                    // auto scorll to page top
                    setTimeout(function () {
                        App.scrollTop(); // scroll to the top on content load
                    }, $rootScope.settings.layout.pageAutoScrollOnLoad);     
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function() {
                    element.addClass('hide'); // hide spinner bar
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function() {
                    element.addClass('hide'); // hide spinner bar
                });
            }
        };
    }
])

// Handle global LINK click
Juyou.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function(e) {
                    e.preventDefault(); // prevent link click for above criteria
                });
            }
        }
    };
});

// Handle Dropdown Hover Plugin Integration
Juyou.directive('dropdownMenuHover', function () {
  return {
    link: function (scope, elem) {
      elem.dropdownHover();
    }
  };  
});