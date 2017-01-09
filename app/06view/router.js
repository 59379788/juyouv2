 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){


 	$stateProvider


    //景区列表
    .state('app.view_list', {
        url: "/view/viewlist.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/table.html'),
                controller : 'viewlist',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
        }
    })
    
    //创建景区
    .state('app.view_create', {
        url: "/view/viewcreate.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'viewcreate',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            }
            viewmodel : function(viewservice){
                return viewservice.viewmodel;
            }
        }
    })




    //系统详情
    .state('app.sys_view_info', {
        url: "/sys/viewinfo/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'viewinfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            viewmodel : function(viewservice){
                return viewservice.viewmodel;
            }
        }
    })



    //景区编辑
    .state('app.sys_view_edit', {
        url: "/sys/viewedit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'viewedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            viewmodel : function(viewservice){
                return viewservice.viewmodel;
            }
        }
    })


    


	;

};

module.exports = router;