module.exports = function($scope, formconfig, $stateParams, viewmodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '景区详情',
		'formtitle' : '景区基本信息',
		'elements' : viewmodel(),
		'info' : {
			'url' : '/api/ac/tc/placeView/info',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};