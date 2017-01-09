module.exports = function($scope, tableconfig, urllist, $state){

	tableconfig.start($scope, {

		'url' : urllist,
		'col' : [
			{'title' : '系统模块', 'col' : 'system_module_code', 'click' : 'edit'},
			{'title' : '接口名称', 'col' : 'name', 'click' : 'info'},
			{'title' : '接口地址', 'col' : 'url'},
			{'title' : '类型', 'col' : 'type'},
			{'title' : '类型', 'col' : 'auth_type'},
			{'title' : '入参', 'clickname' : '编辑', 'click' : 'parain'},
			{'title' : '出参', 'clickname' : '编辑', 'click' : 'paraout'},
			{'title' : '操作', 'col' : 'btn'},
		],
		'btn' : [
			{'title' : '查看详情', 'onclick' : 'info'},
			{'title' : '编辑', 'onclick' : 'edit'},
			{'title' : '删除', 'onclick' : 'delete'},
			{'title' : '编辑入参', 'onclick' : 'parain'},
			{'title' : '编辑出参', 'onclick' : 'paraout'},
		],
		'search' : [
			{'title' : '应用编码', 'type' : 'txt', 'name' : 'appid', 'show' : true},
			{'title' : '接口地址', 'type' : 'txt', 'name' : 'url', 'show' : true},
			{'title' : '类型', 'type' : 'select', 'name' : 'state', 
				'sel' : [
					{'label' : '全部', value : ''},
					{'label' : '可用', value : 0},
					{'label' : '不可用', value : 1}
				]
			}
		],
		'title' : '接口列表',
		'info' : {
			'to' : 'app.sys_interface_info',
		},
		'delete' : {
			'url' : '/api/as/sc/syssignurl/delete'
		},
		'edit' : {
			'to' : 'app.sys_interface_edit'
		}

	});
	$scope.table = tableconfig;


	$scope.paraout = function(item){
		$state.go('app.sys_interface_res', {'id' : item.id});
	}

	$scope.parain = function(item){
		$state.go('app.sys_interface_req', {'id' : item.id});
	}

};