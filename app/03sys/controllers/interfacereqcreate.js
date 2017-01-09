module.exports = function($scope, formconfig, reqmodel, $stateParams){

	formconfig.start({
		'title' : '创建接口参数',
		'formtitle' : '接口参数基本信息',
		'elements' : reqmodel(),
		'save' : {
			'url' : '/api/as/sc/sysfunreq/save',
			'to' : 'app.sys_interface_req',
			'para' : {'api_url_id' : $stateParams.id},
			'urlPara' : {'id' : $stateParams.id}
		}
	}, $scope);

};