module.exports = function($scope, formconfig, viewmodel){

	formconfig.start({
		'title' : '创建景区',
		'formtitle' : '景区基本信息',
		'elements' : viewmodel(),
		'save' : {
			'url' : '/api/ac/tc/placeView/create',
			'to' : 'app.view_list',
			'para' : {'type' : 'J'}
		}
	}, $scope);

};