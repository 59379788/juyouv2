module.exports = function($scope, formconfig, sysmodulemodel){
	console.log('asdasd');
	formconfig.start({
		'title' : '创建模块',
		'formtitle' : '模块基本信息',
		'elements' : sysmodulemodel(),
		'save' : {
			'url' : '/api/as/sc/sysmodule/save',
			'to' : 'app.sys_module_list'
		}
	}, $scope);

};