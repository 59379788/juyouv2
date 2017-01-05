 /**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider
 
	
 	.state('app.calendar', {
          url: '/calendar',
          //templateUrl: './app/998mstp/tpl/app_calendar.html',
          //template : require('./views/app_calendar.html'),
          // use resolve to load other dependences
          views: {
		 
			    'main@' : {
			    	template : require('./views/app_calendar.html'),
			        //controller : 'supplier_dashboard'
			    }
			},
          resolve: {
              deps: ['$ocLazyLoad', 'uiLoad',
                function( $ocLazyLoad, uiLoad ){
                  return uiLoad.load(
                    ['./app/998mstp/vendor/jquery/fullcalendar/fullcalendar.css',
                      './app/998mstp/vendor/jquery/fullcalendar/theme.css',
                      './app/998mstp/vendor/jquery/jquery-ui-1.10.3.custom.min.js',
                      './app/998mstp/vendor/libs/moment.min.js',
                      './app/998mstp/vendor/jquery/fullcalendar/fullcalendar.min.js',
                      './app/998mstp/js/app/calendar/calendar.js']
                  ).then(
                    function(){
                      return $ocLazyLoad.load('ui.calendar');
                    }
                  )
              }]
          }
      })




	;

};

module.exports = router;