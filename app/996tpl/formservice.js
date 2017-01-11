
/*

    调用方法：
    
    formconfig.start({
        'title' : '创建接口',
        'formtitle' : '接口基本信息',
        'elements' : [
            {
                'title' : '时间1',
                'type' : 'date1',
                'value' : date2str(new Date()),
                'id' : 'hoho'
            },
            {
                'title' : '接口名称',
                'type' : 'text',
                'tip' : '接口名称必填',
                'placeholder' : '请输入接口名称',
                'id' : 'name',
            },
            {
                'title' : '接口名称111',
                'type' : 'text',
                'placeholder' : '请输入接口名称111',
                'id' : 'name1',
                'value' : 'dlq',
            },
            {
                'title' : '接口名称222',
                'type' : 'static',
                'value' : 'asdasd',
            },
            {
                'title' : '多选',
                'type' : 'checkbox',
                'info' : [
                    {'name' : '选项一', 'value' : '1', 'check' : true},
                    {'name' : '选项二', 'value' : '2'},
                ],
                'id' : 'hehe',
            },
            {
                'title' : '单选',
                'type' : 'radiobutton',
                'info' : [
                    {'name' : '单选项一', 'value' : '1'},
                    {'name' : '单选项二', 'value' : '2', 'check' : true},
                ],
                'id' : 'haha'
            },
            {
                'title' : '下拉',
                'type' : 'select',
                'info' : [
                    {'name' : '下拉选项一', 'value' : '1'},
                    {'name' : '下拉选项二', 'value' : '2', 'check' : true},
                ],
                'id' : 'heihei'
            },
            {
                'title' : '是否启用',
                'type' : 'switch',
                'open' : 1,
                'close' : 0,
                'value' : 1,
                'id' : 'wowo',
                'click' : clickswitch,
            },
            {
                'title' : '文本域',
                'type' : 'textarea',
                'value' : 'kjhasdkjhasdkajshkasdhkjadsh',
                'id' : 'lolo',
            },
        ]

    }, save);

    $scope.form = formconfig;




    function clickswitch(obj){

        console.log(obj);

        if(obj.result.wowo == 1)
        {
            obj.elements[2].type = 'text';
        }
        else
        {
            obj.elements[2].type = 'static';
        }
        

    }

*/



var service = function($q, $http, $resource, $state, FileUploader){


    var form = {
        //元素数组
        'elements' : [],
        'result' : {},
        'res' : {},
        'save' : function(){},
        'dateshow' : {},
        'imageshow' : {},
        'title' : '',
        'formtitle' : '',
        'scope' : {},
        'showbutton' : true,
        'before' : {},      //预先读数据的地址
        'beforedata' : {},  //预先读出来的数据，
        'tableshow' : {},

    };

    
    form.start = function(config, scope){

        form.elements = [];
        form.result = {};
        form.res = {};
        form.dateshow = {};
        form.imageshow = {};
        form.title = '';
        form.formtitle = '';
        form.scope = {};
        form.showbutton = true;
        form.before = {};
        form.beforedata = {};
        form.tableshow = {};


        var config = angular.extend({}, angular.isObject(config) ? config : {});

        //表单元素
        var elements = form.elements = angular.copy(config.elements) || [];

        //页面标题
        form.title = config.title || '';

        //表单标题
        form.formtitle = config.formtitle || '';

        //按钮组是否显示标记
        form.showbutton = config.save ? true : false;

        //页面scope
        form.scope = scope;

        //页面form
        form.scope.form = form;


        //------------- 提交(save) --------------------------------//
        // 提交按钮可以接受两种情况：
        // 1.方法：可以直接传入方法，通过方法参数可以取得页面表单数据对象
        // 2.对象：url : 提交接口地址。
        //        to : 提交后的跳转地址。
        //        para : 保存参数。
        //        urlPara : 跳转后带的参数
        //------------- 提交(save) --------------------------------//
        if(angular.isFunction(config.save))
        {
            form.save = config.save;
        }
        else if(angular.isObject(config.save))
        {
            form.save = function(item){
                if(!angular.isUndefined(config.save.para))
                {
                    angular.extend(item, config.save.para)
                }

                var urlpara = {};

                if(angular.isDefined(config.save.urlPara))
                {
                    urlpara = angular.isObject(config.save.urlPara) ? 
                    config.save.urlPara : config.save.urlPara(form.res);
                }

                console.log(item);
                
                $resource(config.save.url, {}, {}).save(item, function(res){
                    console.log(res);
                    if(res.errcode === 0){
                        $state.go(config.save.to, urlpara);
                    }else{
                        alert(res.errmsg);
                    }
                });
            }
        }


        //----------- 准备预先撸出需要的数据 -------------------//
        for(var i = 0; i < elements.length; i++)
        {
            var tmp = elements[i];
            if(tmp.type === 'select' && angular.isDefined(tmp.url))
            {
                form.before[tmp.id] = {};
                form.before[tmp.id]['url'] = tmp.url;
                form.before[tmp.id]['para'] = tmp.para;
            }

            if(tmp.type === 'image')
            {
                (function(tmp){

                    var uploader = new FileUploader({
                        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
                    });

                    form.imageshow[tmp.id] = {
                        'uploader' : uploader
                    };

                    uploader.filters.push({
                        name: 'imageFilter',
                        fn: function(item, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                        }
                    }); 

                    uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        form.result[tmp.id] = response.savename;
                    };

                })(tmp);
            }

            if(tmp.type === 'date1')
            {
                var label = '';
                if(tmp.value === 'now'){
                    label = date2str(new Date());
                }
                
                form.dateshow[tmp.id] = {
                    'label' : label,
                    'opened' : false,
                };
            }
            
        }
        //----------- 准备预先撸出需要的数据 -------------------//



        //------------- 详情(info) --------------------------------//
        // 提交按钮可以接受两种情况：
        // 1.方法：可以直接传入方法，
        // 2.对象：from : 提交接口地址。
        //        to : 提交后的跳转地址。
        //        para : 跳转后带的参数。
        //------------- 详情(info) --------------------------------//
        if(angular.isFunction(config.info))
        {
            config.info();
        }
        else if(angular.isObject(config.info))
        {
            $resource(config.info.url, {}, {}).save(config.info.para, function(res){
                console.log(res);
                form.res = res;
                if(res.errcode === 0){
                    init(elements, res);
                }else{
                    alert(res.errmsg);
                }
            });
        }
        else if(angular.isUndefined(config.info))
        {
            init(elements);
        }
    };


    function getUrl(url, obj){
        var deferred = $q.defer();
        $http({method: 'GET', params: obj, 'url': url}).then(
            function(data){
                deferred.resolve(data.data);
            },
            function(data){
                deferred.reject(data.data);
            }
        );
        return deferred.promise;
    }


    function init(elements, res){

        //console.log(elements);

        //----------- 开始撸出需要的数据 -------------------//
        var beforedata = {};
        angular.forEach(form.before, function (obj, key) {
            var para = {};
            obj.para || angular.extend(para, obj.para);
            beforedata[key] = $http(
                {
                    'method' : 'GET', 
                    'params' : para,
                    'url': obj.url
                });
        });

        $q.all(beforedata).then(function(arr){
            console.log(arr);
            form.beforedata = arr;
            for(var i = 0; i < elements.length; i++)
            {
                var tmp = elements[i];

                if(res !== undefined){
                    tmp.value = res.data[tmp.id];
                }

                if(tmp.type === 'text')
                {
                    form.result[tmp.id] = tmp.value || '';
                }
                else if(tmp.type === 'number')
                {
                    form.result[tmp.id] = tmp.value || 0;
                }
                else if(tmp.type === 'checkbox')
                {
                    form.result[tmp.id] = {};
                    for(var j = 0; j < tmp.info.length; j++)
                    {
                        form.result[tmp.id][tmp.info[j].value] = tmp.info[j].check ? true : false;
                    }
                }
                else if(tmp.type === 'radiobutton')
                {
                    form.result[tmp.id] = tmp.value || 0;
                }
                else if(tmp.type === 'select')
                {

                    if(angular.isDefined(tmp.url)){
                        tmp.info = arr[tmp.id].data.data;
                    }

                    form.result[tmp.id] = tmp.value || 0;
                }
                else if(tmp.type === 'switch')
                {
                    form.result[tmp.id] = tmp.value || '';
                }
                else if(tmp.type === 'textarea')
                {
                    form.result[tmp.id] = tmp.value || '';
                }
                else if(tmp.type === 'image')
                {
                    form.result[tmp.id] = tmp.value || '';
                }
                else if(tmp.type === 'table')
                {
                    form.result[tmp.id] = tmp.data || [];
                }
            }


            console.log(form);
        });
        //----------- 开始撸出需要的数据 -------------------//
    }


    //打开日历控件
    form.open = function($event, item){
        $event.preventDefault();
        $event.stopPropagation();
        item.opened = true;
    };

    //提交按钮
    form.gogogo = function(item){

        //获取到表单是否验证通过
        if(form.scope.form1.$valid){
            //alert('通过验证可以提交表单');
        }else{
            //alert('表单没有通过验证');
            return;
        }

        //将所有时间对象处理成返回的字符串
        angular.forEach(form.dateshow, function(value, key){
            if(angular.isDate(value.label)){
                item[key] = date2str(value.label);
            }else{
                item[key] = value.label;
            }
        });

        form.save(item);
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

    return {

        formconfig : function(){
            return form;
        }
        
    };

};

module.exports = service;