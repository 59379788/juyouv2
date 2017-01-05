
var service = function($q, $http, $resource, DTOptionsBuilder, DTColumnBuilder, CONST, $compile){
    
    
    var table = function(){



        
    }


    return {
        tableconfig : function(){

            var vm = {};
            vm.dtInstance = {};
            vm.dtdata = {};
            vm.dtColumns = [];
            vm.searcharr = [];
            //搜索项数据结构
            vm.searchformarr = [];


            // url : 地址
            // col : 列数组{'col' : 'code' , 'title' : '编码'}
            // btn : 按钮数组
            // dataprop : 数据key，默认data.results
            // language : 语言 默认中文
            // search :搜索数组
            vm.start = function(scope, config){

                var config = angular.extend({}, angular.isObject(config) ? config : {});

                var url = config.url,   //必填
                    col = config.col,   //必填
                    btn = config.btn,
                    search = config.search,
                    dataprop = config.dataprop || 'data.results',
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

                //----------- 搜索 -----------------------//
                vm.searcharr = search;
                //初始化搜索项
                for(var i = 0; i < search.length; i++)
                {
                    if(search[i].show){
                        vm.searchformarr.push(makesearchitem(search[i]));
                    }
                }


                console.log(vm.searchformarr);

                //点击搜索项下拉
                vm.searchtypeclick = function(item, search){
                    angular.extend(search, makesearchitem(item));
                };
                //添加搜索项
                vm.addsearch = function(){
                    vm.searchformarr.push(makesearchitem(search[0]));
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
                //----------- 搜索 -----------------------//

                vm.dtOptions = DTOptionsBuilder.newOptions()

                    //.withPaginationType('full_numbers')
                    .withDataProp(dataprop)
                    .withLanguage(language)
                    .withDOM('t<"row"<"col-xs-2 pt5"l><"col-xs-4"i><"col-xs-6"p>>')
                    .withOption('processing', true)
                    .withOption('serverSide', true)
                    .withOption('createdRow', createdRow)
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
                    else
                    {
                        vm.dtColumns.push(DTColumnBuilder.newColumn(c.col).withTitle(c.title));
                    }
                }

                function createdRow(row, data, dataIndex) {
                // Recompiling so we can bind Angular directive to the DT
                    $compile(angular.element(row).contents())(scope);
                }

                //生成操作按钮并绑定方法
                function actionsHtml(data, type, full, meta) {
                    vm.dtdata[data.code] = data;

                    var str = '';

                    for(var i = 0; i < btn.length; i++)
                    {
                        var tmp = btn[i];
                        str += '<li><a ng-click="'+tmp.onclick+'(table.dtdata[\''+data.code+'\'])"">'+tmp.title+'</a></li>';
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
                    }
                    else
                    {
                        alert('搜索类型错误');
                    }

                    return item;
                }


                function ServerData(sSource, aoData, fnCallback){

                    var para = {};

                    //----- 分页参数 -------------
                    var pageNo = 1;
                    var pageSize = 1;
                    for(var i = 0; i < aoData.length; i++)
                    {
                       var tmp = aoData[i];
                       if(tmp.name == 'draw') pageNo = tmp.value;
                       if(tmp.name == 'length') pageSize = tmp.value;
                    }

                    para['pageNo'] = pageNo;
                    para['pageSize'] = pageSize;

                    //------ 搜索参数 ------------
                    for(var i = 0; i < vm.searchformarr.length; i++)
                    {
                        console.log(vm.searchformarr[i]);
                        var tmp = vm.searchformarr[i];

                        if(tmp.type === 'date2')
                        {
                            if(angular.isDate(tmp.result[0].label)){
                                para[tmp.result[0].key] = date2str(tmp.result[0].label);
                            }else{
                                para[tmp.result[0].key] = tmp.result[0].label;
                            }

                            if(angular.isDate(tmp.result[1].label)){
                                para[tmp.result[1].key] = date2str(tmp.result[1].label);
                            }else{
                                para[tmp.result[1].key] = tmp.result[1].label;
                            }
                        }
                        else if(tmp.type === 'date1')
                        {
                            if(angular.isDate(tmp.result[0].label)){
                                para[tmp.result[0].key] = date2str(tmp.result[0].label);
                            }else{
                                para[tmp.result[0].key] = tmp.result[0].label;
                            }
                        }
                        else if(tmp.type === 'txt')
                        {
                            para[tmp.result[0].key] = tmp.result[0].value;
                        }
                        else if(tmp.type === 'select')
                        {
                            para[tmp.result[0].key] = tmp.result[0].value;
                        }
                        else
                        {
                            alert('类型错误');
                        }
                        
                    }

                    console.log(para);

                    $.ajax( {   
                       'type': 'POST',    
                       'contentType': 'application/json',   
                       'url': url,    
                       'dataType': 'json',   
                       'data' : JSON.stringify(para) ,
                        'success' : function(data){
                            data['recordsTotal'] = data.data.totalRecord;
                            data['recordsFiltered'] = data.data.totalRecord;
                            data['draw'] = data.data.pageNo;
                            fnCallback(data);
                        }
                    });  

                }

            }

            return vm;
        }
        
    };

};

module.exports = service;