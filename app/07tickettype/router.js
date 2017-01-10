 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

   //票种列表
    .state('app.tickettype_list', {
        url: "/tickettype/list.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/table.html'),
                controller : 'tickettypelist',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
        }
    })
    
    //创建票种
    .state('app.tickettype_create', {
        url: "/tickettype/create.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'tickettypecreate',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            model : function(tickettypeservice){
                return tickettypeservice.model;
            }
        }
    })

    //票种详情
    .state('app.tickettype_info', {
        url: "/tickettype/info/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'tickettypeinfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            model : function(tickettypeservice){
                return tickettypeservice.model;
            }
        }
    })

    //票种编辑
    .state('app.tickettype_edit', {
        url: "/tickettype/edit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'tickettypeedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            model : function(tickettypeservice){
                return tickettypeservice.model;
            }
        }
    })

	;

};

module.exports = router;