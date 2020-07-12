
/*
###
Request URL's & Data Variables
###
*/


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
// line chart
function LineChart(){
	var ctx = $('#chartLine');
	var chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [
				'Ocak',
				'Şubat',
				'Mart',
				'Nisan',
				'Mayıs',
				'Haziran',
				'Temmuz',
				'Ağustos',
				'Eylül',
				'Ekim',
				'Kasım',
				'Aralık',
			],
			datasets: [
				{
					label: 'Ürün Satış Miktarı',
					data: [15, 12, 36, 26, 64, 88, 43, 78,36, 66, 56, 59],
					backgroundColor: '#2196f380',
					borderColor: '#2196f3',
					borderWidth: 2,
				},
				{
					label: 'Ürün Alış Miktarı',
					data: [61, 212, 162, 82, 44, 65, 12, 13, 55, 94, 57, 60],
					backgroundColor: '#ffc10780',
					borderColor: '#ffc107',
					borderWidth: 2,
				},
			]
		},
		options: {
			title: {
				display: true,
				text: 'LINE CHART SAMPLE',

			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero:true
						}
					}
				]
			}
		},
	});
}
// bar chart
function BarChart(){
	var ctx = $('#chartBar');
	var chart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'Ocak',
				'Şubat',
				'Mart',
				'Nisan',
				'Mayıs',
				'Haziran',
				'Temmuz',
				'Ağustos',
				'Eylül',
				'Ekim',
				'Kasım',
				'Aralık',
			],
			datasets: [
				{
					label: 'Ürün Satış Miktarı',
					data: [15, 12, 36, 26, 64, 88, 43, 78,36, 66, 56, 59],
					backgroundColor: 'rgba(33, 150, 243, 0.5)',
					borderColor: 'rgba(33, 150, 243, 1)',
					borderWidth: 2,
				},
				{
					label: 'Ürün Alış Miktarı',
					data: [61, 212, 162, 82, 44, 65, 12, 13, 55, 94, 57, 60],
					backgroundColor: 'rgba(255, 193, 7, 0.5)',
					borderColor: 'rgba(255, 193, 7, 1)',
					borderWidth: 2,
				},
			]
		},
		options: {
			title: {
				display: true,
				text: 'BAR CHART SAMPLE',

			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero:true
						}
					}
				]
			}
		},
	});
}
// Doughnut chart
function DoughnutChart(){
	var ctx = $('#chartDoughnut');
	var chart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: [
				'Ocak',
				'Şubat',
				'Mart',
			],
			datasets: [
				{
					data: [15, 12, 36],
					backgroundColor: ['rgba(33, 150, 243, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(255, 155, 7, 0.5)'],
				}
			]
		},
		options: {
			title: {
				display: true,
				text: 'DOUGHNUT CHART SAMPLE',

			},
		},
	});
}
// Pie chart
function PieChart(){
	var ctx = $('#chartPie');
	var chart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: [
				'Ocak',
				'Şubat',
				'Mart',
			],
			datasets: [
				{
					data: [15, 12, 36],
					backgroundColor: ['rgba(33, 150, 243, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(255, 155, 7, 0.5)'],
				}
			]
		},
		options: {
			title: {
				display: true,
				text: 'PIE CHART SAMPLE',

			},
		},
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
	LineChart()
	BarChart()
	DoughnutChart()
	PieChart()

	/*
	Event Handlers
	*/
});
