module.exports = function($scope, $stateParams, formconfig, reqmodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '入参详情',
		'formtitle' : '接口入参信息',
		'elements' : reqmodel(),
		'info' : {
			'url' : '/api/as/sc/sysfunreq/getById',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};