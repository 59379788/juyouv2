var App = angular.module('login', []);

App.config(require('./router'));
//App.factory('sysservice', require('./service'));

// App.controller('create',require('./controllers/create'));
// App.controller('list',require('./controllers/list'));

module.exports = App;