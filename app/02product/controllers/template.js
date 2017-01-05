module.exports = function($scope, $state){

	$scope.create = function(type){

		if(type === 'eticket')
		{
			$state.go('app.product_create');
		}

	};
};