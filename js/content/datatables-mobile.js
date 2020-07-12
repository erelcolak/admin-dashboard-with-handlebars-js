
/*
###
Request URL's & Data Variables
###
*/
var _URLGetOrderList = '';

/*
###
Variables
###
*/
var data = [
	{
		Id: 1,
		Name: 'Lorem ipsum dolor',
		Date: '/Date(1531497153155)',
		Cargo: 'Ofix Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Gaziosmanpaşa'
	},
	{
		Id: 2,
		Name: 'Sit amet',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 3,
		Name: 'MP Yener Övünç',
		Date: '/Date(1531497153155)',
		Cargo: 'Ofix Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Gaziosmanpaşa'
	},
	{
		Id: 4,
		Name: 'Demsa Akasya Avm Şubesi',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 2,
		Name: 'Sit amet',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 3,
		Name: 'MP Yener Övünç',
		Date: '/Date(1531497153155)',
		Cargo: 'Ofix Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Gaziosmanpaşa'
	},
	{
		Id: 4,
		Name: 'Demsa Akasya Avm Şubesi',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 2,
		Name: 'Sit amet',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 3,
		Name: 'MP Yener Övünç',
		Date: '/Date(1531497153155)',
		Cargo: 'Ofix Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Gaziosmanpaşa'
	},
	{
		Id: 4,
		Name: 'Demsa Akasya Avm Şubesi',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 2,
		Name: 'Sit amet',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
	{
		Id: 3,
		Name: 'MP Yener Övünç',
		Date: '/Date(1531497153155)',
		Cargo: 'Ofix Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Gaziosmanpaşa'
	},
	{
		Id: 4,
		Name: 'Demsa Akasya Avm Şubesi',
		Date: '/Date(1531497153155)',
		Cargo: 'Aras Kargo',
		DeliveryCity: 'İstanbul',
		DeliveryState: 'Levent'
	},
];

/*
###
Functions
###
*/
function DataTables(data){
	var table = $('#table').DataTable({
		dom: _DOMMobile,
		pagingType: 'simple',
		data: data,
		columns: [
			// 0- Name
			{
				title: '<span class="title">Müşter/Firma</span>',
				data: 'Name',
				class: 'column-md column-Name',
				orderable: true,
				searchable: true
			},
			// 1- Date
			{
				title: '<span class="title">Sipariş</span><span class="subtitle"> Tarihi</span>',
				data: 'Date',
				class: 'column-sm column-center column-Date',
				orderable: false,
				searchable: false
			},
			// 2- Cargo
			{
				title: '<span class="title">Kargo</span><span class="subtitle"> Firması</span>',
				data: 'Cargo',
				class: 'column-sm column-center column-Cargo',
				orderable: false,
				searchable: false
			},
			// 3- DeliveryCity
			{
				title: '<span class="title">Teslimat</span><span class="subtitle"> İli</span>',
				data: 'DeliveryCity',
				class: 'column-sm column-DeliveryCity',
				orderable: false,
				searchable: false
			},
			// 4- DeliveryState
			{
				title: '<span class="title">Teslimat</span><span class="subtitle"> İlçesi</span>',
				data: 'DeliveryState',
				class: 'column-sm column-DeliveryState',
				orderable: false,
				searchable: false
			},
		],
		columnDefs: [
			// 1- Date
			{
				targets: 1,
				render: function( data, type, row, meta ){
					var template = moment(data).format('DD.MM.YYYY');
					return template;
				}
			},
		],
		select: {
			style: 'single'
		},
		order: [
			[1, 'asc']
		],
		buttons: [
			{
				className: 'btn-xs btn-primary btn-refreshOrderList',
				text: '<i class="fa fa-refresh btn-icon"></i>',
				action: function( e, dt, node, config ){
					// Ajax Query - Get List
					$.ajax({
						// url: _URLGetOrderList,
						type: 'POST',
						contentType: 'application/json',
						beforeSend: function(xhr){
							Loading()
						},
						success: function(data){
							if( data.IsSuccess == false ){
								SystemAjaxAlert(data)
							}
							else{
								var data = [
									{
										Id: 1,
										Name: 'Lorem ipsum dolor sit amet',
										Date: '/Date(1531497153155)',
										Cargo: 'Ofix Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Gaziosmanpaşa'
									},
									{
										Id: 2,
										Name: 'Consectetur adipisicing elit',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 3,
										Name: 'Sed do eiusmod tempor incididunt ut',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 4,
										Name: 'Labore et dolore magna aliqua',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 5,
										Name: 'Lorem ipsum dolor sit amet',
										Date: '/Date(1531497153155)',
										Cargo: 'Ofix Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Gaziosmanpaşa'
									},
									{
										Id: 6,
										Name: 'Consectetur adipisicing elit',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 7,
										Name: 'Sed do eiusmod tempor incididunt ut',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 8,
										Name: 'Labore et dolore magna aliqua',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 2,
										Name: 'Consectetur adipisicing elit',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 3,
										Name: 'Sed do eiusmod tempor incididunt ut',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 4,
										Name: 'Labore et dolore magna aliqua',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 5,
										Name: 'Lorem ipsum dolor sit amet',
										Date: '/Date(1531497153155)',
										Cargo: 'Ofix Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Gaziosmanpaşa'
									},
									{
										Id: 6,
										Name: 'Consectetur adipisicing elit',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 7,
										Name: 'Sed do eiusmod tempor incididunt ut',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
									{
										Id: 8,
										Name: 'Labore et dolore magna aliqua',
										Date: '/Date(1531497153155)',
										Cargo: 'Aras Kargo',
										DeliveryCity: 'İstanbul',
										DeliveryState: 'Levent'
									},
								];
								// ReDraw Table
								table.clear();
								table.rows.add(data).draw();
							}
						},
						error: function(data){
							Alert(alertText.ajax.error)
						},
						complete: function(){
							Loading(false);
						}
					});
				}
			},
			{
				className: 'btn-xs btn-default btn-selectShipmentOrder',
				text: '<i class="fa fa-cart-arrow-down btn-icon"></i>',
				action: function( e, dt, node, config ){

				}
			}
		],
		drawCallback: function(){

		},
		initComplete: function(){

		}
	});
}

/*
###
Handlebars Functions & Helpers
###
*/

/*
###
Document on Ready
###
*/
$(document).ready(function(){
	/*
	AJAX Requests when Page Loading
	*/

	/*
	Functions
	*/
	// Ajax Query - Get Order List
	$.ajax({
		// url: _URLGetOrderList,
		type: 'POST',
		contentType: 'application/json',
		beforeSend: function(xhr){
			Loading()
		},
		success: function(data){
			if( data.IsSuccess == false ){
				SystemAjaxAlert(data)
			}
			else{

			}
		},
		error: function(data){
			Alert(alertText.ajax.error)
		},
		complete: function(){
			DataTables(data)
			Loading(false);
		}
	});

	/*
	Event Handlers
	*/
});
