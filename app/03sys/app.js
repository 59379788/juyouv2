var App = angular.module('sys', []);

App.config(require('./router'));
App.factory('sysservice', require('./service'));

App.controller('interfacelist',require('./controllers/interfacelist'));
App.controller('interfacecreate',require('./controllers/interfacecreate'));
App.controller('interfaceinfo',require('./controllers/interfaceinfo'));
App.controller('interfaceedit',require('./controllers/interfaceedit'));
App.controller('interfacereq',require('./controllers/interfacereq'));
App.controller('interfacereqcreate',require('./controllers/interfacereqcreate'));
App.controller('interfacereqinfo',require('./controllers/interfacereqinfo'));
App.controller('interfacereqedit',require('./controllers/interfacereqedit'));


App.controller('interfaceres',require('./controllers/interfaceres'));
App.controller('interfacerescreate',require('./controllers/interfacerescreate'));
App.controller('interfaceresinfo',require('./controllers/interfaceresinfo'));
App.controller('interfaceresedit',require('./controllers/interfaceresedit'));

App.controller('systemlist',require('./controllers/systemlist'));
App.controller('systemcreate',require('./controllers/systemcreate'));
App.controller('systeminfo',require('./controllers/systeminfo'));
App.controller('systemedit',require('./controllers/systemedit'));

App.controller('sysmodulelist',require('./controllers/sysmodulelist'));
App.controller('sysmodulecreate',require('./controllers/sysmodulecreate'));
App.controller('sysmoduleinfo',require('./controllers/sysmoduleinfo'));
App.controller('sysmoduleedit',require('./controllers/sysmoduleedit'));


App.controller('sysmenulist',require('./controllers/sysmenulist'));
App.controller('sysmenucreate',require('./controllers/sysmenucreate'));
App.controller('sysmenuinfo',require('./controllers/sysmenuinfo'));
App.controller('sysmenuedit',require('./controllers/sysmenuedit'));


App.controller('sysrolelist',require('./controllers/sysrolelist'));
App.controller('sysrolecreate',require('./controllers/sysrolecreate'));
App.controller('sysroleinfo',require('./controllers/sysroleinfo'));
App.controller('sysroleedit',require('./controllers/sysroleedit'));

// App.controller('create',require('./controllers/create'));
// App.controller('list',require('./controllers/list'));

module.exports = App;