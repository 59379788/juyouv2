module.exports = function($scope, tableconfig, $state){

	tableconfig.start($scope, {
		'url' : '/api/ac/tc/placeView/list',
		'col' : [
			{'title' : '类型', 'col' : 'type'},
			{'title' : '名称', 'col' : 'name'},
			{'title' : '编号', 'col' : 'code'},
			{'title' : '城市', 'col' : 'city'},
			{'title' : '操作', 'col' : 'btn'},
		],
		'btn' : [
			{'title' : '查看详情', 'onclick' : 'info'},
			{'title' : '编辑', 'onclick' : 'edit'},
			{'title' : '删除', 'onclick' : 'delete'},
		],
		'search' : [
			{'title' : '名称', 'type' : 'txt', 'name' : 'name', 'show' : true},
			{'title' : '编号', 'type' : 'txt', 'name' : 'code', 'show' : true},
			{'title' : '城市', 'type' : 'txt', 'name' : 'city'},
			{'title' : '类型', 'type' : 'txt', 'name' : 'type'},
		],
		'title' : '景区列表',
		'info' : {
			'to' : 'app.view_info',
		},
		'delete' : {
			'url' : '/api/ac/tc/placeView/delete',
		},
		'edit' : {
			'to' : 'app.view_edit'
		}
	});
	$scope.table = tableconfig;

};