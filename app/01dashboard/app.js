var App1 = angular.module('dashboard', [
     'ui.router',
     'ngResource',
     "oc.lazyLoad"
    // 'constant'
]);

App1.config(require('./router'));
//App.factory('dashboardservice', require('./service'));

App1.controller('supplier_dashboard',require('./controllers/supplier_dashboard'));

module.exports = App1;