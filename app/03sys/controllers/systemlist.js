module.exports = function($scope, tableconfig, systemlist, $state, systemdel){

	tableconfig.start($scope, {
		'url' : '/api/as/sc/syssystem/getSysList',
		'col' : [
			{'title' : '系统编号', 'col' : 'system_code'},
			{'title' : '系统名称', 'col' : 'system_name'},
			{'title' : '备注', 'col' : 'system_remark'},
			{'title' : '启用标志', 'col' : 'system_start_flag'},
			{'title' : '排序', 'col' : 'system_sort'},
			{'title' : '别名', 'col' : 'system_alias'},
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
		'title' : '系统列表',
		'info' : {
			'to' : 'app.sys_system_info',
		},
		'delete' : {
			'url' : '/api/as/sc/syssystem/delete',
		},
		'edit' : {
			'to' : 'app.sys_system_edit'
		}
	});
	$scope.table = tableconfig;

};