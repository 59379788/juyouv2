module.exports = function($scope, formconfig, systemmodel){

	formconfig.start({
		'title' : '创建系统',
		'formtitle' : '系统基本信息',
		'elements' : systemmodel(),
		'save' : {
			'url' : '/api/as/sc/syssystem/save',
			'to' : 'app.sys_system_list'
		}
	}, $scope);

};