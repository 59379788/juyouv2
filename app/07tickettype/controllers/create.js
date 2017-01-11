module.exports = function($scope, formconfig, model){

	formconfig.start({
		'title' : '创建票种',
		'formtitle' : '票种基本信息',
		'elements' : model(),
		'save' : {
			'url' : '/api/ac/tc/ticketType/create',
			'to' : 'app.tickettype_list'
		}
	}, $scope);

};