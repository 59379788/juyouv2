module.exports = function($scope, sysmodulelist, $state, sysmoduledelete){

	function init(){
		sysmodulelist.save({}, function(res){
	
			if(res.errcode !== 0){
				alert(res.errmsg);
				return ;
			}
	
			var data = res.data;
			var targetobj = {};
			var targetarr = [];
			//------------------ 分堆 --------------------//
			for(var i = 0, j = data.length; i < j; i++)
			{
				var tmp = data[i];
				if(angular.isUndefined(targetobj[tmp.system_code]))
				{
					targetobj[tmp.system_code] = {};
					targetobj[tmp.system_code]['name'] = tmp.system_name;
					targetobj[tmp.system_code]['code'] = tmp.system_code;
					targetobj[tmp.system_code]['arr'] = [];
					targetarr.push(targetobj[tmp.system_code]);
				}
				targetobj[tmp.system_code]['arr'].push(tmp);
			}
			//------------------ 分堆 --------------------//
	
			$scope.objs = targetarr;
	
		});
	}
	init();

	$scope.edit = function(item){
		$state.go('app.sys_module_edit', {'id' : item.id});
	};

	$scope.delete = function(item){
		if(!confirm("确定要删除模块["+item.system_module_name+"]吗？")){
			return ;
		}
		sysmoduledelete.save({'id' : item.id}, function(res){
			if(res.errcode === 0){
				init();
			}else{
				alert(res.errmsg);
				return ;
			}
		});
	};
	
};