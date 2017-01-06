 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){


 	$stateProvider


    //系统列表
    .state('login', {
        url: "/index.html",
        template : require('./views/login.html')
    })
    
    


	;

};

module.exports = router;