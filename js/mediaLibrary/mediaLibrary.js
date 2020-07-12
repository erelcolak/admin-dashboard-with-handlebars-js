/*
###
Request URL's
###
*/
var _URLMediaList = '';
var _URLSearchMedia = '';
var _URLSaveMedia = '';
var _URLDeleteMedia = '';
var _URLUploadMedia = '';

/*
###
Variables
###
*/
const basePath = 'https://ofixdisk.blob.core.windows.net/';
const basePathWithoutProtocol = 'ofixdisk.blob.core.windows.net/';
const blankImageURL = 'img/blank-images/empty-bg.jpg';
const baseURL = 'https://ofixdisk.blob.core.windows.net/';
const maxFileNameLength = 64;
const maxFileSize = 2000000000;
const minFileSize = 1;
const minSearchInputLength = 2;
const uploadedMediaInputsName = 'uploadedMediaInputs';
var searchingStatus = false;

/*
###
Functions
###
*/

// JQuery File Upload
function fileUploadPlugin(componentData) {
	// JQuery File Upload Plugin
	$('#inputUploadFile').fileupload({
		url: _URLUploadMedia,
		dataType: 'json',
		contentType: false,
		multipart: true,
		maxFileSize: maxFileSize,
		dropZone: $('body #dropZone'), // Dropzone Area
		formData: componentData,
		beforeSend: function(data){
			Loading( true, $('#modalMediaLibrary .modal-content') )
		},
		success: function(e, data){

		},
		error: function(e, data){
			Alert(alertText.ajax.error);
		},
		complete: function (e, data) {
			// Showing Tab And Select Uploaded Media
			$('a[href="#mediaLibraryListingTab"]').tab('show');
			Loading(false)
		}

	}).bind('fileuploadadd', function (e, data) {
		// check if it is a product image or not for mime type of png
		/*
		if( componentData.componentName == 'product-image' ){
			if( data.files[0].type != 'image/jpeg' ){
				Alert(alertText.fileUpload.fileExtensionNotSupported)
				return false;
			}
		}
		*/
		// check file name char limit
		if (data.files[0].name.length > maxFileNameLength) {
			Alert(alertText.fileUpload.fileNameExceedLimit);
			return false;
		}
		// check file name is proper
		var fileNameRename = (data.files[0].name);
		fileNameRename = fileNameRename.replace( ( fileNameRename.substr( fileNameRename.lastIndexOf('.'), fileNameRename.length ) ), '' );
		var turkishLetters = {'İ': 'i', 'i': 'i', 'I': 'i', 'ı': 'i', 'Ş': 's', 'ş': 's', 'Ğ': 'g', 'ğ': 'g', 'Ü': 'u', 'ü': 'u', 'Ö': 'o', 'ö': 'o', 'Ç': 'c', 'ç': 'c', ' ': '-'};
		var fileNameOld = (fileNameRename).replace(/(([İiIıŞşĞğÜüÖöÇç ]))/g, function(letter){return turkishLetters[letter]}).toLowerCase();
		var fileNameNew = fileNameOld.replace(/[^a-zA-Z0-9()_*\ ]+/g,'-');
		if( fileNameRename != fileNameNew ){
			Alert(alertText.fileUpload.fileNameHasSpecialChar)
		}
	});
}
// Media library modal creating and appending
function MediaLibrary(componentData, ){
	// Modal media library
	var modalMediaLibrary =
	'<!-- modal start -->'+
	'<div id="modalMediaLibrary" class="modal fade" role="dialog">'+
		'<div id="" class="modal-dialog modal-xl">'+
			'<div id="" class="modal-content">'+
				'<div id="" class="modal-header">'+
					'<div id="" class="row">'+
						'<div id="" class="col-md-12 modal-header-informations">'+
							'<div id="" class="row">'+
								'<div id="" class="col-md-12 modal-header-title">'+
									'<i class="fa fa-folder modal-header-title-icon"></i>'+
									'<span class="modal-header-title-text">KÜTÜPHANE</span>'+
									'<a href="" title="" target="_self" id="" class="close " type="button" data-dismiss="modal">'+
									'<i class="fa fa-times btn-icon"></i>'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div id="" class="modal-body">'+
					'<!-- form group container start -->'+
					'<div id="" class="col-md-12 form-group-container">'+
						'<div id="" class="row">'+
							'<div id="" class="col-md-12 form-group-container-body">'+
								'<div id="" class="row">'+
									'<!-- form group start -->'+
									'<div id="" class="col-md-12 form-group">'+
										'<div id="" class="row">'+
											'<div id="" class="col-md-12 form-group-body">'+
												'<div id="" class="row">'+
													'<!-- tab start -->'+
													'<div id="" class="col-md-12 tab-container tab-container-main">'+
														'<div class="row">'+
															'<ul class="nav nav-tabs tab-navigation-container">'+
																'<li class="tab-navigation active">'+
																	'<a class="tab-navigation-link" data-toggle="tab" href="#mediaUploadTab">'+
																		'<i class="fa fa-upload tab-navigation-icon"></i>'+
																		'<span class="tab-navigation-text">YÜKLE</span>'+
																	'</a>'+
																'</li>'+
																'<li class="tab-navigation">'+
																	'<a class="tab-navigation-link" data-toggle="tab" href="#mediaLibraryListingTab">'+
																		'<i class="fa fa-picture-o tab-navigation-icon"></i>'+
																		'<span class="tab-navigation-text">KÜTÜPHANE</span>'+
																	'</a>'+
																'</li>'+
															'</ul>'+
															'<div class="tab-content">'+
																'<div id="mediaUploadTab" class="tab-pane fade in active">'+
																	'<!-- form group container start -->'+
																	'<div id="" class="col-md-12 form-group-container">'+
																		'<div id="" class="row">'+
																			'<div id="" class="col-md-12 form-group-container-body">'+
																				'<div id="" class="row">'+
																					'<!-- form group start -->'+
																					'<div id="" class="col-md-12 form-group">'+
																						'<div id="" class="row">'+
																							'<div id="" class="col-md-12 form-group-header">'+
																								'<div id="" class="row">'+
																									'<div id="" class="col-md-9 form-group-header-informations">'+
																										'<div id="" class="row">'+
																											'<div id="" class="col-md-12 form-group-header-title">'+
																												'<span class="form-group-header-title-text">DOSYA YÜKLEME</span>'+
																											'</div>'+
																										'</div>'+
																									'</div>'+
																									'<div id="" class="col-md-3 form-group-header-controls">'+
																									'</div>'+
																								'</div>'+
																							'</div>'+
																							'<div id="" class="col-md-12 form-group-body">'+
																								'<div id="" class="row">'+
																									'<!-- form group container start -->'+
																									'<div id="" class="col-md-12 form-group-container">'+
																										'<div id="" class="row">'+
																											'<div id="" class="col-md-12 form-group-container-body">'+
																												'<div id="" class="row">'+
																													'<!-- info content container start -->'+
																													'<div id="dropZone" class="col-md-12 info-content-container info-content-container-center info-content-container-jumbotron default">'+
																														'<div id="" class="box-invisible">'+
																															'<div id="" class="row ">'+
																																'<div id="" class="col-md-12 info-content">'+
																																	'<div id="" class="row ">'+
																																		'<div id="" class="col-md-12 info-content-body">'+
																																			'<p class="info-content-text">Yüklemek istediğiniz dosyaları seçin ya da sürükleyip bırakın</p>'+
																																			'<p class="info-content-text">'+
																																				'<label id="" class="form-item-label btn btn-primary">'+
																																					'<input type="file" id="inputUploadFile" name="inputUploadFile" class="form-control hidden" value="" placeholder="" />'+
																																					'<span class="fa fa-upload btn-icon"></span>'+
																																					'<span class="btn-text">DOSYA YÜKLE</span>'+
																																				'</label>'+
																																			'</p>'+
																																		'</div>'+
																																	'</div>'+
																																'</div>'+
																															'</div>'+
																														'</div>'+
																													'</div>'+
																													'<!-- info content container end -->'+

																												'</div>'+
																											'</div>'+
																										'</div>'+
																									'</div>'+
																									'<!-- form group container end -->'+
																								'</div>'+
																							'</div>'+
																						'</div>'+
																					'</div>'+
																					'<!-- form group end -->'+
																				'</div>'+
																			'</div>'+
																		'</div>'+
																	'</div>'+
																	'<!-- form group container end -->'+
																'</div>'+
																'<div id="mediaLibraryListingTab" class="tab-pane fade">'+
																	'<!-- form group container start -->'+
																	'<div id="" class="col-md-12 form-group-container">'+
																		'<div id="" class="row">'+
																			'<div id="" class="col-md-12 form-group-container-body">'+
																				'<div id="" class="row">'+
																					'<!-- form group start -->'+
																					'<div id="" class="col-md-12 form-group">'+
																						'<div id="" class="row">'+
																							'<div id="" class="col-md-12 form-group-header">'+
																								'<div id="" class="row">'+
																									'<div id="" class="col-md-9 form-group-header-informations">'+
																										'<div id="" class="row">'+
																											'<div id="" class="col-md-12 form-group-header-title">'+
																												'<span class="form-group-header-title-text">KÜTÜPHANE</span>'+
																											'</div>'+
																										'</div>'+
																									'</div>'+
																									'<div id="" class="col-md-3 form-group-header-controls">'+
																									'</div>'+
																								'</div>'+
																							'</div>'+
																							'<div id="" class="col-md-12 form-group-body">'+
																								'<div id="" class="row">'+
																									'<!-- form group start -->'+
																									'<div id="mediaListingFormGroup" class="col-md-8 form-group form-group-inner">'+
																										'<div id="" class="box-border">'+
																											'<div id="" class="row">'+
																												'<div id="" class="col-md-12 form-group-header">'+
																													'<div id="" class="row">'+
																														'<div id="" class="col-md-6 form-group-header-informations">'+
																															'<div id="" class="row">'+
																																'<div id="" class="col-md-12 form-group-header-title">'+
																																	'<i class="fa fa-info-circle-o form-group-header-title-icon"></i>'+
																																	'<span class="form-group-header-title-text">MEDYALAR</span>'+
																																'</div>'+
																															'</div>'+
																														'</div>'+
																														'<div id="" class="col-md-6 form-group-header-controls">'+
																															'<!-- input group start -->'+
																															'<div id="InputGroupSearchMedia" class="input-group">'+
																																'<input type="text" id="inputSearchMedia" name="" class="form-control " value="" placeholder="" />'+
																																'<span class="input-group-btn">'+
																																	'<a href="" title="" target="_self" id="btnSearchMedia" class="btn btn-default " type="button">'+
																																		'<i class="fa fa-search btn-icon"></i>'+
																																	'</a>'+
																																'</span>'+
																															'</div>'+
																															'<!-- input group end -->'+
																														'</div>'+
																													'</div>'+
																												'</div>'+
																												'<div id="" class="col-md-12 form-group-body">'+
																													'<div id="" class="row">'+
																														'<!-- templateMediaList handlebars template start -->'+
																														'<script id="templateMediaList" type="text/x-handlebars-template">'+
																															'<div id="mediaListContainer" class="col-md-12 media-list-container scrollspy">'+
																																'<div id="" class="row">'+
																																	'{{#each this}}'+
																																	'<div id="" class="col-md-2 media-item"'+
																																	'data-id="{{Id}}"'+
																																	'data-file-name="{{FileName}}"'+
																																	'data-title="{{Title}}"'+
																																	'data-alt="{{Alt}}"'+
																																	'data-description="{{Description}}"'+
																																	'data-media-file-type-idx="{{MediaFileTypeIdx}}"'+
																																	'data-file-type="{{FileType}}"'+
																																	'data-path="{{FullPath Path}}"'+
																																	'data-byte-size="{{ByteSize}}"'+
																																	'data-date-created="{{DateCreated}}"'+
																																	'data-width="{{Width}}"'+
																																	'data-height="{{Height}}">'+
																																		'<label id="" class="form-item-label radio label-block media-item-label">'+
																																			'<input type="radio" id="" name="' + uploadedMediaInputsName + '" class="" value="" />'+
																																			'<img src="{{FullPath Path}}" title="{{Title}}" alt="{{Alt}}" id="uploadedMedia{{Id}}" class="img img-media-item-thumb" />'+
																																		'</label>'+
																																	'</div>'+
																																	'{{/each}}'+
																																'</div>'+
																															'</div>'+
																														'</script>'+
																														'<!-- templateMediaList handlebars template end -->'+
																														'<!-- renderMediaList handlebars render start -->'+
																														'<div id="renderMediaList" class="render-template"></div>'+
																														'<!-- renderMediaList handlebars render end -->'+
																													'</div>'+
																												'</div>'+
																											'</div>'+
																										'</div>'+
																									'</div>'+
																									'<!-- form group end -->'+
																									'<!-- templateMediaInformations handlebars template start -->'+
																									'<script id="templateMediaInformations" type="text/x-handlebars-template">'+
																										'{{#if this}}'+
																										'<!-- form group start -->'+
																										'<div id="mediaInformationsFormGroup" class="col-md-4 form-group form-group-inner">'+
																											'<div id="" class="box-border">'+
																												'<div id="" class="row">'+
																													'<div id="" class="col-md-12 form-group-header">'+
																														'<div id="" class="row">'+
																															'<div id="" class="col-md-12 form-group-header-informations">'+
																																'<div id="" class="row">'+
																																	'<div id="" class="col-md-12 form-group-header-title">'+
																																		'<i class="fa fa-info-circle-o form-group-header-title-icon"></i>'+
																																		'<span class="form-group-header-title-text">MEDYA BİLGİLERİ</span>'+
																																	'</div>'+
																																'</div>'+
																															'</div>'+
																														'</div>'+
																													'</div>'+
																													'<div id="" class="col-md-12 form-group-body scrollspy">'+
																														'<div id="" class="row">'+
																																'<!-- form item start -->'+
																																'<div id="mediaPreview" class="col-md-12 form-item">'+
																																	'<img src="{{Path}}" title="{{Title}}" alt="{{Alt}}" id="{{Id}}" class="img img-media-item" />'+
																																'</div>'+
																																'<!-- form item end -->'+
																																'<!-- form item start -->'+
																																'<div id="mediaInformationsFileName" class="col-md-12 form-item">'+
																																	'<div id="" class="row">'+
																																		'<div id="" class="col-md-12 form-item-informations">'+
																																			'<label for="" class="form-item-title">DOSYA ADI</label>'+
																																			'<div id="" class="form-item-description"></div>'+
																																		'</div>'+
																																		'<div id="" class="col-md-12 form-item-inputs">'+
																																			'<input type="text" id="" name="" class="form-control " value="{{FileName}}" placeholder="" />'+
																																		'</div>'+
																																	'</div>'+
																																'</div>'+
																																'<!-- form item end -->'+
																																'<!-- form item start -->'+
																																'<div id="mediaInformationsTitle" class="col-md-12 form-item">'+
																																	'<div id="" class="row">'+
																																		'<div id="" class="col-md-12 form-item-informations">'+
																																			'<label for="" class="form-item-title">BAŞLIK METNİ</label>'+
																																			'<div id="" class="form-item-description"></div>'+
																																		'</div>'+
																																		'<div id="" class="col-md-12 form-item-inputs">'+
																																			'<input type="text" id="" name="" class="form-control " value="{{Title}}" placeholder="" />'+
																																		'</div>'+
																																	'</div>'+
																																'</div>'+
																																'<!-- form item end -->'+
																																'<!-- form item start -->'+
																																'<div id="mediaInformationsAlt" class="col-md-12 form-item">'+
																																	'<div id="" class="row">'+
																																		'<div id="" class="col-md-12 form-item-informations">'+
																																			'<label for="" class="form-item-title">ALT ETİKETİ</label>'+
																																			'<div id="" class="form-item-description"></div>'+
																																		'</div>'+
																																		'<div id="" class="col-md-12 form-item-inputs">'+
																																			'<input type="text" id="" name="" class="form-control " value="{{Alt}}" placeholder="" />'+
																																		'</div>'+
																																	'</div>'+
																																'</div>'+
																																'<!-- form item end -->'+
																																'<!-- form item start -->'+
																																'<div id="mediaInformationsDescription" class="col-md-12 form-item">'+
																																	'<div id="" class="row">'+
																																		'<div id="" class="col-md-12 form-item-informations">'+
																																			'<label for="" class="form-item-title">TANIM</label>'+
																																			'<div id="" class="form-item-description"></div>'+
																																		'</div>'+
																																		'<div id="" class="col-md-12 form-item-inputs">'+
																																			'<select id="" name="" class="form-control" value="" >'+
																																			'</select>'+
																																		'</div>'+
																																	'</div>'+
																																'</div>'+
																																'<!-- form item end -->'+
																														'</div>'+
																													'</div>'+
																													'<div id="" class="col-md-12 form-group-footer">'+
																														'<a href="" title="" target="_self" id="btnDeleteMedia" class="btn btn-default btn-left " type="button">'+
																															'<span class="btn-text">SİL</span>'+
																														'</a>'+
																														'<a href="" title="" target="_self" id="btnSaveMedia" class="btn btn-success " type="button">'+
																															'<span class="btn-text">KAYDET</span>'+
																														'</a>'+
																														'<a href="" title="" target="_self" id="addSelectedMedia" class="btn btn-primary " type="button">'+
																															'<span class="btn-text">EKLE</span>'+
																														'</a>'+
																													'</div>'+
																												'</div>'+
																											'</div>'+
																										'</div>'+
																										'<!-- form group end -->'+
																										'{{/if}}'+
																									'</script>'+
																									'<!-- templateMediaInformations handlebars template end -->'+
																									'<!-- renderMediaInformations handlebars render start -->'+
																									'<div id="renderMediaInformations" class="render-template"></div>'+
																									'<!-- renderMediaInformations handlebars render end -->'+
																								'</div>'+
																							'</div>'+
																						'</div>'+
																					'</div>'+
																					'<!-- form group end -->'+
																				'</div>'+
																			'</div>'+
																		'</div>'+
																	'</div>'+
																	'<!-- form group container end -->'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+
													'<!-- tab end -->'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<!-- form group end -->'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<!-- form group container end -->'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'<!-- modal end -->';
	// Append modal to DOM
	$('body').append(modalMediaLibrary);
	// Invoke jQuery fileupload plugin
	fileUploadPlugin()
	// Show Modal
	$('#modalMediaLibrary').modal('show');
}
// Control 404 Blank Images
function ControlBlankImages(){
	$('img[id^="uploadedMedia"]').error(function(){
		$(this).attr('src', blankImageURL);
		$(this).closest('.media-item').attr('data-path', blankImageURL).addClass('has-error');
	});
}

/*
###
Helpers for Handlebars Templating
###
*/
// Helper - Image Full Path
Handlebars.registerHelper('FullPath', function(path){
	return baseURL + path;
});

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

	/*
	Event Handlers
	*/
	// List media
	$('body').on('shown.bs.tab', 'a[href="#mediaLibraryListingTab"]', function(){
		// Ajax Query - Media List
		$.ajax({
			// url: _URLMediaList,
			type: 'POST',
			// data: ,
			beforeSend: function(xhr){
				Loading( true, $('#modalMediaLibrary .modal-content') )
			},
			success: function(data){

			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				var data =
				[
					{
						"Id":2020,
						"Alt":"misnet-logo-ofix",
						"ByteSize":4142,
						"ComponentName":null,
						"DateCreated":"/Date(1525255972347)/",
						"Description":["Misnet Logo Ofix","asd", "Lorem"],
						"FileName":"misnet-logo-ofix_.jpg",
						"FileType":"image/jpeg",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/misnet-logo-ofix_.jpg",
						"Subtitle":"misnet-logo-ofix",
						"Title":"misnet-logo-ofix",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1595,
						"Alt":"Ultimate Logo",
						"ByteSize":3211,
						"ComponentName":null,
						"DateCreated":"/Date(1515653975847)/",
						"Description":["Ultimate Logo", "Description", "Ultimate"],
						"FileName":"ultimate-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/ultimate-ofix.jpg",
						"Subtitle":"Ultimate Logo",
						"Title":"Ultimate Logo",
						"Width":200
					},
				]
				// Rendering Template
				$('body #renderMediaList').Handle({
					source: $('body #templateMediaList'),
					data: data,
					callback: function(){
						// Invoke Control Blank Images
						ControlBlankImages()
						Loading(false)
					}
				});
			}
		});
	});
	// Show media details on clicking to media
	$('body').on('click', '#mediaListingFormGroup .media-item', function(e){
		// add selected class to item
		$('.media-item').removeClass('selected');
		$(this).addClass('selected');

		// If there is an error on media loading
		if( $(this).hasClass('has-error') ){
			e.preventDefault();
			Alert(alertText.fileUpload.fileHasError)
		}
		else{
			var that = $(this);
			var descriptionFnc = function(){
				var arr = [];
				var arrSplit = (that.attr('data-description')).split(',');
				for( var i = 0; i < arrSplit.length; i++ ){
					arr.push(
						{
							id: arrSplit[i],
							text: arrSplit[i],
							selected: true,
						}
					)
				}
				return arr;
			}
			var data = {
				Id: that.attr('data-id'),
				FileName: that.attr('data-file-name'),
				Title: that.attr('data-title'),
				Alt: that.attr('data-alt'),
				Description: descriptionFnc(),
				MediaFileTypeIdx: that.attr('data-media-file-type-idx'),
				FileType: that.attr('data-file-type'),
				Path: that.attr('data-path'),
				ByteSize: that.attr('data-byte-size'),
				DateCreated: that.attr('data-date-created'),
				Width: that.attr('data-width'),
				Height: that.attr('data-height')
			}
			// Rendering Template
			$('body #renderMediaInformations').Handle({
				source: $('body #templateMediaInformations'),
				data: data,
				callback: function(){
					// Invoke Select2 Plugin
					$('#mediaInformationsDescription').find('select').select2({
						data: data.Description,
						placeholder: 'Seçim yapınız',
						minimumInputLength: 0,
						multiple: true,
						tags: true,
						cache: false,
						templateResult: function(data){
							var template = '';
							if( data.loading != true ){
								if( data.element == undefined ){
									template = '<strong>' + data.text + '</strong>' + '<span> - Ekle</span>';
								}
								else{
									template = '<span>' + data.text + '</span>';
								}
								return $(template);
							}
						},
					})
				}
			});
		}
	});
	// Search media
	$('body').on('click', '#btnSearchMedia', function(e){
		e.preventDefault();
		var valOfSearchBox = $('#inputSearchMedia').val();
		if( $.trim(valOfSearchBox).length > minSearchInputLength ){
			if( searchingStatus !== false ){
				clearTimeout( searchingStatus )
			}
			searchingStatus = setTimeout(function(){
				// Ajax Query - Search Media
				$.ajax({
					// url: _URLSearchMedia,
					type: 'POST',
					// data: valOfSearchBox,
					beforeSend: function(xhr){
						Loading( true, $('#modalMediaLibrary .modal-content') )
					},
					success: function(data){

					},
					error: function(data){
						Alert(alertText.ajax.error)
					},
					complete: function(){
						var data =
						[
							{
								"Id":1597,
								"Alt":"Gülnar Plastik Logo",
								"ByteSize":4249,
								"ComponentName":null,
								"DateCreated":"/Date(1515656695973)/",
								"Description":"Gülnar Plastik Logo",
								"FileName":"gulnar-plastik-logo-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
								"Subtitle":"Gülnar Plastik Logo",
								"Title":"Gülnar Plastik Logo",
								"Width":200
							},
							{
								"Id":1596,
								"Alt":"Pars Logo",
								"ByteSize":4337,
								"ComponentName":null,
								"DateCreated":"/Date(1515655270767)/",
								"Description":"Pars Logo",
								"FileName":"pars-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/pars-ofix.jpg",
								"Subtitle":"Pars Logo",
								"Title":"Pars Logo",
								"Width":200
							},
							{
								"Id":1595,
								"Alt":"Ultimate Logo",
								"ByteSize":3211,
								"ComponentName":null,
								"DateCreated":"/Date(1515653975847)/",
								"Description":["Ultimate Logo", "Description", "Ultimate"],
								"FileName":"ultimate-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/ultimate-ofix.jpg",
								"Subtitle":"Ultimate Logo",
								"Title":"Ultimate Logo",
								"Width":200
							},
							{
								"Id":1594,
								"Alt":"Sistem Ambalaj Logo",
								"ByteSize":5906,
								"ComponentName":null,
								"DateCreated":"/Date(1515650365490)/",
								"Description":"Sistem Ambalaj Logo",
								"FileName":"sistem-ambalaj-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/sistem-ambalaj-ofix.jpg",
								"Subtitle":"Sistem Ambalaj Logo",
								"Title":"Sistem Ambalaj Logo",
								"Width":200
							},
							{
								"Id":1579,
								"Alt":"Jacobsens Logo",
								"ByteSize":7061,
								"ComponentName":null,
								"DateCreated":"/Date(1515149741297)/",
								"Description":"Jacobsens Logo Ofix",
								"FileName":"Jacobsens-logo-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/Jacobsens-logo-ofix.jpg",
								"Subtitle":"Jacobsens Logo",
								"Title":"Jacobsens Logo",
								"Width":200
							},
							{
								"Id":1578,
								"Alt":"Kızılay Logo",
								"ByteSize":6009,
								"ComponentName":null,
								"DateCreated":"/Date(1515149691397)/",
								"Description":"Kızılay Logo Ofix",
								"FileName":"kızılay-logo-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/kızılay-logo-ofix.jpg",
								"Subtitle":"Kızılay Logo",
								"Title":"Kızılay Logo",
								"Width":200
							},
							{
								"Id":1577,
								"Alt":"Ofçay Logo",
								"ByteSize":6103,
								"ComponentName":null,
								"DateCreated":"/Date(1515149649877)/",
								"Description":"Ofçay Logo Ofix",
								"FileName":"ofcay-logo-ofix.jpg",
								"FileType":"0",
								"Height":200,
								"MedaiFileTypeIdx":0,
								"Path":"brand-image/ofcay-logo-ofix.jpg",
								"Subtitle":"Ofçay Logo",
								"Title":"Ofçay Logo",
								"Width":200
							}
						];
						// Rendering Template
						$('body #renderMediaList').Handle({
							source: $('body #templateMediaList'),
							data: data,
							callback: function(){
								// Invoke Control Blank Images
								ControlBlankImages()
								Loading(false);
							}
						});
						// Rendering Template - Hide Media Informations
						$('body #renderMediaInformations').Handle({
							source: $('#templateMediaInformations'),
							data: null,
							callback: function(){}
						});
					}
				});
				searchingStatus = false;
			}, 500)
		}
		else{
			return false;
		}
	});
	// Search input
	$('body').on('change', '#inputSearchMedia', function(e){
		var val = $(this).val();
		if( $.trim(val).length <= minSearchInputLength ){
			var data =
			[
				{
					"Id":2020,
					"Alt":"misnet-logo-ofix",
					"ByteSize":4142,
					"ComponentName":null,
					"DateCreated":"/Date(1525255972347)/",
					"Description":["Misnet Logo Ofix","asd", "Lorem"],
					"FileName":"misnet-logo-ofix_.jpg",
					"FileType":"image/jpeg",
					"Height":200,
					"MedaiFileTypeIdx":0,
					"Path":"brand-image/misnet-logo-ofix_.jpg",
					"Subtitle":"misnet-logo-ofix",
					"Title":"misnet-logo-ofix",
					"Width":200
				},
				{
					"Id":1597,
					"Alt":"Gülnar Plastik Logo",
					"ByteSize":4249,
					"ComponentName":null,
					"DateCreated":"/Date(1515656695973)/",
					"Description":"Gülnar Plastik Logo",
					"FileName":"gulnar-plastik-logo-ofix.jpg",
					"FileType":"0",
					"Height":200,
					"MedaiFileTypeIdx":0,
					"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
					"Subtitle":"Gülnar Plastik Logo",
					"Title":"Gülnar Plastik Logo",
					"Width":200
				},
				{
					"Id":1596,
					"Alt":"Pars Logo",
					"ByteSize":4337,
					"ComponentName":null,
					"DateCreated":"/Date(1515655270767)/",
					"Description":"Pars Logo",
					"FileName":"pars-ofix.jpg",
					"FileType":"0",
					"Height":200,
					"MedaiFileTypeIdx":0,
					"Path":"brand-image/pars-ofix.jpg",
					"Subtitle":"Pars Logo",
					"Title":"Pars Logo",
					"Width":200
				},
				{
					"Id":1595,
					"Alt":"Ultimate Logo",
					"ByteSize":3211,
					"ComponentName":null,
					"DateCreated":"/Date(1515653975847)/",
					"Description":["Ultimate Logo", "Description", "Ultimate"],
					"FileName":"ultimate-ofix.jpg",
					"FileType":"0",
					"Height":200,
					"MedaiFileTypeIdx":0,
					"Path":"brand-image/ultimate-ofix.jpg",
					"Subtitle":"Ultimate Logo",
					"Title":"Ultimate Logo",
					"Width":200
				},
			]
			// Rendering Template
			$('body #renderMediaList').Handle({
				source: $('body #templateMediaList'),
				data: data,
				callback: function(){
					// Invoke Control Blank Images
					ControlBlankImages()
				}
			});
			// Rendering Template - Hide Media Informations
			$('body #renderMediaInformations').Handle({
				source: $('#templateMediaInformations'),
				data: null,
				callback: function(){}
			});
		}
	});
	// Search input on keypress enter submit form
	$('body').on('keydown', '#inputSearchMedia', function(e){
		if( e.which == 13 ){
			$('#btnSearchMedia').trigger('click');
		}
	});
	// Delete media
	$('body').on('click', '#btnDeleteMedia', function(e){
		e.preventDefault();
		var mediaId = $('#mediaPreview').attr('id');

		var requestData = {
			Id: mediaId
		}
		// Ajax Query - Delete Media
		$.ajax({
			// url: _URLDeleteMedia,
			type: 'POST',
			// data: requestData,
			beforeSend: function(xhr){
				Loading( true, $('#modalMediaLibrary .modal-content') )
			},
			success: function(data){

			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				var data =
				[
					{
						"Id":2020,
						"Alt":"misnet-logo-ofix",
						"ByteSize":4142,
						"ComponentName":null,
						"DateCreated":"/Date(1525255972347)/",
						"Description":["Misnet Logo Ofix","asd", "Lorem"],
						"FileName":"misnet-logo-ofix_.jpg",
						"FileType":"image/jpeg",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/misnet-logo-ofix_.jpg",
						"Subtitle":"misnet-logo-ofix",
						"Title":"misnet-logo-ofix",
						"Width":200
					},
					{
						"Id":1597,
						"Alt":"Gülnar Plastik Logo",
						"ByteSize":4249,
						"ComponentName":null,
						"DateCreated":"/Date(1515656695973)/",
						"Description":"Gülnar Plastik Logo",
						"FileName":"gulnar-plastik-logo-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/gulnar-plastik-logo-ofix.jpg",
						"Subtitle":"Gülnar Plastik Logo",
						"Title":"Gülnar Plastik Logo",
						"Width":200
					},
					{
						"Id":1596,
						"Alt":"Pars Logo",
						"ByteSize":4337,
						"ComponentName":null,
						"DateCreated":"/Date(1515655270767)/",
						"Description":"Pars Logo",
						"FileName":"pars-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/pars-ofix.jpg",
						"Subtitle":"Pars Logo",
						"Title":"Pars Logo",
						"Width":200
					},
					{
						"Id":1595,
						"Alt":"Ultimate Logo",
						"ByteSize":3211,
						"ComponentName":null,
						"DateCreated":"/Date(1515653975847)/",
						"Description":["Ultimate Logo", "Description", "Ultimate"],
						"FileName":"ultimate-ofix.jpg",
						"FileType":"0",
						"Height":200,
						"MedaiFileTypeIdx":0,
						"Path":"brand-image/ultimate-ofix.jpg",
						"Subtitle":"Ultimate Logo",
						"Title":"Ultimate Logo",
						"Width":200
					},
				]
				// Rendering Template
				$('body #renderMediaList').Handle({
					source: $('body #templateMediaList'),
					data: data,
					callback: function(){
						// Invoke Control Blank Images
						ControlBlankImages()
						Loading(false);
					}
				});
				// Rendering Template - Hide Media Informations
				$('body #renderMediaInformations').Handle({
					source: $('#templateMediaInformations'),
					data: null,
					callback: function(){}
				});
			}
		});
	});
	// Save media
	$('body').on('click', '#btnSaveMedia', function(e){
		e.preventDefault();
		var mediaInformationsFileName = $('#mediaInformationsFileName').find('input').val();
		var mediaInformationsTitle = $('#mediaInformationsTitle').find('input').val();
		var mediaInformationsAlt = $('#mediaInformationsAlt').find('input').val();
		var mediaInformationsDescription = $('#mediaInformationsDescription').find('select').val();
		var mediaId = $('#mediaPreview').attr('id')

		var requestData = {
			Id: mediaId,
			FileName: mediaInformationsFileName,
			Title: mediaInformationsTitle,
			Alt: mediaInformationsAlt,
			Description: mediaInformationsDescription
		}

		// Ajax Query - Save Media Informations
		$.ajax({
			// url: _URLSaveMedia,
			type: 'POST',
			// data: requestData,
			beforeSend: function(xhr){
				Loading( true, $('#modalMediaLibrary .modal-content') )
			},
			success: function(data){

			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				var data =
				{
					"Id":2020,
					"Alt":"misnet-logo-ofix",
					"ByteSize":4142,
					"ComponentName":null,
					"DateCreated":"/Date(1525255972347)/",
					"Description":["Deneme Logo Ofix","asd", "Lorem"],
					"FileName":"DenemeLogo.jpg",
					"FileType":"image/jpeg",
					"Height":250,
					"MedaiFileTypeIdx":0,
					"Path":"brand-image/pars-ofix.jpg",
					"Subtitle":"Subtitlke-logo-ofix",
					"Title":"aTitlelogo-ofix",
					"Width":250
				}
				// Change selected media item's informations
				$('.media-item.selected')
					.attr('data-id', data.Id)
					.attr('data-file-name', data.FileName)
					.attr('data-title', data.Title)
					.attr('data-alt', data.Alt)
					.attr('data-description', data.Description)
					.attr('data-media-file-type-idx', data.MediaFileTypeIdx)
					.attr('data-file-type', data.FileType)
					.attr('data-path', baseURL + data.Path)
					.attr('data-byte-size', data.ByteSize)
					.attr('data-date-created', data.DateCreated)
					.attr('data-width', data.Width)
					.attr('data-height', data.Height)
					.find('.media-item-label').find('img')
					.attr('src', baseURL + data.Path)
					.attr('title', data.Title)
					.attr('alt', data.Alt).trigger('click');
				Loading(false);
			}
		});
	});
	// Remove modal on every hidden event
	$('body').on('hidden.bs.modal', '#modalMediaLibrary', function(e){
		$(this).remove();
	});
});
