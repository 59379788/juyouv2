module.exports = function($scope, $stateParams, formconfig, resmodel){

	var id = $stateParams.id;

	console.log(id);

	formconfig.start({
		'title' : '出参详情',
		'formtitle' : '接口出参信息',
		'elements' : resmodel(),
		'info' : {
			'url' : '/api/as/sc/sysfunres/getById',
			'para' : {'id' : id}
		},
		'save' : {
			'url' : '/api/as/sc/sysfunres/save',
			'to' : 'app.sys_interface_res',
			'para' : {'id' : $stateParams.id},
			'urlPara' : function(item){
				return {'id' : item.data['api_url_id']}
			}
		}
	}, $scope);

	$scope.form = formconfig;

};