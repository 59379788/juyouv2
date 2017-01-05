// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   ['./app/998mstp/vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
      sparkline:      ['./app/998mstp/vendor/jquery/charts/sparkline/jquery.sparkline.min.js'],
      plot:           ['./app/998mstp/vendor/jquery/charts/flot/jquery.flot.min.js', 
                          './app/998mstp/vendor/jquery/charts/flot/jquery.flot.resize.js',
                          './app/998mstp/vendor/jquery/charts/flot/jquery.flot.tooltip.min.js',
                          './app/998mstp/vendor/jquery/charts/flot/jquery.flot.spline.js',
                          './app/998mstp/vendor/jquery/charts/flot/jquery.flot.orderBars.js',
                          './app/998mstp/vendor/jquery/charts/flot/jquery.flot.pie.min.js'],
      slimScroll:     ['./app/998mstp/vendor/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       ['./app/998mstp/vendor/jquery/sortable/jquery.sortable.js'],
      nestable:       ['./app/998mstp/vendor/jquery/nestable/jquery.nestable.js',
                          './app/998mstp/vendor/jquery/nestable/nestable.css'],
      filestyle:      ['./app/998mstp/vendor/jquery/file/bootstrap-filestyle.min.js'],
      slider:         ['./app/998mstp/vendor/jquery/slider/bootstrap-slider.js',
                          './app/998mstp/vendor/jquery/slider/slider.css'],
      chosen:         ['./app/998mstp/vendor/jquery/chosen/chosen.jquery.min.js',
                          './app/998mstp/vendor/jquery/chosen/chosen.css'],
      TouchSpin:      ['./app/998mstp/vendor/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                          './app/998mstp/vendor/jquery/spinner/jquery.bootstrap-touchspin.css'],
      wysiwyg:        ['./app/998mstp/vendor/jquery/wysiwyg/bootstrap-wysiwyg.js',
                          './app/998mstp/vendor/jquery/wysiwyg/jquery.hotkeys.js'],
      dataTable:      ['./app/998mstp/vendor/jquery/datatables/jquery.dataTables.min.js',
                          './app/998mstp/vendor/jquery/datatables/dataTables.bootstrap.js',
                          './app/998mstp/vendor/jquery/datatables/dataTables.bootstrap.css'],
      vectorMap:      ['./app/998mstp/vendor/jquery/jvectormap/jquery-jvectormap.min.js', 
                          './app/998mstp/vendor/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                          './app/998mstp/vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                          './app/998mstp/vendor/jquery/jvectormap/jquery-jvectormap.css'],
      footable:       ['./app/998mstp/vendor/jquery/footable/footable.all.min.js',
                          './app/998mstp/vendor/jquery/footable/footable.core.css']
      }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      './app/998mstp/vendor/modules/ng-grid/ng-grid.min.js',
                      './app/998mstp/vendor/modules/ng-grid/ng-grid.min.css',
                      './app/998mstp/vendor/modules/ng-grid/theme.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      './app/998mstp/vendor/modules/angular-ui-select/select.min.js',
                      './app/998mstp/vendor/modules/angular-ui-select/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    './app/998mstp/vendor/modules/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['./app/998mstp/vendor/modules/angular-ui-calendar/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      './app/998mstp/vendor/modules/ngImgCrop/ng-img-crop.js',
                      './app/998mstp/vendor/modules/ngImgCrop/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      './app/998mstp/vendor/modules/angular-bootstrap-nav-tree/abn_tree_directive.js',
                      './app/998mstp/vendor/modules/angular-bootstrap-nav-tree/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      './app/998mstp/vendor/modules/angularjs-toaster/toaster.js',
                      './app/998mstp/vendor/modules/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      './app/998mstp/vendor/modules/textAngular/textAngular-sanitize.min.js',
                      './app/998mstp/vendor/modules/textAngular/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      './app/998mstp/vendor/modules/angular-slider/angular-slider.min.js',
                      './app/998mstp/vendor/modules/angular-slider/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      './app/998mstp/vendor/modules/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      './app/998mstp/vendor/modules/videogular/plugins/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      './app/998mstp/vendor/modules/videogular/plugins/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      './app/998mstp/vendor/modules/videogular/plugins/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      './app/998mstp/vendor/modules/videogular/plugins/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      './app/998mstp/vendor/modules/videogular/plugins/ima-ads.min.js'
                  ]
              }
          ]
      });
  }])
;