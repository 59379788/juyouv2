/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

		.state('app', {
			abstract: true,
			url: '/app',
			//template : require('./views/app.html'),
			//templateUrl: './app/998mstp/tpl/app.html'
			views: {
		        'header': {
			        template : require('./views/header.html'),
			        //controller : 'HeaderController'
			    },
			    'aside': {
			        template : require('./views/aside.html'),
			        //controller : 'HeaderController'
			    },
			    'settings': {
			        template : require('./views/settings.html'),
			        //controller : 'HeaderController'
			    },
			    
			    // 'sidebar' : {
			    // 	template : require('./views/sidebar.html'),
			    //     controller : 'SidebarController'
			    // },
			    // 'quicksidebar' : {
			    // 	template : require('./views/quick-sidebar.html'),
			    //     controller : 'QuickSidebarController'
			    // },
			    // 'pagehead' : {
			    // 	template : require('./views/page-head.html'),
			    //     controller : 'PageHeadController'
			    // },
			    // 'footer' : {
			    // 	template : require('./views/footer.html'),
			    //     controller : 'FooterController'
			    // }
			    // ,
			    // '' : {
			    // 	template : require('./views/main.html'),
			    //     //controller : 'FooterController'
			    // }
		    } 
		})


 
	// .state('app', {
	// 	url : '/app',
	// 	abstract: true,
	// 	//template : require('./views/main.html'),
	//     views: {
	//         'header': {
	// 	        template : require('./views/header.html'),
	// 	        controller : 'HeaderController'
	// 	    },
	// 	    'sidebar' : {
	// 	    	template : require('./views/sidebar.html'),
	// 	        controller : 'SidebarController'
	// 	    },
	// 	    'quicksidebar' : {
	// 	    	template : require('./views/quick-sidebar.html'),
	// 	        controller : 'QuickSidebarController'
	// 	    },
	// 	    'pagehead' : {
	// 	    	template : require('./views/page-head.html'),
	// 	        controller : 'PageHeadController'
	// 	    },
	// 	    'footer' : {
	// 	    	template : require('./views/footer.html'),
	// 	        controller : 'FooterController'
	// 	    }
	// 	    // ,
	// 	    // '' : {
	// 	    // 	template : require('./views/main.html'),
	// 	    //     //controller : 'FooterController'
	// 	    // }
	//     }          
	// })


 //    .state('app.null', {
 //      url: '/null',
 //      //controller : 'dashboard',
 //      //template: require('./views/main.html'),
 //     //  views: {
	     
	// 	   //  'main@' : {
	// 	   //  	template : require('./views/main.html')
	// 	   //      //controller : 'FooterController'
	// 	   //  }
	//     // } 
      
 //    })



 //    .state('app.test', {
 //      url: '/test.html',
 //      //controller : 'dashboard',
 //      //template: require('./views/main.html'),
 //      views: {
	// 	    'main@' : {
	// 	    	template : require('./views/test.html')
	// 	        //controller : 'FooterController'
	// 	    }
	//     } 
      
 //    })




	;

};

module.exports = router;