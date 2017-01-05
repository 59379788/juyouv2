module.exports = function($scope, tableconfig, sysrolelist, $state){

	tableconfig.start($scope, {

		'url' : '/api/as/sc/sysrole/getRoleList',
		'col' : [
			{'title' : '角色编号', 'col' : 'system_role_code'},
			{'title' : '角色名称', 'col' : 'system_role_name'},
			{'title' : '英文名称', 'col' : 'system_role_en_name'},
			{'title' : '角色别名', 'col' : 'system_role_alias'},
			{'title' : '角色类型', 'col' : 'system_role_type'},
			{'title' : '备注信息', 'col' : 'system_role_remark'},
			{'title' : '操作', 'col' : 'btn'},
		],
		'btn' : [
			{'title' : '查看详情', 'onclick' : 'info'},
			{'title' : '编辑', 'onclick' : 'edit'},
			{'title' : '删除', 'onclick' : 'delete'},
		],
		'search' : [
			{'title' : '角色编号', 'type' : 'txt', 'name' : 'system_role_code', 'show' : true},
			{'title' : '角色类型', 'type' : 'select', 'name' : 'system_role_type', 
				'sel' : [
					{'label' : '全部', value : ''},
					{'label' : '可用', value : 0},
					{'label' : '不可用', value : 1}
				], 'show' : true
			}
		],
		'title' : '角色列表',
		'info' : {
			'to' : 'app.sys_role_info',
		},
		'delete' : {
			'url' : '/api/as/sc/sysrole/delete'
		},
		'edit' : {
			'to' : 'app.sys_role_edit'
		}

	});
	$scope.table = tableconfig;

};