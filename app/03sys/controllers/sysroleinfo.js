module.exports = function($scope, formconfig, $stateParams, sysrolemodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '角色详情',
		'formtitle' : '角色基本信息',
		'elements' : sysrolemodel(),
		'info' : {
			'url' : '/api/as/sc/sysrole/getById',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};