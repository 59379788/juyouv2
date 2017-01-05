module.exports = function($scope, sysmenulist, transData, sysmenusave, sysmodulelists){

	$scope.modulearr = [];	//模块数组

	$scope.modulecode = ''	//模块编号

	$scope.what = 'modify';//'submenu','fid'

	$scope.obj = {};	//菜单对象

	var bakobj = {};	//修改父节点的时候备份用。

	var treedata = [];	//菜单树数据

	$scope.predicate = '';
    $scope.comparator = false;


	//系统模块列表
	sysmodulelists.get({}, function(res){

		$scope.modulearr = res.data;

		$scope.modulecode = res.data[0].value;

		init();
 
	});

	//清空方法
	function clear(){
		$scope.obj = {
			'id' : '',
			'system_menu_fid' : '',
			'system_module_code' : '',
			'system_menu_code' : '',
			'system_menu_check_flag' : '1',
			'system_menu_auth_code' : '1',
			'system_menu_start_flag' : '0',
			'system_menu_name' : '',
			'system_menu_sort' : 0,
			'system_menu_open_type' : '',
			'system_menu_mobile_start_flag' : '1',
			'system_menu_url' : ''
		};
		$scope.what = 'modify';
		bakobj = {};
	}
	clear();

	//初始化菜单树
	function init(){
		sysmenulist.get({'system_module_code' : $scope.modulecode}, function(res){
			if(res.errcode !== 0){
				alert(res.errmsg);
				return ;
			}
			//分堆
			treedata = transData(res.data, 'id', 'system_menu_fid', 'children');
			$scope.dataForTheTree = treedata;
		});
	}

	//菜单树选中事件
	$scope.showSelected = function(sel) {
        $scope.obj = sel;
    };

    //修改菜单信息提交
    $scope.gogogo = function(item){
    	item['system_module_code'] = $scope.modulecode;
    	sysmenusave.save(item, function(res){
    		if(res.errcode === 0){
    			clear();
    			init();
    		}else{
    			alert(err.errmsg);
    		}
    	});
    };

    //添加下级菜单
    $scope.addsubmenu = function(item){
    	clear();
    	$scope.what = 'submenu';
		$scope.obj.system_menu_fid = item.id;
    };

    //取消
    $scope.cancel = function(){
    	clear();
    };

    //改变父节点
    $scope.changefid = function(item){
    	$scope.what = 'fid';
    	bakobj = angular.copy(item);
    };

    //改变父节点-保存
    $scope.gogogofid = function(id){
    	bakobj.system_menu_fid = id;
    	sysmenusave.save(bakobj, function(res){
    		console.log(res);
    		if(res.errcode === 0){
    			clear();
    			init();
    		}else{
    			alert(err.errmsg);
    		}
    	});
    };

    //模块下拉框选择事件
    $scope.onSelect = function(item, model){
    	$scope.modulecode = model;
    	init();
    };
    
    //$scope.expandedNodes = $scope.dataForTheTree;

};