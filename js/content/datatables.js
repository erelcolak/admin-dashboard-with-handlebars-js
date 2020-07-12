
/*
###
Request URL's & Data Variables
###
*/
var data = [
	{"date":"01.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=1","group":"141","id":0,"first_name":"AÇÖŞİĞÜ","last_name":"çöşiğü","email":"lkohnemann0@va.gov","gender":"Female","ip_address":"60.65.79.106"},
	{"date":"02.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=1","group":"141","id":0,"first_name":"ACÖŞİĞÜ","last_name":"çöşiğü","email":"lkohnemann0@va.gov","gender":"Female","ip_address":"60.65.79.106"},
	{"date":"03.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=1","group":"141","id":0,"first_name":"çÖŞİĞÜ","last_name":"çöşiğü","email":"lkohnemann0@va.gov","gender":"Female","ip_address":"60.65.79.106"},
	{"date":"04.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=1","group":"141","id":0,"first_name":"ŞİĞÜ","last_name":"çöşiğü","email":"lkohnemann0@va.gov","gender":"Female","ip_address":"60.65.79.106"},
	{"date":"05.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=1","group":"141","id":1,"first_name":"Linette","last_name":"Kohnemann","email":"lkohnemann0@va.gov","gender":"Female","ip_address":"60.65.79.106"},
	{"date":"06.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=2","group":"15","id":2,"first_name":"Rowena","last_name":"Esselen","email":"resselen1@merriam-webster.com","gender":"Female","ip_address":"217.248.36.218"},
	{"date":"07.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=3","group":"626","id":3,"first_name":"Sunshine","last_name":"Brundell","email":"sbrundell2@nytimes.com","gender":"Female","ip_address":"216.177.45.123"},
	{"date":"08.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=4","group":"66","id":4,"first_name":"Eveline","last_name":"Lowry","email":"elowry3@webmd.com","gender":"Female","ip_address":"98.92.123.141"},
	{"date":"09.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=5","group":"66","id":5,"first_name":"Maggee","last_name":"Beau","email":"mbeau4@quantcast.com","gender":"Female","ip_address":"39.202.239.58"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=6","group":"66","id":6,"first_name":"Biddie","last_name":"Crawshaw","email":"bcrawshaw5@feedburner.com","gender":"Female","ip_address":"105.147.52.169"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=7","group":"667","id":7,"first_name":"Paulita","last_name":"Plaunch","email":"pplaunch6@yale.edu","gender":"Female","ip_address":"104.200.170.0"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=8","group":"662","id":8,"first_name":"Lebbie","last_name":"Nowill","email":"lnowill7@squidoo.com","gender":"Female","ip_address":"62.181.57.20"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=9","group":"34","id":9,"first_name":"Alika","last_name":"Burnard","email":"aburnard8@surveymonkey.com","gender":"Female","ip_address":"111.198.240.16"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=11","group":"122","id":10,"first_name":"Jackie","last_name":"Figgures","email":"jfiggures9@un.org","gender":"Male","ip_address":"125.167.119.140"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=12","group":"34","id":11,"first_name":"Shelden","last_name":"Haily","email":"shailya@merriam-webster.com","gender":"Male","ip_address":"126.103.16.255"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=13","group":"34","id":12,"first_name":"Virgil","last_name":"Varran","email":"vvarranb@bizjournals.com","gender":"Male","ip_address":"12.248.75.18"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=14","group":"24","id":13,"first_name":"Madelena","last_name":"Kenen","email":"mkenenc@skyrock.com","gender":"Female","ip_address":"54.228.142.37"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=15","group":"24","id":14,"first_name":"Marnia","last_name":"Shellum","email":"mshellumd@wikimedia.org","gender":"Female","ip_address":"0.47.116.101"},
	{"date":"12.08.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=16","group":"34","id":15,"first_name":"Leupold","last_name":"Burde","email":"lburdee@google.com.br","gender":"Male","ip_address":"56.46.46.20"},
	{"date":"12.07.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=17","group":"34","id":16,"first_name":"Kaspar","last_name":"Windsor","email":"kwindsorf@washingtonpost.com","gender":"Male","ip_address":"28.45.2.236"},
	{"date":"12.07.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=18","group":"24","id":17,"first_name":"Del","last_name":"Derrett","email":"dderrettg@aboutads.info","gender":"Female","ip_address":"114.108.19.208"},
	{"date":"12.07.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=111","group":"34","id":18,"first_name":"Oneida","last_name":"Snazel","email":"osnazelh@yellowpages.com","gender":"Female","ip_address":"216.228.195.117"},
	{"date":"12.07.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=112","group":"34","id":19,"first_name":"Erhard","last_name":"Able","email":"eablei@spotify.com","gender":"Male","ip_address":"194.77.24.60"},
	{"date":"12.07.2014","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=123","group":"25","id":20,"first_name":"Lilly","last_name":"Leggon","email":"lleggonj@de.vu","gender":"Female","ip_address":"21.101.28.5"},
	{"date":"12.07.2015","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=134","group":"34","id":21,"first_name":"Guy","last_name":"Yeandel","email":"gyeandelk@ibm.com","gender":"Male","ip_address":"70.77.47.195"},
	{"date":"12.07.2012","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=21","group":"34","id":22,"first_name":"Sandro","last_name":"Arcase","email":"sarcasel@yahoo.co.jp","gender":"Male","ip_address":"126.189.205.8"},
	{"date":"12.07.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=22","group":"34","id":23,"first_name":"Cello","last_name":"Hallet","email":"challetm@networkadvertising.org","gender":"Male","ip_address":"78.206.5.179"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=23","group":"34","id":24,"first_name":"Justina","last_name":"Tunnoch","email":"jtunnochn@shinystat.com","gender":"Female","ip_address":"226.114.160.22"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=24","group":"12","id":25,"first_name":"Shanie","last_name":"Fernant","email":"sfernanto@prnewswire.com","gender":"Female","ip_address":"72.83.86.133"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=25","group":"25","id":26,"first_name":"Pedro","last_name":"De Morena","email":"pdemorenap@imdb.com","gender":"Male","ip_address":"73.188.198.52"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=26","group":"12","id":27,"first_name":"Byron","last_name":"Henke","email":"bhenkeq@hostgator.com","gender":"Male","ip_address":"103.158.166.12"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=27","group":"12","id":28,"first_name":"Henrieta","last_name":"Hailwood","email":"hhailwoodr@huffingtonpost.com","gender":"Female","ip_address":"55.136.148.246"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=28","group":"25","id":29,"first_name":"Carmine","last_name":"Jendrach","email":"cjendrachs@oaic.gov.au","gender":"Male","ip_address":"109.4.19.59"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=29","group":"12","id":30,"first_name":"Chaunce","last_name":"Bickley","email":"cbickleyt@cafepress.com","gender":"Male","ip_address":"23.187.37.1"},
	{"date":"12.11.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=213","group":"12","id":31,"first_name":"Ware","last_name":"Millott","email":"wmillottu@amazonaws.com","gender":"Male","ip_address":"241.85.24.225"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=31","group":"12","id":32,"first_name":"Dalila","last_name":"Laurenceau","email":"dlaurenceauv@mit.edu","gender":"Female","ip_address":"172.182.44.240"},
	{"date":"01.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=32","group":"12","id":33,"first_name":"Germain","last_name":"Loveredge","email":"gloveredgew@mysql.com","gender":"Female","ip_address":"148.155.239.7"},
	{"date":"1.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=32","group":"12","id":33,"first_name":"Germain","last_name":"Loveredge","email":"gloveredgew@mysql.com","gender":"Female","ip_address":"148.155.239.7"},
	{"date":"19.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=33","group":"12","id":34,"first_name":"Merell","last_name":"Leghorn","email":"mleghornx@weebly.com","gender":"Male","ip_address":"248.19.207.128"},
	{"date":"9.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=34","group":"12","id":35,"first_name":"Vinnie","last_name":"Purbrick","email":"vpurbricky@reverbnation.com","gender":"Male","ip_address":"202.75.106.59"},
	{"date":"29.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=35","group":"12","id":36,"first_name":"Gregorius","last_name":"Dahmke","email":"gdahmkez@merriam-webster.com","gender":"Male","ip_address":"153.191.18.101"},
	{"date":"12.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=36","group":"12","id":37,"first_name":"Filip","last_name":"Janisson","email":"fjanisson10@tumblr.com","gender":"Male","ip_address":"115.224.202.161"},
	{"date":"12.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=37","group":"12","id":38,"first_name":"Mag","last_name":"Lighton","email":"mlighton11@cdc.gov","gender":"Female","ip_address":"201.172.12.177"},
	{"date":"12.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=38","group":"12","id":39,"first_name":"Atlanta","last_name":"Fairhall","email":"afairhall12@livejournal.com","gender":"Female","ip_address":"225.124.198.6"},
	{"date":"12.10.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=39","group":"12","id":40,"first_name":"Winifred","last_name":"Gunda","email":"wgunda13@usgs.gov","gender":"Female","ip_address":"5.76.5.222"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=305","group":"12","id":41,"first_name":"Johnathan","last_name":"Gillett","email":"jgillett14@blogtalkradio.com","gender":"Male","ip_address":"136.93.78.115"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=312","group":"12","id":42,"first_name":"Genovera","last_name":"Funnell","email":"gfunnell15@ehow.com","gender":"Female","ip_address":"184.170.143.84"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=101","group":"12","id":43,"first_name":"Currie","last_name":"Orrin","email":"corrin16@cmu.edu","gender":"Male","ip_address":"147.49.19.186"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=102","group":"12","id":44,"first_name":"Dinny","last_name":"Antonioni","email":"dantonioni17@mozilla.com","gender":"Female","ip_address":"94.211.224.101"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=103","group":"12","id":45,"first_name":"Dix","last_name":"Monelli","email":"dmonelli18@ucoz.com","gender":"Female","ip_address":"20.209.174.191"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=104","group":"12","id":46,"first_name":"Leta","last_name":"Cardinal","email":"lcardinal19@ftc.gov","gender":"Female","ip_address":"30.100.118.13"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=105","group":"12","id":47,"first_name":"Granger","last_name":"Crewe","email":"gcrewe1a@surveymonkey.com","gender":"Male","ip_address":"106.10.96.42"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=106","group":"12","id":48,"first_name":"Katha","last_name":"Filipychev","email":"kfilipychev1b@gnu.org","gender":"Female","ip_address":"157.145.32.214"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=107","group":"12","id":49,"first_name":"Siegfried","last_name":"Ingold","email":"singold1c@fda.gov","gender":"Male","ip_address":"209.239.139.51"},
	{"date":"12.09.2018","image":"https://dummyimage.com/256x256/e0e0e0/d61780.jpg&text=108","group":"12","id":50,"first_name":"Whit","last_name":"Birmingham","email":"wbirmingham1d@domainmarket.com","gender":"Male","ip_address":"53.157.13.132"}
];


/*
###
Variables
###
*/

/*
###
Functions
###
*/
function DataTables(data){
	var table = $('#table').DataTable({
		data: data,
		columns: [
			// 0- data
			{
				title:
					'<span class="title">'+
						'<label id="" class="form-item-label checkbox label-inline">'+
							'<input type="checkbox" id="" name="" class="" value="" />'+
							'<span class="label-icon "></span>'+
							'<span class="label-text hidden">Seçim</span>'+
						'</label>'+
					'</span><span class="subtitle"></span>',
				data: null,
				class: 'column-xs column-center control-buttons column-select',
				orderable: false,
				searchable: false
			},
			// 1- id
			{
				title: '<span class="title">İşlem</span><span class="subtitle"></span>',
				data: 'id',
				class: 'column-xs column-center control-buttons',
				orderable: false,
				searchable: false
			},
			// 2- first_name
			{
				title: '<span class="title">Kullanıcı</span><span class="subtitle"> Adı</span>',
				data: 'first_name',
				class: 'column-lg column-first_name',
				orderable: true,
				searchable: true
			},
			// 3- last_name
			{
				title: '<span class="title">Kullanıcı</span><span class="subtitle"> Soyadı</span>',
				data: 'last_name',
				class: 'column-lg column-last_name',
				orderable: true,
				searchable: true
			},
			// 4- email
			{
				title: '<span class="title">Kullanıcı</span><span class="subtitle"> Soyadı</span>',
				data: 'email',
				class: 'column-lg column-email',
				orderable: true,
				searchable: true
			},
			// 5- gender
			{
				title: '<span class="title">Cinsiyet</span><span class="subtitle"></span>',
				data: 'gender',
				class: 'column-md column-gender',
				orderable: true,
				searchable: true
			},
			// 6- ip_address
			{
				title: '<span class="title">IP</span><span class="subtitle"> Adresi</span>',
				data: 'ip_address',
				class: 'column-lg column-ip_address',
				orderable: false,
				searchable: false
			},
			// 7- group
			{
				title: '<span class="title">Title</span><span class="subtitle"> </span>',
				data: 'group',
				class: 'column-lg column-yadcf column-group',
				orderable: false,
				searchable: true
			},
			// 8- image
			{
				title: '<span class="title">Görsel</span><span class="subtitle"></span>',
				data: 'image',
				class: 'column-xs column-image',
				orderable: false,
				searchable: false
			},
			// 9- date
			{
				title: '<span class="title">Tarih</span><span class="subtitle"></span>',
				data: 'date',
				class: 'column-xs column-date',
				orderable: true,
				searchable: false
			},
		],
		columnDefs: [
			// 0- Select
			{
				targets: 0,
				render: function( data, type, row, meta ){
					return '';
				}
			},
			// 1- Control Buttons
			{
				targets: 1,
				render: function( data, type, row, meta ){
					var template =
					'<a href="' + data + '" title="" target="_self" id="" class="btn btn-xs btn-primary btn-ghost btn-round" type="button">'+
						'<i class="fa fa-pencil btn-icon"></i>'+
					'</a>';
					return template;
				}
			},
			// 6- ip_address
			{
				targets: 6,
				render: function( data, type, row, meta ){
					var template =
					'<input type="text" id="" name="" class="form-control " value="' + data + '" placeholder="" />';
					return template;
				}
			},
			// 8- image
			{
				targets: 8,
				render: function( data, type, row, meta ){
					var template =
					'<img data-src="' + data + '" class="img img-responsive img-circle-thumb img-lazy" />';
					return template;
				}
			},
			// 9- date
			{
				type: 'eu-date',
				targets: 9,
			},
		],
		order: [
			[2, 'asc']
		],
		buttons: [
			{
				extend: 'colvis',
				titleAttr: 'Alanları göster/gizle',
				text: '<i class="fa fa-eye btn-icon"></i>'
			},
			{
				extend: 'excelHtml5',
				titleAttr: 'Alanları göster/gizle',
				text: '<i class="fa fa-eye btn-icon"></i>'
			},
		],
		select: {
			style: 'multi',
			selector: 'td.column-select',
		},
		fixedHeader: true,
		drawCallback: function(){
			$('.img-lazy').lazyload();
		},
		initComplete: function(){
			if( $('thead .column-select').length > 0 ){
				$('thead .column-select').find('input').on('change', function(e){
					if( $(this).prop('checked') == true ){
						table.rows().select();
					}
					else{
						table.rows().deselect();
					}
				})
			}
		}
	});
	// Yet Another DataTables Column Filter Plugin Invoke
	yadcf.init(table,
		[
			{
				// Specify Column Filtered
				column_number: 7,
				// Label Of Column Filtered ( Table's title option must be 'null' )
				filter_default_label: 'Grup',
				// Get Filter Type
				filter_type: 'select',
				select_type: 'select2',
				select_type_options: {
					width: '100%',
					minimumResultsForSearch: 1,
				},
				// Add Form Control Class To Select
				style_class: 'form-control'
			},
		],
		{
			cumulative_filtering: true
		}
	);
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
	DataTables(data)

	/*
	Event Handlers
	*/
});
