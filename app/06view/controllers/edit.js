module.exports = function($scope, formconfig, $stateParams, viewmodel){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '景区详情',
		'formtitle' : '景区基本信息',
		'elements' : viewmodel(),
		'info' : {
			'url' : '/api/ac/tc/placeview/info',
			'para' : {'id' : id}
		},
		'save' : {
			'url' : '/api/ac/tc/placeview/create',
			'to' : 'app.sys_view_list',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};