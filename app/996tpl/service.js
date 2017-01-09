/*
    调用方式：

    tableconfig.start($scope, {

        'url' : urllist,
        'col' : [
            {'title' : '名称', 'col' : 'name'},
            {'title' : '地址', 'col' : 'url'},
            {'title' : '类型', 'col' : 'auth_type'},
            {'title' : '服务编码', 'col' : 'center_code'},
            {'title' : '模块编码', 'col' : 'module_code'},
            {'title' : '功能编码', 'col' : 'function_code'},
            {'title' : '操作', 'col' : 'btn'},
        ],
        'btn' : [
            {'title' : '查看详情', 'onclick' : 'info'},
            {'title' : '编辑', 'onclick' : 'edit'},
            {'title' : '删除', 'onclick' : 'delete'},
            {'title' : '编辑入参', 'onclick' : 'parain'},
            {'title' : '编辑出参', 'onclick' : 'paraout'},
        ],
        'search' : [
            {'title' : '接口名称', 'type' : 'txt', 'name' : 'name', 'show' : true},
            {'title' : '接口地址', 'type' : 'txt', 'name' : 'url', 'show' : true},
            {'title' : '类型', 'type' : 'select', 'name' : 'auth_type', 
                'sel' : [
                    {'label' : '通用', value : 0},
                    {'label' : '管理侧', value : 1},
                    {'label' : '用户侧', value : 2}
                ]
            }
        ],
        'title' : '接口列表'
    });
    $scope.table = tableconfig;
*/
var service = function($q, $http, $resource, DTOptionsBuilder, DTColumnBuilder, CONST, $compile, $state){
    
    var vm = {};
    vm.url = '';
    vm.btn = [];
    vm.scope = {};
    vm.dtInstance = {};
    vm.dtdata = {};
    vm.dtColumns = [];
    vm.searcharr = [];
    //搜索项数据结构
    vm.searchformarr = [];
    vm.page = '';
    vm.title = '';

    vm.info = {};   //详情方法。
    vm.btns = [];
    vm.urlpara = {};
    
    vm.start = function(scope, config){

        vm.url = '';
        vm.btn = [];
        vm.scope = {};
        vm.dtInstance = {};
        vm.dtdata = {};
        vm.dtColumns = [];
        vm.searcharr = [];
        vm.searchformarr = [];
        vm.page = '';
        vm.title = '';
        vm.info = {};   //详情方法。
        vm.btns = [];
        vm.urlpara = {};

        var config = angular.extend({}, angular.isObject(config) ? config : {});

        var url = vm.url = config.url,   //必填
            urlpara = vm.urlpara = config.para,
            col = config.col,   //必填
            btn = vm.btn = config.btn,
            search = vm.searcharr = config.search,
            dataprop = config.dataprop || 'data.results',
            page = vm.page = config.page || 'yes',
            title = vm.title = config.title || '',
            btns = vm.btns = config.btns || [];
            multi = vm.multi = config.multi || false,   //多表格情况

            //--------------  详情默认方法 -------------------------//
            info = vm.info = config.info ? function(item){
                var para = {};
                if(config.info.para){
                    para[config.info.para] = item[config.info.para];
                }else{
                    para['id'] = item.id;
                }
                $state.go(config.info.to, para);
            } : undefined,
            //--------------  详情默认方法 -------------------------//


            //--------------  删除默认方法 -------------------------//
            del = vm.delete = config.delete ? function(item){
                if(!confirm("确定要删除这条数据吗，亲？")){
                    return ;
                }

                var para = {};
                if(config.delete.para){
                    para[config.delete.para] = item[config.delete.para];
                }else{
                    para['id'] = item.id;
                }
                $resource(config.delete.url, {}, {}).save(para, function(res){
                    console.log(res);
                    if(res.errcode === 0){
                        vm.search();
                    }else{
                        alert(res.errmsg);
                    }
                });
            } : undefined,
            //--------------  删除默认方法 -------------------------//


            //--------------  编辑默认方法 -------------------------//
            edit = vm.edit = config.edit ? function(item){
                var para = {};
                if(config.edit.para){
                    para[config.edit.para] = item[config.edit.para];
                }else{
                    para['id'] = item.id;
                }
                $state.go(config.edit.to, para);
            } : undefined,
            //--------------  编辑默认方法 -------------------------//

            language = config.language || CONST.datatableslang;

        if(!url || !col || !scope)
        {
            alert('参数错误')
            return ;
        }

        if(!angular.isArray(col))
        {
            alert('参数类型错误')
            return ;
        }

        vm.scope = scope;
        var tableDOM = 't<"row"<"col-xs-6"i><"col-xs-6"p>>';
        if(page === 'no') {
            dataprop = 'data';
            tableDOM = 't<"row">'
        }
        //----------- 搜索 -----------------------//
        //初始化搜索项
        for(var i = 0; i < search.length; i++)
        {
            if(search[i].show){
                vm.searchformarr.push(makesearchitem(search[i]));
            }
        }

        console.log(vm.searchformarr);



        vm.dtOptions = DTOptionsBuilder.newOptions()

            //.withPaginationType('full_numbers')
            .withDataProp(dataprop)
            .withLanguage(language)
            //.withDOM('t<"row"<"col-xs-2 pt5"l><"col-xs-4"i><"col-xs-6"p>>')
            .withDOM(tableDOM)
            .withOption('processing', true)
            .withOption('serverSide', true)
            .withOption('createdRow', createdRow)
            //.withOption('rowCallback', rowCallback)
            .withFnServerData(ServerData)

            ;

        for(var i = 0; i < col.length; i++)
        {
            var c = col[i];
            if(c.col === 'btn')
            {
                vm.dtColumns.push(DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
                    .renderWith(actionsHtml));
            }
            else if(angular.isDefined(c.click))
            {
                //c.col == undefined ? null : c.col
                vm.dtColumns.push(DTColumnBuilder.newColumn(null).withTitle(c.title).notSortable()
                    .renderWith((function(c){
                        return function(data, type, full, meta){
                            var txt = c.clickname ? c.clickname : data[c.col];
                            var fun = vm[c.click] ? 'table.' + c.click : c.click;
                            return '<a ng-click="'+fun+'(table.dtdata[\''+data.id+'\'])"">' + txt + '</a>';
                        }
                    })(c))
                );
            }
            else
            {
                vm.dtColumns.push(DTColumnBuilder.newColumn(c.col == undefined ? null : c.col).withTitle(c.title));
            }
        }
    };

    //点击搜索项下拉
    vm.searchtypeclick = function(item, search){
        angular.extend(search, makesearchitem(item));
    };
    //添加搜索项
    vm.addsearch = function(){
        vm.searchformarr.push(makesearchitem(vm.searcharr[0]));
    };

    vm.delsearch = function(index){
        vm.searchformarr.splice(index, 1);
    };

    //gogogogo
    vm.search = function(){
        vm.dtInstance.rerender();
    };

    //打开日历控件
    vm.open = function($event, item){
        $event.preventDefault();
        $event.stopPropagation();
        item.opened = true;
    };

    vm.someClickHandler = function(item) {
        vm.info(item);
    }

    //为datatables每一行绑定scope，很重要。
    function createdRow(row, data, dataIndex) {
    // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())(vm.scope);
    }

    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
        
        console.log(nRow);
        console.log(iDisplayIndex);
        $('td', nRow).unbind('click');
        $('td', nRow).bind('click', function() {
            vm.scope.$apply(function() {
                vm.someClickHandler(aData);
            });
        });
        return nRow;
    }

    //生成操作按钮并绑定方法
    function actionsHtml(data, type, full, meta) {
        vm.dtdata[data.id] = data;

        var str = '';

        for(var i = 0; i < vm.btn.length; i++)
        {
            var tmp = vm.btn[i];
            if(tmp.onclick === 'info' && vm.info)
            {
                str += '<li><a ng-click="table.info(table.dtdata[\''+data.id+'\'])"">'+tmp.title+'</a></li>';
            }
            else if(tmp.onclick === 'edit' && vm.edit)
            {
                str += '<li><a ng-click="table.edit(table.dtdata[\''+data.id+'\'])"">'+tmp.title+'</a></li>';
            }
            else if(tmp.onclick === 'delete' && vm.delete)
            {
                str += '<li><a ng-click="table.delete(table.dtdata[\''+data.id+'\'])"">'+tmp.title+'</a></li>';
            }
            else
            {
                str += '<li><a ng-click="'+tmp.onclick+'(table.dtdata[\''+data.id+'\'])"">'+tmp.title+'</a></li>';
            }
        }

        return '<div class="btn-group" dropdown="" >' +
                '<button type="button" class="btn btn-primary btn-xs" dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false">' +
                  '操作 <span class="caret"></span>' +
                '</button>' +
                '<ul class="dropdown-menu" role="menu">' +
                    str +
                '</ul>' +
               '</div>';
    }

    function date2str(d){
        if(d === undefined){
            return "";
        }
        var month = (d.getMonth()+1).toString();
        var day = d.getDate().toString();
        if(month.length == 1) month = '0' + month;
        if(day.length == 1) day = '0' + day;
        return d.getFullYear() + "-" + month + "-" + day;
    }

    //生成搜索数据结构
    function makesearchitem(searchitem){

        var item = {
            'showtype' : searchitem.title, //显示的搜索项
            'type' : searchitem.type,
        };
        
        if(item.type === 'date1')
        {
            item['result'] = [
                {
                    'key' : searchitem.name,
                    'label' : date2str(new Date()),
                    'value' : date2str(new Date()),
                    'opened' : false,
                }
            ];
        }
        else if(item.type === 'date2')
        {
            item['result'] = [
                {
                    'key' : searchitem.name1,
                    'label' : date2str(new Date()),
                    'value' : date2str(new Date()),
                    'opened' : false,
                },
                {
                    'key' : searchitem.name2,
                    'label' : date2str(new Date()),
                    'value' : date2str(new Date()),
                    'opened' : false,
                }
            ];
        }
        else if(item.type === 'txt')
        {
            item['result'] = [{
                'key' : searchitem.name,
                'value' : '',
            }];
        }
        else if(item.type === 'select')
        {
            item['result'] = [{
                'key' : searchitem.name,
                'value' : '',
            }];

            item['sel'] = searchitem.sel;
        }
        else
        {
            alert('搜索类型错误');
        }

        return item;
    }


    function ServerData(sSource, aoData, fnCallback){

        var para = {};

        //----- 分页参数 ----------------------------//
        if(vm.page === 'yes')
        {
            var pageNo = 1;
            var pageSize = 1;
            var start = 0;
            var length = 0;
            console.log(aoData);
            for(var i = 0; i < aoData.length; i++)
            {
               var tmp = aoData[i];
               if(tmp.name == 'start') start = tmp.value;
               if(tmp.name == 'length') length = tmp.value;
            }

            para['pageNo'] = (start / length) + 1;
            para['pageSize'] = length;
        }
        
        //----- 分页参数 ---------------------------//

        console.log(vm.searchformarr);
        //------ 搜索参数 --------------------------//
        for(var i = 0; i < vm.searchformarr.length; i++)
        {
            var tmp = vm.searchformarr[i];
            for(var j = 0; j < tmp.result.length; j++)
            {
                if(tmp.type === 'date2' || tmp.type === 'date1')
                {
                    if(angular.isDate(tmp.result[j].label)){
                        para[tmp.result[j].key] = date2str(tmp.result[j].label);
                    }else{
                        para[tmp.result[j].key] = tmp.result[j].label;
                    }
                }
                else if(tmp.type === 'txt' || tmp.type === 'select')
                {

                    para[tmp.result[j].key] = tmp.result[j].value;
                }
                else
                {
                    alert('类型错误');
                }
            }
        }
        //------ 搜索参数 --------------------------------// 

        para = angular.extend(para, vm.urlpara);

        console.log(para);

        $.ajax( {   
           'type': 'POST',    
           'contentType': 'application/json',   
           'url': vm.url,    
           'dataType': 'json',   
           'data' : JSON.stringify(para) ,
            'success' : function(data){
                console.log(data);
                if(vm.page === 'yes')
                {
                    data['recordsTotal'] = data.data.totalRecord;
                    data['recordsFiltered'] = data.data.totalRecord;
                    //data['draw'] = data.data.pageNo;
                }
                fnCallback(data);
            }
        });  

    }

    return {

        tableconfig : function(){
            return vm;
        }
        
    };

};

module.exports = service;