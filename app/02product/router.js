 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){


 	$stateProvider
 
	
 	//产品模板
 	//分销商
	.state('app.product_template', {
		url: '/product/template.html',
		views: {
	 
		    'main@' : {
		    	template : require('./views/template.html'),
		        controller : 'template'
		    }
		}
	})



    //创建产品1
	.state('app.product_create', {
		url: '/product/create.html',
		views: {
			'main@' : {
				template : require('./views/create.html'),
				controller : 'create'
			}
		}
    })



    // Advanced Datatables
    .state('app.product_list', {
        url: "/product/list.html",
        views: {
			'main@' : {
				template : require('../996tpl/views/table.html'),
				controller : 'list',
			}
		},
		resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            }
        }
    })



 //    //产品列表
	// .state('app.product_list', {
	// 	url: '/product/list.html',
	// 	views: {
	// 		'main@' : {
	// 			template : require('./views/list.html'),
	// 			controller : 'list'
	// 		}
	// 	}
	// 	,
	// 	resolve: {
	// 	    deps: ['$ocLazyLoad', function($ocLazyLoad) {
	// 	        return $ocLazyLoad.load(
	// 	        {
	// 	            name: 'listcss',
	// 	            insertBefore: '#ng_load_plugins_after', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
	// 	            files: [
	// 	                './app/999metronic/assets/global/plugins/datatables/datatables.min.css',
	// 	                './app/999metronic/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
	// 	                './app/999metronic/assets/global/scripts/datatable.js',
	// 	                './app/999metronic/assets/global/plugins/datatables/datatables.min.js',
	// 	                './app/999metronic/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js',
	// 	                //'./app/999metronic/assets/pages/scripts/table-datatables-managed.min.js'
	// 	            ] 
	// 	        }
	// 	        // ,
	// 	        // {
	// 	        // 	name: 'listjs',
	// 	        //     //insertBefore: '#ng_load_plugins_after', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
	// 	        //     files: [
	// 	        //         './app/999metronic/assets/global/scripts/datatable.js',
	// 	        //         './app/999metronic/assets/global/plugins/datatables/datatables.min.js',
	// 	        //         './app/999metronic/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js',
	// 	        //         './app/999metronic/assets/pages/scripts/table-datatables-managed.min.js'
	// 	        //     ] 
	// 	        // }

	// 	        );
	// 	    }]



	// 	//<script src="../assets/global/scripts/datatable.js" type="text/javascript"></script>
 //        //<script src="../assets/global/plugins/datatables/datatables.min.js" type="text/javascript"></script>
 //        //<script src="../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js" type="text/javascript"></script>
 //        //<script src="../assets/pages/scripts/table-datatables-managed.min.js" type="text/javascript"></script>


	// 	}
 //    })


	//分销商
    // .state('app.distributor_dashboard', {
    //   url: '/distributor/dashboard.html',
    //   //controller : 'dashboard',
    //   //template: require('./views/main.html'),
    //   views: {
	     
		  //   'main@' : {
		  //   	template : require('./views/distributor_dashboard.html')
		  //       //controller : 'FooterController'
		  //   }
	   //  } 
      
    // })





	;

};

module.exports = router;