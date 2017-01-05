module.exports = function($scope, formconfig, sysmenumodel){

	formconfig.start({
		'title' : '创建菜单',
		'formtitle' : '菜单基本信息',
		'elements' : sysmenumodel(),
		'save' : {
			'url' : '/api/as/sc/sysmenu/save',
			'to' : 'app.sys_menu_list'
		}
	}, $scope);

};