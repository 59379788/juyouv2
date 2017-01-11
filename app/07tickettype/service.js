/**
 * 子模块service
 * dlq
 */
var service = function($resource, $q){

    var model = [
        {
            'title' : '票种编号',
            'id' : 'code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '景区',
            'id' : 'placecode',
            'type' : 'select',
            'url' : '/api/ac/tc/placeView/jlist',
            'send' : 'no',
        },
        {
            'title' : '操作景区',
            'type' : 'button',
            'info' : [
                {'label' : '添加景区' , 'btnclick' : function(form, $event){

                    var value = form.result['placecode'];

                    if(value === 0) {
                        alert('请选择一个景区');
                        return ;
                    }

                    for(var i = 0; i < form.result['tablelist'].length; i++)
                    {
                        var tmp = form.result['tablelist'][i];
                        if(tmp.value == value)
                        {
                            alert('请不要重复选择景区');
                            return ;
                        }
                    }

                    var name = '';
                    var arr = form.beforedata['placecode'].data.data;
                    for(var i = 0; i < arr.length; i++)
                    {
                        var tmp = arr[i];
                        if(tmp.value == value)
                        {
                            name = tmp.name;
                        }
                    }

                    form.result['tablelist'].push({
                        'name' : name,
                        'value' : value,
                    });
                }}
            ],
        },
        {
            'title' : '景区列表',
            'type' : 'table',
            'id' : 'tablelist',
            //'url' : '',
            //'para' : {},
            'col' : [
                {'title' : '景区名称', 'col' : 'name'},
                {'title' : '景区编号', 'col' : 'value'},
                {'title' : '查看详情', 'clickname' : '操作', 'click' : function(item){

                    console.log(item);
                }},
                {'title' : '删除', 'clickname' : '操作', 'click' : function(item){

                    console.log(item);

                }},
            ],
        },
        {
            'title' : '系统名称',
            'id' : 'name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '预定说明',
            'id' : 'book_info',
            'type' : 'textarea',
            'state' : 'normal',
        },
        {
            'title' : '状态',
            'id' : 'state',
            'type' : 'switch',
            'open' : 1,
            'close' : 0,
            'value' : 1
        },
        {
            'title' : '是否可以销票',
            'id' : 'state',
            'type' : 'switch',
            'open' : 0,
            'close' : 1,
            'value' : 0
        },
        {
            'title' : '开始时间',
            'id' : 'start_date',
            'type' : 'date1',
            'value' : 'now',
        },
        {
            'title' : '结束时间',
            'id' : 'end_date',
            'type' : 'date1',
            'value' : 'now',
        },
        

    ];

    return {

        model : function(){
            return model;
        },
       
    };

};

module.exports = service;