module.exports = function($scope, formconfig, resmodel, $stateParams){

	formconfig.start({
		'title' : '创建接口参数',
		'formtitle' : '接口参数基本信息',
		'elements' : resmodel(),
		'save' : {
			'url' : '/api/as/sc/sysfunres/save',
			'to' : 'app.sys_interface_res',
			'para' : {'api_url_id' : $stateParams.id},
			'urlPara' : {'id' : $stateParams.id}
		}
	}, $scope);

};