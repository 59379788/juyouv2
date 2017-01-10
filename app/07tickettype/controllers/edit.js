module.exports = function($scope, formconfig, $stateParams, model){

	var id = $stateParams.id;

	formconfig.start({
		'title' : '票种详情',
		'formtitle' : '票种基本信息',
		'elements' : model(),
		'info' : {
			'url' : '/api/ac/tc/placeview/info',
			'para' : {'id' : id}
		},
		'save' : {
			'url' : '/api/ac/tc/placeview/create',
			'to' : 'app.view_list',
			'para' : {'id' : id}
		}
	}, $scope);

	$scope.form = formconfig;

};