
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
function TinyMCEEditor(selector){
	tinymce.init({
		selector: selector,
		language: 'tr_TR',
		entity_encoding: 'raw',
		// entity_encoding: 'named',
		skin: 'lightgray',
		width: '100%',
		height: 250,
		inline: false,
		menubar: false,
		statusbar: true,
		content_css: 'css/style.css',
		plugins: 'link lists table code fullscreen media wordcount hr textcolor autoresize paste image imagetools ',
		toolbar: [
			'bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | hr outdent indent | table | code fullscreen',
			'fileManagerButton image media | link unlink | undo redo '
		],
		valid_elements: '@[id|class|title|style|data-options|data*],' +
			'a[name|href|target|title],' +
			'table[align|border|cellpadding|cellspacing|width|style], tr, td, th, tbody, thead, tfoot,'+
			'iframe[src|width|height|frameborder|allow|allowfullscreen|webkitallowfullscreen|mozallowfullscreen],' +
			'#p,-ol,-ul,-li,br,img[src|height|width],-b,-i,-u,-strong,' +
			'-span[data-mce-type],hr',
		invalid_elements: 'pre, code, input, textarea, select, font, o',
		convert_fonts_to_spans: true,
		remove_trailing_brs: true,
		forced_root_block: 'p',
		force_br_newlines: false,
		force_p_newlines: false,
		remove_linebreaks: true,
		keep_styles: false,
		branding: false,
		setup: function (editor) {
			// File Manager Button
			editor.addButton('fileManagerButton', {
				title: ' Medya Kütüphanesi',
				icon: 'fa fa-folder',
				onclick: function (e) {
					$('#btnOpenMediaLibrary').click();
				}
			})
			editor.addButton('resetImageDimensions', {
				title: ' Gerçek Boyuta Getir',
				icon: 'fa fa-expand',
				onclick: function (e) {
					var selectedElement = editor.selection.getNode();
					var selectedElementTag = $(selectedElement).prop('tagName');
					if (selectedElementTag == 'IMG' || selectedElementTag == 'img') {
						$(selectedElement).attr('width', $(selectedElement).attr('data-original-width')).attr('height', $(selectedElement).attr('data-original-height')).removeAttr('style');
					}
					else {
						if ($(selectedElement).find('img')) {
							$(selectedElement).find('img').attr('width', $(selectedElement).attr('data-original-width')).attr('height', $(selectedElement).attr('data-original-height')).removeAttr('style');
						}
						else {
							return false;
						}
					}
				}
			});
		},
		/* Plugin Settings */
		// Image Tools Plugin
		imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions | resetImageDimensions',
		imagetools_cors_hosts: [],
		// Paste Plugin
		paste_as_text: true,
		paste_word_valid_elements: 'b,strong, h1, h2, h3, h4, h5, h6, i, em, p',
		paste_retain_style_properties: 'none',
		paste_data_images: false,
		paste_merge_formats: true,
		paste_webkit_styles: 'none',
		autoresize_min_height: 250,
		autoresize_max_height: 350,
		autoresize_bottom_margin: 0,
		// Text Plugin
		textcolor_rows: 4,
		textcolor_map: [
			'000000', 'Black 000000',
			'222222', 'Black 222222',
			'333333', 'Black 333333',
			'444444', 'Black 444444',
			'666666', 'Gray 666666',
			'808080', 'Gray 808080',
			'888888', 'Gray 888888',
			'999999', 'Gray 999999',
			'dddddd', 'Gray dddddd',
			'ff0000', 'Red ff0000',
			'fe331d', 'Red fe331d',
			'3d8af7', 'Blue 3d8af7',
			'0f7aca', 'Blue 0f7aca',
			'5e9b44', 'Green 5e9b44',
			'fadf17', 'Yellow fadf17',
			'ffe50d', 'Yellow ffe50d',
			'dfce00', 'Yellow dfce00',
			'b7a000', 'Yellow b7a000',
			'f8f8f8', 'White f8f8f8',
		],
		// Set Content
		init_instance_callback : function(editor) {
			// editor.setContent(data);
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
	// tinymce - invoke plugin
	TinyMCEEditor('#textarea')

	/*
	Event Handlers
	*/
});
