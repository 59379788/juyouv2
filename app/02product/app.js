var App = angular.module('product', [
     // 'ui.router',
     // 'ngResource',
     // 'datatables',
     // "oc.lazyLoad"
    // 'constant'
]);

App.config(require('./router'));
App.factory('productservice', require('./service'));

App.controller('template',require('./controllers/template'));
App.controller('create',require('./controllers/create'));
App.controller('list',require('./controllers/list'));

module.exports = App;