module.exports = function($scope, $stateParams, formconfig, urlmodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '接口详情',
		'formtitle' : '接口基本信息',
		'elements' : urlmodel(),
		'info' : {
			'url' : '/api/as/sc/sysfun/getById',
			'para' : {'id' : id}
		},
		'save' : {
			'url' : '/api/as/sc/sysfun/save',
			'to' : 'app.sys_interface_list',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};