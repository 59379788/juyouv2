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










	;

};

module.exports = router;