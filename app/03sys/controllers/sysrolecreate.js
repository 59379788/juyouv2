module.exports = function($scope, formconfig, sysrolemodel){

	formconfig.start({
		'title' : '创建角色',
		'formtitle' : '角色基本信息',
		'elements' : sysrolemodel(),
		'save' : {
			'url' : '/api/as/sc/sysrole/save',
			'to' : 'app.sys_role_list'
		}
	}, $scope);

};