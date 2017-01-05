var configlazyload = function($ocLazyLoadProvider){

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

};

module.exports = configlazyload;