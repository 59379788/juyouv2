

var configjq = function(){

 	return {

        easyPieChart:   ['./app/998mstp/vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
        //easyPieChart:   [require('../app/998mstp/vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js')],
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

}();

module.exports = configjq;