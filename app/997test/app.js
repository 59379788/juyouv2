var App = angular.module('test', [
     'ui.router',
     'ngResource',
     "oc.lazyLoad"
    // 'constant'
]);

App.config(require('./router'));
//App.factory('dashboardservice', require('./service'));

// App.controller('template',require('./controllers/template'));
// App.controller('create',require('./controllers/create'));
// App.controller('list',require('./controllers/list'));

module.exports = App;