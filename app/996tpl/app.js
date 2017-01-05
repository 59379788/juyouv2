var App = angular.module('juyoutpl', []);

App.config(require('./router'));

App.factory('tableservice', require('./service'));
App.factory('formservice', require('./formservice'));


App.controller('tplform',require('./controllers/tplform'));


module.exports = App;