/*
###
SIDEBAR MENU
###
*/

// Set Constant Variables
const baseDomain = 'http://www.erelcolak.com/projects/ofix';
const sidebarLeftMenuContainer = 'sidebarLeftMenuContainer';
const refreshMenuId = '9901';
const refreshLocalStorageId = '9902';

/*
KEYS

id: has a simple algorithm which is contains parent id at the start of the element
uniqueId: is id of .collapse-menu class's div. that not effects to collapsing just effects finding element. it starts with sidebarMenu_ (with undersquare)
title: Title and label of element
level: level of element in menu it can not be higher than 3
href: it can be normal link or collapse link without hash symbol - for instance : /index.php is a normal link and #buttons is collapse link href and uniqueId can not be equal to each other! it starts with sidebarMenu (without undersquare)
icon: icon of element which is contains fa fa-* classes
isHidden: if it is true ; it hides element
isDisabled: if it is true; it disables element
hasSubmenu: if it is true; it means it's not a link and it can be collapse. if it is false; it means thats a normal link
parent: parentId of element without any symbol. if it is level 1 element parent must be equal to sidebarLeftMenuContainer variable. else it must be parent's "href" key
submenu: it's an array which is contains sub menu elements
*/
var menuItems = [
	{
		id: '01',
		title: 'Base',
		icon: 'fa fa-bars',
		href: 'base',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: true,
		submenu: [
			{
				id: '0101',
				title: 'Typography',
				icon: 'fa fa-font',
				href: '/base-typography.php',
				parent: 'base',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0102',
				title: 'Alerts',
				icon: 'fa fa-exclamation-triangle',
				href: '/base-alerts.php',
				parent: 'base',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0103',
				title: 'Loading',
				icon: 'fa fa-spinner',
				href: '/base-loading.php',
				parent: 'base',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			}
		]
	},
	{
		id: '02',
		title: 'Layouts',
		icon: 'fa fa-th-large',
		href: 'layouts',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: true,
		submenu: [
			{
				id: '0201',
				title: 'Partbox',
				icon: 'fa fa-columns',
				href: '/layouts-partbox.php',
				parent: 'layouts',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0202',
				title: 'Form Group Container',
				icon: 'fa fa-clone',
				href: '/layouts-formGroupContainer.php',
				parent: 'layouts',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0203',
				title: 'Form Group',
				icon: 'fa fa-square',
				href: '/layouts-formGroup.php',
				parent: 'layouts',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0204',
				title: 'Form Group Inner',
				icon: 'fa fa-square-o',
				href: '/layouts-formGroup.php',
				parent: 'layouts',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
		]
	},
	{
		id: '03',
		title: 'Buttons',
		icon: 'fa fa-mouse-pointer',
		href: 'buttons',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: true,
		submenu: [
			{
				id: '0301',
				title: 'Basic',
				icon: 'fa fa-mouse-pointer',
				href: '/buttons-basic.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0302',
				title: 'Alignments',
				icon: 'fa fa-arrows-h',
				href: '/buttons-alignments.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0303',
				title: 'Block',
				icon: 'fa fa-minus',
				href: '/buttons-block.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0304',
				title: 'Colors',
				icon: 'fa fa-paint-brush',
				href: '/buttons-colors.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0305',
				title: 'Dimensions',
				icon: 'fa fa-expand',
				href: '/buttons-dimensions.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0306',
				title: 'Dropdowns',
				icon: 'fa fa-sort',
				href: '/buttons-dropdowns.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0307',
				title: 'Dropdowns',
				icon: 'fa fa-align-left',
				href: '/buttons-placements.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0308',
				title: 'States',
				icon: 'fa fa-star-half-o',
				href: '/buttons-states.php',
				parent: 'buttons',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			}
		]
	},
	{
		id: '04',
		title: 'Forms',
		icon: 'fa fa-check-circle',
		href: 'forms',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: true,
		submenu: [
			{
				id: '0401',
				title: 'Form Items',
				icon: 'fa fa-check',
				href: '/forms-formItems.php',
				parent: 'forms',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0402',
				title: 'Form Controls',
				icon: 'fa fa-check-square-o',
				href: '/forms-formControls.php',
				parent: 'forms',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0403',
				title: 'Checkbox & Radio',
				icon: 'fa fa-toggle-on',
				href: '/forms-checkboxRadio.php',
				parent: 'forms',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0404',
				title: 'Checkbox & Radio Groups',
				icon: 'fa fa-toggle-off',
				href: '/forms-checkboxRadioGroups.php',
				parent: 'forms',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
			{
				id: '0405',
				title: 'Input Groups',
				icon: 'fa fa-plus-square-o',
				href: '/forms-inputGroups.php',
				parent: 'forms',
				level: 2,
				isHidden: false,
				isDisabled: false,
				hasSubmenu: false,
				submenu: []
			},
		]
	},
	{
		id: '05',
		title: 'Info Contents',
		icon: 'fa fa-info-circle',
		href: '/infoContents.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '06',
		title: 'Cards',
		icon: 'fa fa-id-card-o',
		href: '/cards.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '07',
		title: 'Charts',
		icon: 'fa fa-pie-chart',
		href: '/charts.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '08',
		title: 'List Items',
		icon: 'fa fa-bars',
		href: '/listItems.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '09',
		title: 'Tabs',
		icon: 'fa fa-clone',
		href: '/tabs.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '10',
		title: 'Modals',
		icon: 'fa fa-window-restore',
		href: '/modals.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '11',
		title: 'Progress Bars',
		icon: 'fa fa-server',
		href: '/progressBars.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '12',
		title: 'Badges',
		icon: 'fa fa-globe',
		href: '/badges.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '23',
		title: 'Pagination',
		icon: 'fa fa-files-o',
		href: '/pagination.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '25',
		title: 'Tooltip',
		icon: 'fa fa-comment-o',
		href: '/tooltip.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '56',
		title: 'Moment JS',
		icon: 'fa fa-clock-o',
		href: '/moment.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '76',
		title: 'Carousel Slider',
		icon: 'fa fa-sliders',
		href: '/carouselSlider.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '24',
		title: 'Nestable',
		icon: 'fa fa-sort',
		href: '/nestable.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '13',
		title: 'Lazy Load',
		icon: 'fa fa-refresh',
		href: '/lazyload.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '14',
		title: 'Data Tables',
		icon: 'fa fa-table',
		href: '/datatables.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '15',
		title: 'Select2',
		icon: 'fa fa-chevron-down',
		href: '/select2.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '16',
		title: 'Owl Carousel',
		icon: 'fa fa-sliders',
		href: '/owlcarousel.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '17',
		title: 'Input Mask',
		icon: 'fa fa-asterisk',
		href: '/inputmask.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '18',
		title: 'Date & Time Picker',
		icon: 'fa fa-clock-o',
		href: '/datetimepicker.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '19',
		title: 'TinyMCE',
		icon: 'fa fa-font',
		href: '/tinymce.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '20',
		title: 'Media Library',
		icon: 'fa fa-picture-o',
		href: '/medialibrary.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '21',
		title: 'Mail',
		icon: 'fa fa-envelope-o',
		href: '/mail.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '83',
		title: 'Messaging',
		icon: 'fa fa-commenting',
		href: '/messages.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
	{
		id: '22',
		title: 'Static Pages',
		icon: 'fa fa-user-circle-o',
		href: '/staticPages.php',
		parent: sidebarLeftMenuContainer,
		level: 1,
		isHidden: false,
		isDisabled: false,
		hasSubmenu: false,
		submenu: []
	},
];
// Has sub menu attribute of menu element
function HasSubMenu(data){
	var returnedValue = '';
	if( data.hasSubmenu == true ){
		returnedValue = 'data-toggle="collapse"';
	}
	return returnedValue;
}
// Hidden attribute of menu element
function IsHidden(data){
	var returnedValue = '';
	if( data.isHiddden == true ){
		returnedValue = 'hidden';
	}
	return returnedValue;
}
// disabled attribute of menu element
function IsDisabled(data){
	var returnedValue = '';
	if( data.isDisabled == true ){
		returnedValue = 'disabled';
	}
	return returnedValue;
}
// Href attribute of menu element
function Href(data){
	var returnedValue = baseDomain + data.href;
	if( data.hasSubmenu == true ){
		returnedValue = '#'+data.href;
	}
	return returnedValue;
}
// HrefId of menu element
function HrefId(data){
	var returnedValue = data.href;
	if( data.submenu == false ){
		returnedValue = '';
	}
	return returnedValue;
}
// Template of menu element
function TemplateOfMenuElement(data){
	var template =
	'<div id="sidebarLeftMenu_' + data.id + '" class="panel collapse-menu menu-level-' + data.level + ' ' + IsHidden(data) + '">'+
		'<div id="" class="collapse-menu-header">'+
			'<a href="' + Href(data) + '" title="' + data.title + '" target="_self" id="" class="accordion-toggle collapse-menu-header-title ' + IsDisabled(data) + '" type="button" ' + HasSubMenu(data) + ' data-parent="#' + data.parent + '">'+
				'<i class="' + data.icon + ' collapse-menu-header-icon"></i>'+
				'<span class="collapse-menu-header-text">' + data.title + '</span>'+
			'</a>'+
		'</div>'+
		'<div id="' + HrefId(data) + '" class="collapse collapse-menu-body"></div>'+
	'</div>';
	return template;
}
// Rendering Menu Template
function RenderMenu(data){
	for( var i = 0; i < data.length; i++ ){
		var dataI = data[i];
		// Adding First Level Elements
		$('#' + sidebarLeftMenuContainer).append( TemplateOfMenuElement(dataI) );

		// for its submenus
		if ( dataI.hasSubmenu == true ){
			for( var j = 0; j < dataI.submenu.length; j++ ){
				var dataJ = dataI.submenu[j];

				// Adding Second Level Elements
				$('#sidebarLeftMenu_' + dataI.id).find('#' + dataI.href).append( TemplateOfMenuElement(dataJ) );

				// for its submenus
				if( dataJ.hasSubmenu == true ){
					for( var k = 0; k < dataJ.submenu.length; k++ ){
						var dataK = dataJ.submenu[k];

						// Adding Third Level Elements
						$('#sidebarLeftMenu_' + dataJ.id).find('#' + dataJ.href).append( TemplateOfMenuElement(dataK) );
					}
				}
			}
		}
	}
	localStorage.hippoSoftMenuTemplate = $('#' + sidebarLeftMenuContainer).html();
}

$(document).ready(function(){
	/*
	Rendering Menu
	*/
	// If local storage menu template is exist
	if( localStorage.hippoSoftMenuTemplate != undefined ){
		$('#' + sidebarLeftMenuContainer).html( localStorage.hippoSoftMenuTemplate );
	}
	else{
		RenderMenu(menuItems)
	}

	/*
	Sidebar Menu Click Events
	*/
	// Toggle Sidebar Menu
	$('#btnToggleSidebar').on('click', function(e){
		e.preventDefault();
		$('#sidebarLeft').toggle();
	});
	// Hide sidebar menu when click outside
	$('#sidebarLeft > .row').on('click', function(e){
		if( $('#sidebarLeft > .row').has(e.target).length == 0 && !$('#sidebarLeftMenuContainer').is(e.target) ){
			$('#sidebarLeft').toggle();
		}
	})
});
