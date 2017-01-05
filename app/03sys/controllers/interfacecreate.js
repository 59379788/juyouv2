module.exports = function($scope, formconfig, urlmodel){

	formconfig.start({
		'title' : '创建接口',
		'formtitle' : '接口基本信息',
		'elements' : urlmodel(),
		'save' : {
			'url' : '/api/as/sc/sysfun/save',
			'to' : 'app.sys_interface_list'
		}
	}, $scope);

};