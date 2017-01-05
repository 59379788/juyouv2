var run = function($rootScope,   $state,   $stateParams){

 	$rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;    
};

module.exports = run;