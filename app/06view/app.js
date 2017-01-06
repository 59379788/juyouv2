var App = angular.module('view', []);

App.config(require('./router'));
App.factory('viewservice', require('./service'));

// App.controller('create',require('./controllers/create'));
// App.controller('list',require('./controllers/list'));

module.exports = App;