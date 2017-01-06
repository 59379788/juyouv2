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
    .state('app.sys_system_info', {
        url: "/sys/systeminfo/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'systeminfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            systemmodel : function(sysservice){
                return sysservice.systemmodel;
            }
        }
    })



    //系统编辑
    .state('app.sys_system_edit', {
        url: "/sys/systemedit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'systemedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            systemmodel : function(sysservice){
                return sysservice.systemmodel;
            }
        }
    })


    


	;

};

module.exports = router;