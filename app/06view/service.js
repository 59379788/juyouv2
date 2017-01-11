/**
 * 子模块service
 * dlq
 */
var service = function($resource, $q){

    //view模型
    var viewmodel = [
        {
            'title' : '场所编号',
            'id' : 'code',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '名称',
            'id' : 'name',
            'type' : 'text',
            'required' : true,
            'placeholder' : '必填',
        },
        {
            'title' : '经度',
            'id' : 'longitude',
            'type' : 'text',
        },
        {
            'title' : '纬度',
            'id' : 'latitude',
            'type' : 'text',
        },
        {
            'title' : '地址',
            'id' : 'address',
            'type' : 'text',
        },
        {
            'title' : '图片',
            'id' : 'img',
            'type' : 'image',
        },
        {
            'title' : '简介',
            'id' : 'content',
            'type' : 'text',
        },
        {
            'title' : '营业时间',
            'id' : 'open_time',
            'type' : 'text',
        },
        
        {
            'title' : '省份',
            'id' : 'province',
            'type' : 'text',
        },
        {
            'title' : '城市',
            'id' : 'city',
            'type' : 'text',
        },
        {
            'title' : '区域',
            'id' : 'area',
            'type' : 'text',
        },
        {
            'title' : 'logo',
            'id' : 'logo',
            'type' : 'image',
        },
        {
            'title' : '主题',
            'id' : 'theme',
            'type' : 'text',
        },
        {
            'title' : '子名称',
            'id' : 'subname',
            'type' : 'text',
        },
        {
            'title' : '开放日期',
            'id' : 'open_date',
            'type' : 'date1',
            'value' : 'now',
        },
        {
            'title' : '服务承诺',
            'id' : 'promise',
            'type' : 'text',
        },
        {
            'title' : '预定须知',
            'id' : 'book_info',
            'type' : 'text',
        },
        {
            'title' : '好评',
            'id' : 'ev_good',
            'type' : 'text',
        },
        {
            'title' : '一般评价',
            'id' : 'ev_general',
            'type' : 'text',
        },
        {
            'title' : '差评',
            'id' : 'ev_bad',
            'type' : 'text',
        },
        {
            'title' : '好评',
            'id' : 'ev_good',
            'type' : 'text',
        },
        {
            'title' : '星级',
            'id' : 'star',
            'type' : 'text',
        },
        {
            'title' : '排序',
            'id' : 'asort',
            'type' : 'text',
        },
        {
            'title' : '全景地址',
            'id' : 'view720_url',
            'type' : 'text',
        },
        {
            'title' : '电子杂志地址',
            'id' : 'ebook_url',
            'type' : 'text',
        },
        {
            'title' : '优惠政策',
            'id' : 'fav_policy',
            'type' : 'text',
        },
        {
            'title' : '提前入园时间（小时）',
            'id' : 'bef_hour',
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