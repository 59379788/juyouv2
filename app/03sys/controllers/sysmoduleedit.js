module.exports = function($scope, formconfig, $stateParams, sysmodulemodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '模块详情',
		'formtitle' : '模块基本信息',
		'elements' : sysmodulemodel(),
		'info' : {
			'url' : '/api/as/sc/sysmodule/getById',
			'para' : {'id' : id}
		},
		'save' : {
			'url' : '/api/as/sc/sysmodule/save',
			'to' : 'app.sys_module_list',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};