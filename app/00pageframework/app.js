var App = angular.module('pageframework', [
	// 'ui.jq',
	// 'ui.bootstrap',
 //    'ui.router',
 //    'ngResource'
    // 'constant'
]);

App.config(require('./router'));
//App.factory('dashboardservice', require('./service'));
// App.controller('HeaderController',require('./controllers/HeaderController'));
// App.controller('SidebarController',require('./controllers/SidebarController'));
// App.controller('QuickSidebarController',require('./controllers/QuickSidebarController'));
// App.controller('PageHeadController',require('./controllers/PageHeadController'));
// App.controller('FooterController',require('./controllers/FooterController'));
// App.controller('AppController',require('./controllers/AppController'));

//App.controller('noticeinfo',require('./controllers/noticeinfo'));

//App.controller('chart',require('./controllers/chart'));



module.exports = App;