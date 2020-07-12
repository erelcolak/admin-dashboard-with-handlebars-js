<?php
	include '_layout/_doc-start.php';
?>
<!-- partbox start -->
<div id="partboxMain" class="col-md-12 partbox partbox-main">
	<div id="" class="box">
		<div id="" class="row">

			<div id="" class="col-md-12 partbox-content">
				<div id="" class="row">

					<div id="" class="col-md-12 partbox-header">
						<div id="" class="row">

							<div id="" class="col-md-9 partbox-header-informations">
								<div id="" class="row">

									<div id="" class="col-md-12 partbox-header-title">
										<i class="fa fa-envelope-o partbox-header-title-icon"></i>
										<span class="partbox-header-title-text">BİLDİRİMLER</span>
									</div>
									<div id="" class="col-md-12 partbox-header-subtitle">

									</div>

								</div>
							</div>
							<div id="" class="col-md-3 partbox-header-controls">

							</div>

						</div>
					</div>
					<div id="" class="col-md-12 partbox-body">
						<div id="" class="row">

							<!-- form group container start -->
							<div id="" class="col-md-12 form-group-container">
								<div id="" class="row">

									<div id="" class="col-md-12 form-group-container-body">
										<div id="" class="row">

											<!-- form group start -->
											<div id="" class="col-md-12 form-group">
												<div id="" class="row">

													<div id="" class="col-md-12 form-group-body">
														<div id="" class="row">

															<!-- form group start -->
															<div id="formGroupListingMessage" class="col-md-4 form-group form-group-inner">
																<div id="" class="box-border">
																	<div id="" class="row">

																		<div id="" class="col-md-12 form-group-header">
																			<div id="" class="row">

																				<div id="" class="col-md-9 form-group-header-informations">
																					<div id="" class="row">

																						<div id="" class="col-md-12 form-group-header-title">
																							<span class="form-group-header-title-text">GELENLER</span>
																						</div>

																					</div>
																				</div>
																				<div id="" class="col-md-3 form-group-header-controls">

																				</div>

																			</div>
																		</div>
																		<div id="" class="col-md-12 form-group-body">
																			<div id="" class="row">

																				<!-- list items container start -->
																				<div id="" class="col-md-12 list-items-container scrollspy">
																					<div id="" class="row">

																						<!-- templateListingMessage handlebars template start -->
																						<script id="templateListingMessage" type="text/x-handlebars-template">

																							{{#each this}}
																								<!-- list item start -->
																								<a href="" title="" target="_self" id="" class="list-item-link">
																									<div id="" class="col-md-12 list-item list-item-overflow {{#unless IsRead}}unread{{/unless}}" data-id="{{Id}}" data-is-read="{{IsRead}}">
																										<div id="" class="list-item-content">
																											<div id="" class="list-item-header">
																												<div class="list-item-header-title">
																													<span class="list-item-header-title-text">{{Subject}}</span>
																												</div>
																												<div class="list-item-header-subtitle">{{SenderName}}</div>
																												<div class="list-item-header-subtitle">{{HelperDate DateCreated}}</div>
																											</div>
																											<div id="" class="list-item-body">
																												{{{Body}}}
																											</div>
																										</div>
																									</div>
																								</a>
																								<!-- list item end -->
																							{{/each}}

																						</script>
																						<!-- templateListingMessage handlebars template end -->
																						<!-- renderListingMessage handlebars render start -->
																						<div id="renderListingMessage" class="render-template"></div>
																						<!-- renderListingMessage handlebars render end -->

																					</div>
																				</div>
																				<!-- list items container end -->

																			</div>
																		</div>

																	</div>
																</div>
															</div>
															<!-- form group end -->

															<!-- form group start -->
															<div id="formGroupReadingMessage" class="col-md-8 form-group form-group-inner hidden">
																<div id="" class="box-border">
																	<div id="" class="row">

																		<div id="" class="col-md-12 form-group-header">
																			<div id="" class="row">

																				<!-- templateReadingMessageHeader handlebars template start -->
																				<script id="templateReadingMessageHeader" type="text/x-handlebars-template">

																					<div id="" class="col-md-9 form-group-header-informations" data-model="{{HelperModelToAttribute this}}">
																						<div id="" class="row">

																							<div id="" class="col-md-12 form-group-header-title">
																								<span class="form-group-header-title-text">{{Subject}}</span>
																							</div>

																						</div>
																					</div>
																					<div id="" class="col-md-3 form-group-header-controls">
																						<a href="" title="Öncekini oku" target="_self" id="btnNavigateMessagePrevious" class="btn btn-default btn-ghost " type="button" data-navigate-message-id="{{NavigateMessage.NavigateMessagePrevious}}">
																							<i class="fa fa-angle-left"></i>
																						</a>
																						<a href="" title="Sonrakini oku" target="_self" id="btnNavigateMessageNext" class="btn btn-default btn-ghost " type="button" data-navigate-message-id="{{NavigateMessage.NavigateMessageNext}}">
																							<i class="fa fa-angle-right"></i>
																						</a>
																					</div>
																				</script>
																				<!-- templateReadingMessageHeader handlebars template end -->
																				<!-- renderReadingMessageHeader handlebars render start -->
																				<div id="renderReadingMessageHeader" class="render-template"></div>
																				<!-- renderReadingMessageHeader handlebars render end -->

																			</div>
																		</div>

																		<div id="" class="col-md-12 form-group-body scrollspy">
																			<div id="" class="row">
																				<!-- templateReadingMessageContent handlebars template start -->
																				<script id="templateReadingMessageContent" type="text/x-handlebars-template">
																					<!-- form item start -->
																					<div id="" class="col-md-12 form-item">
																						<span class="title">Gönderen:</span>
																						<span class="subtitle">{{SenderName}}</span>
																					</div>
																					{{#if To}}
																					<div id="" class="col-md-12 form-item">
																						<span class="title">Alıcı:</span>
																						{{#each To}}
																							{{#unless @last}}
																								<span class="subtitle">{{Name}},</span>
																							{{else}}
																								<span class="subtitle">{{Name}}</span>
																							{{/unless}}
																						{{/each}}
																					</div>
																					{{/if}}
																					{{#if Cc}}
																					<div id="" class="col-md-12 form-item">
																						<span class="title">Cc:</span>
																						{{#each Cc}}
																							{{#unless @last}}
																								<span class="subtitle">{{Name}},</span>
																							{{else}}
																								<span class="subtitle">{{Name}}</span>
																							{{/unless}}
																						{{/each}}
																					</div>
																					{{/if}}
																					<div id="" class="col-md-12 form-item">
																						<span class="title">Tarih:</span>
																						<span class="subtitle">{{HelperDate DateCreated}}</span>
																					</div>
																					<!-- form item end -->
																					<!-- form item start -->
																					<div id="" class="col-md-12 form-item">
																						{{{Body}}}
																					</div>
																					<!-- form item end -->
																				</script>
																				<!-- templateReadingMessageContent handlebars template end -->
																				<!-- renderReadingMessageContent handlebars render start -->
																				<div id="renderReadingMessageContent" class="render-template"></div>
																				<!-- renderReadingMessageContent handlebars render end -->

																				<!-- templateReadingMessageContentHistory handlebars template start -->
																				<script id="templateReadingMessageContentHistory" type="text/x-handlebars-template">
																					{{#each this}}
																					<!-- form group start -->
																					<div id="" class="col-md-12 form-group form-group-inner">
																						<div id="" class="box-border">
																							<div id="" class="row">

																								<div id="" class="col-md-12 form-group-body">
																									<div id="" class="row">

																										<!-- form item start -->
																										<div id="" class="col-md-12 form-item">
																											<span class="title">Gönderen:</span>
																											<span class="subtitle">{{SenderName}}</span>
																										</div>
																										{{#if To}}
																										<div id="" class="col-md-12 form-item">
																											<span class="title">Alıcı:</span>
																											{{#each To}}
																												{{#unless @last}}
																													<span class="subtitle">{{Name}},</span>
																												{{else}}
																													<span class="subtitle">{{Name}}</span>
																												{{/unless}}
																											{{/each}}
																										</div>
																										{{/if}}
																										{{#if Cc}}
																										<div id="" class="col-md-12 form-item">
																											<span class="title">Cc:</span>
																											{{#each Cc}}
																												{{#unless @last}}
																													<span class="subtitle">{{Name}},</span>
																												{{else}}
																													<span class="subtitle">{{Name}}</span>
																												{{/unless}}
																											{{/each}}
																										</div>
																										{{/if}}
																										<div id="" class="col-md-12 form-item">
																											<span class="title">Tarih:</span>
																											<span class="subtitle">{{HelperDate DateCreated}}</span>
																										</div>
																										<!-- form item end -->
																										<!-- form item start -->
																										<div id="" class="col-md-12 form-item">
																											{{{Body}}}
																										</div>
																										<!-- form item end -->

																									</div>
																								</div>

																							</div>
																						</div>
																					</div>
																					<!-- form group end -->
																					{{/each}}
																				</script>
																				<!-- templateReadingMessageContentHistory handlebars template end -->
																				<!-- renderReadingMessageContentHistory handlebars render start -->
																				<div id="renderReadingMessageContentHistory" class="render-template"></div>
																				<!-- renderReadingMessageContentHistory handlebars render end -->
																			</div>
																		</div>

																		<!-- templateReadingMessageButtons handlebars template start -->
																		<script id="templateReadingMessageButtons" type="text/x-handlebars-template">
																			<div id="" class="col-md-12 form-group-footer">
																				<a href="" title="İleti geçmişini gör" target="_self" id="btnShowMessageHistory" class="btn btn-default btn-ghost" type="button" data-message-id="{{Id}}">
																					<i class="fa fa-ellipsis-h btn-icon"></i>
																				</a>
																				<a href="" title="Yanıtla" target="_self" id="btnReplyMessage" class="btn btn-default btn-ghost" type="button" data-message-id="{{Id}}">
																					<i class="fa fa-reply btn-icon"></i>
																				</a>
																				<a href="" title="İlet" target="_self" id="btnForwardMessage" class="btn btn-default btn-ghost" type="button" data-message-id="{{Id}}">
																					<i class="fa fa-paper-plane-o btn-icon"></i>
																				</a>
																			</div>
																		</script>
																		<!-- templateReadingMessageButtons handlebars template end -->
																		<!-- renderReadingMessageButtons handlebars render start -->
																		<div id="renderReadingMessageButtons" class="render-template"></div>
																		<!-- renderReadingMessageButtons handlebars render end -->

																		<!-- templateTinyMCE handlebars template start -->
																		<script id="templateTinyMCE" type="text/x-handlebars-template">
																			{{#if this}}
																			<!-- form group start -->
																			<div id="" class="col-md-12 form-group form-group-inner">
																				<div id="" class="box-border">
																					<div id="" class="row">

																						<div id="" class="col-md-12 form-group-header">
																							<div id="" class="row">

																								<div id="" class="col-md-9 form-group-header-informations">
																									<div id="" class="row">

																										<div id="" class="col-md-12 form-group-header-title">
																											<i class="fa fa-envelope-o form-group-header-title-icon"></i>
																											<span class="form-group-header-title-text">İLETİ</span>
																										</div>

																									</div>
																								</div>
																								<div id="" class="col-md-3 form-group-header-controls">

																								</div>

																							</div>
																						</div>
																						<div id="" class="col-md-12 form-group-body">
																							<div id="" class="row">

																								<!-- form item start -->
																								<div id="messageTo" class="col-md-12 form-item">
																									<div id="" class="row">

																										<div id="" class="col-md-12 form-item-informations">
																											<label for="" class="form-item-title">ALICI</label>
																											<div id="" class="form-item-description"></div>
																										</div>
																										<div id="" class="col-md-12 form-item-inputs">
																											<select id="" name="" class="form-control" value="" ></select>
																										</div>

																									</div>
																								</div>
																								<!-- form item end -->
																								<!-- form item start -->
																								<div id="messageCC" class="col-md-12 form-item">
																									<div id="" class="row">

																										<div id="" class="col-md-12 form-item-informations">
																											<label for="" class="form-item-title">CC</label>
																											<div id="" class="form-item-description"></div>
																										</div>
																										<div id="" class="col-md-12 form-item-inputs">
																											<select id="" name="" class="form-control" value="" ></select>
																										</div>

																									</div>
																								</div>
																								<!-- form item end -->

																								<!-- form item start -->
																								<div id="messageBody" class="col-md-12 form-item">
																									<textarea id="message" name="" class="form-control " value="" placeholder="" rows="5"></textarea>
																								</div>
																								<!-- form item end -->

																							</div>
																						</div>
																						<div id="" class="col-md-12 form-group-footer">
																							<a href="" title="" target="_self" id="btnSendMessage" class="btn btn-success " type="button">
																								<span class="btn-text">GÖNDER</span>
																							</a>
																						</div>

																					</div>
																				</div>
																			</div>
																			<!-- form group end -->
																			{{/if}}
																		</script>
																		<!-- templateTinyMCE handlebars template end -->
																		<!-- renderTinyMCE handlebars render start -->
																		<div id="renderTinyMCE" class="render-template"></div>
																		<!-- renderTinyMCE handlebars render end -->

																	</div>
																</div>
															</div>
															<!-- form group end -->

														</div>
													</div>

												</div>
											</div>
											<!-- form group end -->

										</div>
									</div>

								</div>
							</div>
							<!-- form group container end -->

						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
</div>
<!-- partbox end -->
<?php
	include '_layout/_body-end.php';
?>
<!-- external scripts start -->
<script src="js/plugins/momentjs/js/moment.js"></script>
<link rel="stylesheet" href="js/plugins/select2/css/select2.min.css">
<script src="js/plugins/select2/js/select2.min.js"></script>
<script src="js/plugins/tinymce/js/tinymce.min.js"></script>
<!-- external scripts end -->
<!-- internal scripts start -->
<script src="js/content/mail.js"></script>
<!-- internal scripts end -->
<?php
	include '_layout/_doc-end.php';
?>
