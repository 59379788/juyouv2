 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){


 	$stateProvider


    //系统列表
    .state('app.sys_system_list', {
        url: "/sys/systemlist.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/table.html'),
                controller : 'systemlist',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
            systemlist : function(sysservice){
                return sysservice.systemlist();
            },
            systemdel : function(sysservice){
                return sysservice.systemdel();
            }
        }
    })
    
    //创建系统
    .state('app.sys_system_create', {
        url: "/sys/systemcreate.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'systemcreate',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            date2str : function(utilservice){
                return utilservice.date2str;
            },
            systemmodel : function(sysservice){
                return sysservice.systemmodel;
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


    //模块列表
    .state('app.sys_module_list', {
        url: "/sys/modulelist.html",
        views: {
            'main@' : {
                template : require('./views/sysmodulelist.html'),
                controller : 'sysmodulelist',
            }
        },
        resolve:{
            sysmodulelist : function(sysservice){
                return sysservice.sysmodulelist();
            },
            sysmoduledelete : function(sysservice){
                return sysservice.sysmoduledelete();
            }
        }
    })



    //创建模块
    .state('app.sys_module_create', {
        url: "/sys/modulecreate.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysmodulecreate',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysmodulemodel : function(sysservice){
                return sysservice.sysmodulemodel;
            }
        }
    })




    //模块详情
    .state('app.sys_module_info', {
        url: "/sys/moduleinfo/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysmoduleinfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysmodulemodel : function(sysservice){
                return sysservice.sysmodulemodel;
            }
        }
    })



    //模块编辑
    .state('app.sys_module_edit', {
        url: "/sys/moduleedit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysmoduleedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysmodulemodel : function(sysservice){
                return sysservice.sysmodulemodel;
            }
        }
    })




 
	
 	//接口列表
    .state('app.sys_interface_list', {
        url: "/sys/interfacelist.html",
        views: {
			'main@' : {
				template : require('../996tpl/views/table.html'),
				controller : 'interfacelist',
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


    //接口入参
    .state('app.sys_interface_req', {
        url: "/sys/interfacereq/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/table.html'),
                controller : 'interfacereq',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
            // urllist : function(sysservice){
            //     return sysservice.urllist();
            // }
        }
    })


    //接口出参
    .state('app.sys_interface_res', {
        url: "/sys/interfaceres/:id",
        views: {
            'main@' : {
                template : require('./views/interfaceres.html'),
                controller : 'interfaceres',
            }
        },
        resolve:{
            // tableconfig : function(tableservice){
            //     return tableservice.tableconfig();
            // },
            // urllist : function(sysservice){
            //     return sysservice.urllist();
            // }
        }
    })
    
 	//创建接口
    .state('app.sys_interface_create', {
        url: "/sys/interfacecreate.html",
        views: {
			'main@' : {
				template : require('../996tpl/views/form.html'),
				controller : 'interfacecreate',
			}
		},
		resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            date2str : function(utilservice){
                return utilservice.date2str;
            },
            
            urlmodel : function(sysservice){
                return sysservice.urlmodel;
            }
        }
    })



    //接口详情
    .state('app.sys_interface_info', {
        url: "/sys/interfaceinfo/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'interfaceinfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            urlmodel : function(sysservice){
                return sysservice.urlmodel;
            }
        }
    })


    //接口编辑
    .state('app.sys_interface_edit', {
        url: "/sys/interfaceedit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'interfaceedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            urlmodel : function(sysservice){
                return sysservice.urlmodel;
            }
        }
    })









    //菜单列表
    .state('app.sys_menu_list', {
        url: "/sys/menulist.html",
        views: {
            'main@' : {
                template : require('./views/menu.html'),
                controller : 'sysmenulist',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
            sysmenulist : function(sysservice){
                return sysservice.sysmenulist();
            },
            transData : function(utilservice){
                return utilservice.transData;
            },
            sysmenusave : function(sysservice){
                return sysservice.sysmenusave();
            },
            sysmodulelists : function(sysservice){
                return sysservice.sysmodulelists();
            }

        }
    })
    
    //创建菜单
    .state('app.sys_menu_create', {
        url: "/sys/menucreate.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysmenucreate',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysmenumodel : function(sysservice){
                return sysservice.sysmenumodel;
            }
        }
    })



    //菜单详情
    .state('app.sys_menu_info', {
        url: "/sys/menuinfo/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysmenuinfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            urlmodel : function(sysservice){
                return sysservice.urlmodel;
            }
        }
    })


    //菜单编辑
    .state('app.sys_menu_edit', {
        url: "/sys/menuedit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysmenuedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            urlmodel : function(sysservice){
                return sysservice.urlmodel;
            }
        }
    })







    //角色列表
    .state('app.sys_role_list', {
        url: "/sys/rolelist.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/table.html'),
                controller : 'sysrolelist',
            }
        },
        resolve:{
            tableconfig : function(tableservice){
                return tableservice.tableconfig();
            },
            sysrolelist : function(sysservice){
                return sysservice.sysrolelist();
            }
        }
    })
    
    //创建角色
    .state('app.sys_role_create', {
        url: "/sys/rolecreate.html",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysrolecreate',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysrolemodel : function(sysservice){
                return sysservice.sysrolemodel;
            }
        }
    })




    //角色详情
    .state('app.sys_role_info', {
        url: "/sys/roleinfo/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysroleinfo',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysrolemodel : function(sysservice){
                return sysservice.sysrolemodel;
            }
        }
    })



    //角色编辑
    .state('app.sys_role_edit', {
        url: "/sys/roleedit/:id",
        views: {
            'main@' : {
                template : require('../996tpl/views/form.html'),
                controller : 'sysroleedit',
            }
        },
        resolve:{
            formconfig : function(formservice){
                return formservice.formconfig();
            },
            sysrolemodel : function(sysservice){
                return sysservice.sysrolemodel;
            }
        }
    })


	;

};

module.exports = router;