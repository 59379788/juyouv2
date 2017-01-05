module.exports = function($scope, formconfig, $stateParams, sysmenumodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '菜单详情',
		'formtitle' : '菜单基本信息',
		'elements' : sysmenumodel(),
		'info' : {
			'url' : '/api/as/sc/sysmenu/getById',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};