var App = angular.module('view', []);

App.config(require('./router'));
App.factory('viewservice', require('./service'));

App.controller('viewlist',require('./controllers/list'));
App.controller('viewcreate',require('./controllers/create'));
App.controller('viewinfo',require('./controllers/info'));
App.controller('viewedit',require('./controllers/edit'));




// App.controller('list',require('./controllers/list'));

module.exports = App;