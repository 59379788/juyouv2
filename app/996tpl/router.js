 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){


 	$stateProvider
 
	
 	//通用列表
    .state('app.tpl_table', {
        url: "/table/:id",
        views: {
			'main@' : {
				template : require('../996tpl/views/table.html'),
				controller : 'tpltable',
			}
		},
		resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
            urllist : function(sysservice){
                return sysservice.urllist();
            }
        }
    })




    //通用表单
    .state('app.tpl_form', {
        url: "/form/:id",
        views: {
            'main@' : {
                template : require('./views/form.html'),
                controller : 'tplform',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return formservice.formconfig();
            }
        }
    })
    
 	


	;

};

module.exports = router;