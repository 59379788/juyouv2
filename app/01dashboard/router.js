/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 		//供应商
		.state('app.supplier_dashboard', {
			url: '/supplier_dashboard',
			//template: require('./views/supplier_dashboard.html'),
			//templateUrl: './views/supplier_dashboard.html',
			// resolve: {
			// 	deps: ['$ocLazyLoad',function( $ocLazyLoad ){
			// 		return $ocLazyLoad.load(['./app/998mstp/js/controllers/chart.js']);
			// 	}]
			// }
			views: {
		 
			    'main@' : {
			    	template : require('./views/supplier_dashboard.html'),
			       	controller : 'supplier_dashboard'
			    }
			}
		})



		//分销商
		.state('app.distributor_dashboard', {
			url: '/supplier_dashboard',
			views: {
		 
			    'main@' : {
			    	template : require('./views/distributor_dashboard.html'),
			        //controller : 'supplier_dashboard'
			    }
			}
		})


	;

};

module.exports = router;