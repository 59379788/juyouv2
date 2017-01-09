module.exports = function($scope, formconfig, viewmodel){

	formconfig.start({
		'title' : '创建景区',
		'formtitle' : '景区基本信息',
		'elements' : viewmodel(),
		'save' : {
			'url' : '/api/ac/tc/placeview/create',
			'to' : 'app.sys_view_list'
		}
	}, $scope);

};