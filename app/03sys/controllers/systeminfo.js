module.exports = function($scope, formconfig, $stateParams, systemmodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '接口详情',
		'formtitle' : '接口基本信息',
		'elements' : systemmodel(),
		'info' : {
			'url' : '/api/as/sc/syssystem/getById',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};