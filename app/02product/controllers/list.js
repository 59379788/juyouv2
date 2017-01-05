module.exports = function($scope, tableconfig){

	tableconfig.start($scope, {

		url : '/api/as/tc/ticketorder/orderlist',
		col : [
			{'title' : '编码', 'col' : 'code'},
			{'title' : '标题', 'col' : 'title'},
			{'title' : '姓名', 'col' : 'name'},
			{'title' : '电话', 'col' : 'mobile'},
			{'title' : '购买', 'col' : 'num'},
			{'title' : '使用', 'col' : 'used'},
			{'title' : '退票', 'col' : 'back'},
			{'title' : '操作', 'col' : 'btn'},
		],
		btn : [
			{'title' : '编辑', 'onclick' : 'edit'},
			{'title' : '删除', 'onclick' : 'delete'},
			{'title' : '上架', 'onclick' : 'start'}
		],
		search : [
			{'title' : '订单名称', 'type' : 'txt', 'name' : 'keyword', 'show' : true},
			{'title' : '创建时间', 'type' : 'date1', 'name' : 'date'},
			{'title' : '下单时间', 'type' : 'date2', 'name1' : 'start_time', 'name2' : 'end_time'},
			{'title' : '状态', 'type' : 'select', 'name' : 'duan', 'show' : true, 
				'sel' : [
					{'label' : '全部', value : ''},
					{'label' : '成功', value : '0'},
					{'label' : '失败', value : '1'}
				]
			}
		]

	});
	$scope.table = tableconfig;






    $scope.edit = function(person) {
        
        alert('编辑' + JSON.stringify(person.code));
       
    }

    $scope.delete = function(person) {
        
        alert('删除' + JSON.stringify(person.code));
    }

    $scope.start = function(person) {
        
        alert('上架' + JSON.stringify(person.code));
        
    }





    $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
        ];


    // function deleteRow(person) {
    //     alert(JSON.stringify(person));
    //     // Delete some data and call server to make changes...
    //     // Then reload the data so that DT is refreshed
    //     //vm.dtInstance.reloadData();
    // }
    // function createdRow(row, data, dataIndex) {
    //     // Recompiling so we can bind Angular directive to the DT
    //     $compile(angular.element(row).contents())($scope);
    // }
    // function actionsHtml(data, type, full, meta) {
    //     vm.persons[data.code] = data;
    //     return '<div class="btn-group" dropdown="" >' +
	   //          '<button type="button" class="btn btn-primary btn-xs" dropdown-toggle="" ng-disabled="disabled" aria-haspopup="true" aria-expanded="false">' +
	   //            '操作 <span class="caret"></span>' +
	   //          '</button>' +
	   //          '<ul class="dropdown-menu" role="menu">' +
	   //            '<li><a href="">编辑</a></li>' +
	   //            '<li><a href="">删除</a></li>' +
	   //            '<li class="divider"></li>' +
	   //            '<li><a href="">上架</a></li>' +
	   //            '<li><a href="">下架</a></li>' +
	   //          '</ul>' +
	   //        '</div>';
    // }



	// $scope.table = {
	// 	persons : {},

	// 	dtOptions : DTOptionsBuilder.fromSource('/api/as/tc/ticketorder/orderlist?pageSize=20')
	// 				.withDataProp('data.results')
	// 		        .withLanguage(CONST.datatableslang)
	// 		        .withOption('createdRow', function(row, data, dataIndex){
	// 		        	console.log(row);
	// 		        	console.log(data);
	// 		        	console.log(dataIndex);
	// 		        	console.log(angular.element(row).contents());
	// 		        	$compile(angular.element(row).contents())($scope);
	// 		        })

	// 	,

	// 	dtColumns : [
	// 		DTColumnBuilder.newColumn('title').withTitle('标题'),
	//         DTColumnBuilder.newColumn('ticket_state_name').withTitle('时间'),
	//         DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
	//             .renderWith(function(data, type, full, meta){
	//             	$scope.table.persons[data.code] = data;
	// 		        return '<button class="btn btn-warning" ng-click="table.edit($scope.table.persons['+data.code+'])">' +
	// 		            '   <i class="fa fa-edit"></i>' +
	// 		            '</button>&nbsp;' +
	// 		            '<button class="btn btn-danger" ng-click="table.delete(2)">' +
	// 		            '   <i class="fa fa-trash-o"></i>' +
	// 		            '</button>';
	//             })
	// 	]
	// 	,

	// 	edit : edit

	// 	,

	// 	delete : function(person){

	// 		alert(person);

	// 	}

	// };




	// function edit(xx){

	// 	console.log(this);
	// 	console.log(xx);

	// };



	// var vm = $scope.table = {};
 //    vm.message = '';
 //    vm.edit1 = edit1;
 //    vm.delete = deleteRow;
 //    vm.dtInstance = {};
 //    vm.persons = {};
 //    vm.dtOptions = DTOptionsBuilder.fromSource('/api/as/tc/ticketorder/orderlist?pageSize=20')
 //        //.withPaginationType('full_numbers')
 //        .withDataProp('data.results')
 //        .withLanguage(CONST.datatableslang)
 //        .withOption('createdRow', createdRow);

 //    console.log(vm.dtOptions);
 //    vm.dtColumns = [
 //        DTColumnBuilder.newColumn('title').withTitle('标题'),
 //        DTColumnBuilder.newColumn('ticket_state_name').withTitle('时间'),
 //        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
 //            .renderWith(actionsHtml)
 //    ];

 //    console.log(vm.dtColumns);

 //    function edit1(person) {
 //        vm.message = 'You are trying to edit the row: ' + JSON.stringify(person);
 //        // Edit some data and call server to make changes...
 //        // Then reload the data so that DT is refreshed
 //        alert(person);
 //        console.log(vm.persons);
 //        alert(JSON.stringify(person));
 //        //vm.dtInstance.reloadData();
 //    }
 //    function deleteRow(person) {
 //        vm.message = 'You are trying to remove the row: ' + JSON.stringify(person);
 //        // Delete some data and call server to make changes...
 //        // Then reload the data so that DT is refreshed
 //        //vm.dtInstance.reloadData();
 //    }
 //    function createdRow(row, data, dataIndex) {
 //        // Recompiling so we can bind Angular directive to the DT
 //        $compile(angular.element(row).contents())($scope);
 //    }
 //    function actionsHtml(data, type, full, meta) {
 //        vm.persons[data.code] = data;
 //        return '<button class="btn btn-warning" ng-click="edit1(persons[\''+data.code+'\'])">' +
 //            '   <i class="fa fa-edit"></i>' +
 //            '</button>&nbsp;' +
 //            '<button class="btn btn-danger" ng-click="delete(2)">' +
 //            '   <i class="fa fa-trash-o"></i>' +
 //            '</button>';
 //    }


	// var vm = this;
	// vm.persons = {};
	// vm.edit = edit;
	// vm.dtInstance = {};
 //    vm.dtOptions = DTOptionsBuilder
 //        .fromSource('http://m.juyouhx.com/api/us/ic/laws/list?pageSize=100')
 //        .withDataProp('data.results')
 //        .withLanguage(CONST.datatableslang)
 //        //.withDisplayLength(2)
 //        // Add Bootstrap compatibility
 //        .withBootstrap()
 //        // .withBootstrapOptions({
 //        //     TableTools: {
 //        //         classes: {
 //        //             container: 'btn-group',
 //        //             buttons: {
 //        //                 normal: 'btn btn-danger'
 //        //             }
 //        //         }
 //        //     },
 //        //     ColVis: {
 //        //         classes: {
 //        //             masterButton: 'btn btn-primary'
 //        //         }
 //        //     }
 //        // })
 //        // Add ColVis compatibility
 //        // .withColVis()
 //        // // Add Table tools compatibility
 //        // .withTableTools('vendor/datatables-tabletools/swf/copy_csv_xls_pdf.swf')
 //        // .withTableToolsButtons([
 //        //         'copy',
 //        //         'print', {
 //        //         'sExtends': 'collection',
 //        //         'sButtonText': 'Save',
 //        //         'aButtons': ['csv', 'xls', 'pdf']
 //        //     }
 //        // ])



 //        ;
 //    vm.dtColumn = [
 //        DTColumnBuilder.newColumn('title').withTitle('标题'),
 //        DTColumnBuilder.newColumn('pdate').withTitle('时间'),
 //        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
 //            .renderWith(actionsHtml)
 //        //DTColumnBuilder.newColumn('lastName').withTitle('Last name')
 //    ];


 //    function actionsHtml(data, type, full, meta) {
 //        vm.persons[data.id] = data;
 //        return '<button class="btn btn-warning" ng-click="showCase.edit(11)">' +
 //            '   <i class="fa fa-edit"></i>' +
 //            '</button>&nbsp;' +
 //            '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])" )"="">' +
 //            '   <i class="fa fa-trash-o"></i>' +
 //            '</button>';
 //    }


 //    function edit(id){

 //    	alert(id);

 //    	vm.dtInstance.reloadData();

 //    }

	// $scope.table = {
	// 	'pagetitle' : '上架中的产品',
	// 	'url' : 'http://m.juyouhx.com/api/us/ic/laws/list?pageSize=100',
	// 	'columns' : [
 //            { data: 'title', title : '标题', width: '50%'},
 //            { data: 'pdate', title : '时间', width: '30%'},
 //            { data: null, title : '操作', width: '20%', 'defaultContent': '<button click=alert("asddsaasd") >Edit</button>'}
 //        ]
	// }




};