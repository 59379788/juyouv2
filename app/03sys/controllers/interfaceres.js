module.exports = function($scope, $state, $stateParams, tableconfig){

	console.log($stateParams.id);

	tableconfig.start($scope, {
		'url' : '/api/as/sc/sysfunres/getResList',
		'para' : {'api_url_id' : $stateParams.id},
		'page' : 'no',
		'col' : [
			{'title' : '主表关联id', 'col' : 'api_url_id'},
			{'title' : 'key字段', 'col' : 'key_code'},
			{'title' : '名称', 'col' : 'key_name'},
			{'title' : '类型', 'col' : 'dict_type'},
			{'title' : '操作', 'col' : 'btn'},
		],
		'btn' : [
			{'title' : '查看详情', 'onclick' : 'info'},
			{'title' : '编辑', 'onclick' : 'edit'},
			{'title' : '删除', 'onclick' : 'delete'},
		],
		'search' : [
			{'title' : '系统编号', 'type' : 'txt', 'name' : 'system_code', 'show' : true},
			{'title' : '系统名称', 'type' : 'txt', 'name' : 'system_name', 'show' : true},
			{'title' : '别名', 'type' : 'txt', 'name' : 'system_alias'},
		],
		'title' : '出参列表',
		'info' : {
			'to' : 'app.sys_interfaceres_info',
		},
		'delete' : {
			'url' : '/api/as/sc/sysfunres/delete',
		},
		'edit' : {
			'to' : 'app.sys_interfaceres_edit'
		},
		'btns' : [
			{'name' : '新增', 'click' : create1}
		]
	});
	$scope.table = tableconfig;

	function create1()
	{
		$state.go('app.sys_interfaceres_create' , {'id' : $stateParams.id})
	}
};