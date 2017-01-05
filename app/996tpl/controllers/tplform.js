module.exports = function($scope, $stateParams, formconfig){

	var id = $stateParams.id;

	var config = {};

	if(id == 'syssignurl')
	{
		config = {
			'title' : '创建接口',
			'formtitle' : '接口基本信息',
			'elements' : [
		        {
		            'title' : '应用编码',
		            'id' : 'appid',
		            'type' : 'text',
		            'required' : true,
		            'placeholder' : '必填',
		        },
		        {
		            'title' : '接口地址',
		            'id' : 'url',
		            'type' : 'text',
		            'required' : true,
		            'placeholder' : '必填',
		        },
		        {
		            'title' : '可用',
		            'id' : 'state',
		            'type' : 'switch',
		            'open' : 0,
		            'close' : 1,
		            'value' : 0
		        },
		        {
		            'title' : '排序',
		            'id' : 'sort',
		            'type' : 'number',
		            'value' : 0,
		        },
		        {
		            'title' : '创建者',
		            'id' : 'create_by',
		            'type' : 'static',
		        },
		        {
		            'title' : '创建时间',
		            'id' : 'create_date',
		            'type' : 'static',
		        },
		        {
		            'title' : '更新者',
		            'id' : 'update_by',
		            'type' : 'static',
		        },
		        {
		            'title' : '更新时间',
		            'id' : 'update_date',
		            'type' : 'static',
		        },
		        {
		            'title' : '备注信息',
		            'id' : 'remarks',
		            'type' : 'text',
		        },
		    ],
			'save' : {
				'from' : '/api/as/sc/syssignurl/save',
				'to' : 'app.sys_interface_list'
			}
		}
	}

	formconfig.start(config, $scope);

};