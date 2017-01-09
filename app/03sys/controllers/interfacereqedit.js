module.exports = function($scope, $stateParams, formconfig, reqmodel){

	var id = $stateParams.id;

	console.log(id);

	formconfig.start({
		'title' : '入参详情',
		'formtitle' : '接口入参信息',
		'elements' : reqmodel(),
		'info' : {
			'url' : '/api/as/sc/sysfunreq/getById',
			'para' : {'id' : id}
		},
		'save' : {
			'url' : '/api/as/sc/sysfunreq/save',
			'to' : 'app.sys_interface_req',
			'para' : {'id' : $stateParams.id},
			//'urlPara' : {'id' : formconfig.result['api_url_id']}
			'urlPara' : function(item){
				return {'id' : item.data['api_url_id']}
			}
		}
	}, $scope);

	$scope.form = formconfig;

};