/**
 * 子模块service
 * djp
 */
var service = function($resource, $q){

    //接口列表
    var urllist = "/api/as/sc/sysfun/getUrlList";
    //接口详情
    var urlinfo = "/api/as/sc/sysfun/getById";
    //保存接口
    var urlsave = '/api/as/sc/sysfun/save';
    //删除接口
    var urldelete = '/api/as/sc/sysfun/delete';


    //系统列表
    var systemlist = '/api/as/sc/syssystem/getSysList';
    //系统列表(简表不分页)
    var systemlists = '/api/as/sc/syssystem/getSystemList';
    //系统详情
    var systeminfo = '/api/as/sc/syssystem/getById';
    //系统接口
    var systemsave = '/api/as/sc/syssystem/save';
    //删除系统
    var systemdel = '/api/as/sc/syssystem/delete';




    //模块列表
    var sysmodulelist = '/api/as/sc/sysmodule/getModuleList';
    var sysmodulelists = '/api/as/sc/sysmodule/getModList';
    //模块详情
    var sysmoduleinfo = '/api/as/sc/sysmodule/getById';
    //保存模块
    var sysmodulesave = '/api/as/sc/sysmodule/save';
    //删除模块
    var sysmoduledelete = '/api/as/sc/sysmodule/delete';




    //菜单列表
    var sysmenulist = '/api/as/sc/sysmenu/getMenuList';
    //菜单详情
    var sysmenuinfo = '/api/as/sc/sysmenu/getById';
    //保存菜单
    var sysmenusave = '/api/as/sc/sysmenu/save';
    //删除菜单
    var sysmenudelete = '/api/as/sc/sysmenu/delete';




    //角色列表
    var sysrolelist = '/api/as/sc/sysrole/getRoleList';
    //角色详情
    var sysroleinfo = '/api/as/sc/sysrole/getById';
    //保存角色
    var sysrolesave = '/api/as/sc/sysrole/save';
    //删除角色
    var sysroledelete = '/api/as/sc/sysrole/delete';




    //url模型
    var urlmodel = [
        {
            'title' : '应用编码',
            'id' : 'appid',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '接口地址',
            'id' : 'url',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '可用',
            'id' : 'state',
            'type' : 'switch',
            'open' : 0,
            'close' : 1,
            'value' : 0
        },
        {
            'title' : '排序',
            'id' : 'sort',
            'type' : 'number',
            'value' : 0,
        },
        {
            'title' : '创建者',
            'id' : 'create_by',
            'type' : 'static',
        },
        {
            'title' : '创建时间',
            'id' : 'create_date',
            'type' : 'static',
        },
        {
            'title' : '更新者',
            'id' : 'update_by',
            'type' : 'static',
        },
        {
            'title' : '更新时间',
            'id' : 'update_date',
            'type' : 'static',
        },
        {
            'title' : '备注信息',
            'id' : 'remarks',
            'type' : 'text',
        },
    ];




    //system模型
    var systemmodel = [
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




    //菜单模型
    var sysmenumodel = [
        {
            'title' : '菜单名称',
            'id' : 'system_menu_name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '菜单父节点',
            'id' : 'system_menu_fid',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '菜单编号',
            'id' : 'system_menu_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '路径',
            'id' : 'system_menu_url',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '系统模块',
            'id' : 'system_module_code',
            'type' : 'select',
            'url' : sysmodulelists,
        },
        {
            'title' : '权限标示',
            'id' : 'system_menu_auth_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '是否校验',
            'id' : 'system_menu_check_flag',
            'type' : 'switch',
            'open' : 1,
            'close' : 0,
            'value' : 1
        },
        {
            'title' : '是否开启',
            'id' : 'system_menu_start_flag',
            'type' : 'switch',
            'open' : 1,
            'close' : 0,
            'value' : 1
        },
        {
            'title' : '启用移动设备',
            'id' : 'system_menu_mobile_start_flag',
            'type' : 'switch',
            'open' : 1,
            'close' : 0,
            'value' : 1
        },
        {
            'title' : '打开方式',
            'id' : 'system_menu_open_type',
            'type' : 'select',
            'url' : '',
        },
        {
            'title' : '排序',
            'id' : 'system_menu_sort',
            'type' : 'number',
            'value' : 0,
        },
        

    ];


    

    //sysmodulemodel模型
    var sysmodulemodel = [
        {
            'title' : '模块编码',
            'id' : 'system_module_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '模块名称',
            'id' : 'system_module_name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '系统编号',
            'id' : 'system_code',
            'type' : 'select',
            'url' : systemlists,
        },
        {
            'title' : '排序',
            'id' : 'system_module_sort',
            'type' : 'number',
            'value' : 0,
        },
        {
            'title' : '系统模块别名',
            'id' : 'system_module_alias',
            'type' : 'text',
        },
        {
            'title' : '开启',
            'id' : 'system_module_start_flag',
            'type' : 'switch',
            'open' : 1,
            'close' : 0,
            'value' : 1
        },

    ];






    //角色模型
    var sysrolemodel = [
        {
            'title' : '角色编号',
            'id' : 'system_role_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '角色名称',
            'id' : 'system_role_name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '英文名称',
            'id' : 'system_role_en_name',
            'type' : 'text',
        },
        {
            'title' : '角色别名',
            'id' : 'system_role_alias',
            'type' : 'text',
        },
        {
            'title' : '角色类型',
            'id' : 'system_role_type',
            'type' : 'text',
        },
        {
            'title' : '备注',
            'id' : 'system_role_remark',
            'type' : 'text',
        },

    ];




    var reqmodel = [
        // {
        //     'title' : 'key',
        //     'id' : 'key_code',
        //     'type' : 'text',
        //     'required' : true,
        //     'placeholder' : '必填',
        // },
        {
            'title' : 'key',
            'id' : 'key_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : 'key名称',
            'id' : 'key_name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '列类型',
            'id' : 'key_type',
            'type' : 'select',
            'value' : '0',
            'info' : [
                {'name' : '字符串', 'value' : '0'},
                {'name' : '整型', 'value' : '1'},
            ],
        },
        {
            'title' : '必填',
            'id' : 'required',
            'type' : 'switch',
            'value' : '1',
            'open' : '0',
            'close' : '1',
        },
        {
            'title' : '数据类型',
            'id' : 'data_type',
            'type' : 'select',
            'value' : '*',
            'info' : [
                {'name' : '*', 'value' : '*'},
                {'name' : 'n', 'value' : 'n'},
                {'name' : 's', 'value' : 's'},
                {'name' : 'p', 'value' : 'p'},
                {'name' : 'm', 'value' : 'm'},
                {'name' : 'e', 'value' : 'e'},
                {'name' : 'url', 'value' : 'url'},
            ],
        },
    ];



    var resmodel = [
        {
            'title' : 'key',
            'id' : 'key_code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : 'key名称',
            'id' : 'key_name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '数据字典所用类型',
            'id' : 'dict_type',
            'type' : 'select',
            'value' : '0',
            'info' : [
                {'name' : '字符串', 'value' : '0'},
                {'name' : '整型', 'value' : '1'},
            ],
        },
        
    ];


   
    return {

        urllist : function(){
            return urllist;
        },
        urlmodel : function(){
            return urlmodel;
        },
        urlinfo : function(){
            return $resource(urlinfo, {}, {});
        },
        urlsave : function(){
            return $resource(urlsave, {}, {});
        },


        reqmodel : function(){
            return reqmodel;
        },
        resmodel : function(){
            return resmodel;
        },


        systemlist : function(){
            return systemlist;
        },
        systemmodel : function(){
            return systemmodel;
        },
        systeminfo : function(){
            return $resource(systeminfo, {}, {});
        },
        systemsave : function(){
            return $resource(systemsave, {}, {});
        },
        systemdel : function(){
            return $resource(systemdel, {}, {});
        },



        sysmodulelist : function(){
            return $resource(sysmodulelist, {}, {});
        },
        sysmodulelists : function(){
            return $resource(sysmodulelists, {}, {});
        },
        sysmodulemodel : function(){
            return sysmodulemodel;
        },
        sysmoduleinfo : function(){
            return $resource(sysmoduleinfo, {}, {});
        },
        sysmodulesave : function(){
            return $resource(sysmodulesave, {}, {});
        },
        sysmoduledelete : function(){
            return $resource(sysmoduledelete, {}, {});
        },



        sysmenulist : function(){
            return $resource(sysmenulist, {}, {});
        },
        sysmenumodel : function(){
            return sysmenumodel;
        },
        sysmenuinfo : function(){
            return $resource(sysmenuinfo, {}, {});
        },
        sysmenusave : function(){
            return $resource(sysmenusave, {}, {});
        },
        sysmenudelete : function(){
            return $resource(sysmenudelete, {}, {});
        },




        sysrolelist : function(){
            return $resource(sysrolelist, {}, {});
        },
        sysrolemodel : function(){
            return sysrolemodel;
        },
        sysroleinfo : function(){
            return $resource(sysroleinfo, {}, {});
        },
        sysrolesave : function(){
            return $resource(sysrolesave, {}, {});
        },
        sysroledelete : function(){
            return $resource(sysroledelete, {}, {});
        },

       
    };

};

module.exports = service;