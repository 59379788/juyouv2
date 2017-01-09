/**
 * 子模块service
 * dlq
 */
var service = function($resource, $q){

    //view模型
    var viewmodel = [
        {
            'title' : '系统编号',
            'id' : 'system_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '系统名称',
            'id' : 'system_name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '备注',
            'id' : 'system_remark',
            'type' : 'text',
        },
        {
            'title' : '开启',
            'id' : 'system_start_flag',
            'type' : 'switch',
            'open' : 1,
            'close' : 0,
            'value' : 1
        },
        {
            'title' : '排序',
            'id' : 'system_sort',
            'type' : 'number',
            'value' : 0,
        },
        {
            'title' : '别名',
            'id' : 'system_alias',
            'type' : 'text',
        },

    ];

   
    return {

        viewmodel : function(){
            return viewmodel;
        },
       
    };

};

module.exports = service;