var App = angular.module('tickettype', []);

App.config(require('./router'));
App.factory('tickettypeservice', require('./service'));

App.controller('tickettypelist',require('./controllers/list'));
App.controller('tickettypecreate',require('./controllers/create'));
App.controller('tickettypeinfo',require('./controllers/info'));
App.controller('tickettypeedit',require('./controllers/edit'));

module.exports = App;