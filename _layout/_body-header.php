<!-- Header Start -->
<div id="header" class="container-fluid header">
	<div class="row">

		<div id="headerLogo" class="col-md-2 col-sm-4 col-xs-6 header-logo">
			<img src="img/logo/logo.png" title="" alt="" id="" class="img img-responsive " />
		</div>
		<div id="headerControls" class="col-md-10 col-sm-8 col-xs-6 header-controls">
			<!-- dropdown start -->
			<div id="UserNotificationsDropdown" class="dropdown">
				<a href="" title="" target="_self" id="btnUserNotificationsDropdown" class="btn btn-default btn-ghost " type="button" data-toggle="dropdown">
					<i class="fa fa-envelope-o btn-icon"></i>
					<!-- templateUserNotificationsCount handlebars template start -->
					<script id="templateUserNotificationsCount" type="text/x-handlebars-template">
						{{#if this}}
						<span class="btn-badge">{{this}}</span>
						{{/if}}
					</script>
					<!-- templateUserNotificationsCount handlebars template end -->
					<!-- renderUserNotificationsCount handlebars render start -->
					<div id="renderUserNotificationsCount" class="render-template"></div>
					<!-- renderUserNotificationsCount handlebars render end -->
				</a>
				<div id="" class="dropdown-menu dropdown-menu-right scrollspy">
					<!-- templateUserNotificationsDropdown handlebars template start -->
					<script id="templateUserNotificationsDropdown" type="text/x-handlebars-template">
						{{#if this}}
							{{#each this}}
							<!-- list item start -->
							<a href="{{HelperListItemLink Id}}" title="" target="_self" id="" class="list-item-link">
								<div id="" class="col-md-12 list-item list-item-overflow">
									<div id="" class="list-item-content">
										<div id="" class="list-item-header">
											<div class="list-item-header-title">
												<span class="list-item-header-title-text">{{{Subject}}}</span>
											</div>
											<div class="list-item-header-subtitle">{{HelperDateFormat DateCreated}}</div>
											<div class="list-item-header-subtitle">{{SenderName}}</div>
										</div>
										<div id="" class="list-item-body">
											{{{HelperMessageTrimmedBody Body}}}
										</div>
									</div>
								</div>
							</a>
							<!-- list item end -->
							{{/each}}
						{{else}}
						<li>
							<!-- list item start -->
								<div id="" class="col-md-12 list-item list-item-overflow">
									<div id="" class="list-item-content">
										<div id="" class="list-item-body">
											Yeni bildirim yok
										</div>
									</div>
								</div>
							<!-- list item end -->
						</li>
						{{/if}}
					</script>
					<!-- templateUserNotificationsDropdown handlebars template end -->
					<!-- renderUserNotificationsDropdown handlebars render start -->
					<div id="renderUserNotificationsDropdown" class="render-template"></div>
					<!-- renderUserNotificationsDropdown handlebars render end -->
				</div>
			</div>
			<!-- dropdown end -->
			<a href="" title="" target="_self" id="btnToggleSidebar" class="btn btn-default btn-ghost hidden-lg hidden-md" type="button">
				<i class="fa fa-bars btn-icon"></i>
			</a>
			<a href="" title="" target="_self" id="btnEndSession" class="btn btn-default btn-ghost" type="button">
				<i class="fa fa-sign-out btn-icon"></i>
			</a>
		</div>

	</div>
</div>
<!-- Header End -->
