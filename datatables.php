<?php
	include '_layout/_doc-start.php';
?>
<!-- partbox start -->
<div id="partboxMain" class="col-md-12 partbox partbox-main">
	<div id="" class="box">
		<div id="" class="row">

			<div id="" class="col-md-12 partbox-header">
				<div id="" class="row">

					<div id="" class="col-md-9 partbox-header-informations">
						<div id="" class="row">

							<div id="" class="col-md-12 partbox-header-title">
								<i class="fa fa-table partbox-header-title-icon"></i>
								<span class="partbox-header-title-text">DATATABLES</span>
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

											<div id="" class="col-md-12 form-group-header">
												<div id="" class="row">

													<div id="" class="col-md-9 form-group-header-informations">
														<div id="" class="row">

															<div id="" class="col-md-12 form-group-header-title">
																<i class="fa fa-window-maximize form-group-header-title-icon"></i>
																<span class="form-group-header-title-text">KULLANIM</span>
															</div>

														</div>
													</div>
													<div id="" class="col-md-3 form-group-header-controls">

													</div>

												</div>
											</div>
											<div id="" class="col-md-12 form-group-body">
												<div id="" class="row">

													<!-- info content container start -->
													<div id="" class="col-md-12 info-content">
														<div id="" class="box-invisible">
															<div id="" class="row ">

																<div id="" class="col-md-12 info-content-header">
																	<div id="" class="row">

																		<div id="" class="col-md-9 info-content-header-informations">
																			<div id="" class="row">

																				<div id="" class="col-md-12 info-content-header-title">
																					<i class="fa fa-info-circle info-content-header-title-icon"></i>
																					<span class="info-content-header-title-text">BİLGİ</span>
																				</div>

																			</div>
																		</div>
																		<div id="" class="col-md-3 info-content-header-controls">

																		</div>

																	</div>
																</div>
																<div id="" class="col-md-12 info-content-body">
																	<p class="info-content-text title">BİLGİLER</p>
																	<p class="info-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
																	<p class="info-content-text title">SINIFLAR</p>
																	<p class="info-content-text"><span class="highlight">.table</span></p>
																	<p class="info-content-text title">SINIFLAR - DIMENSIONS</p>
																	<p class="info-content-text"><span class="highlight">.column-xs</span></p>
																	<p class="info-content-text"><span class="highlight">.column-sm</span></p>
																	<p class="info-content-text"><span class="highlight">.column-md</span></p>
																	<p class="info-content-text"><span class="highlight">.column-lg</span></p>
																	<p class="info-content-text title">SINIFLAR - ALIGNMENT</p>
																	<p class="info-content-text"><span class="highlight">.column-left</span></p>
																	<p class="info-content-text"><span class="highlight">.column-center</span></p>
																	<p class="info-content-text"><span class="highlight">.column-right</span></p>
																	<p class="info-content-text title">SINIFLAR - CONTROLS</p>
																	<p class="info-content-text"><span class="highlight">.control-buttons</span></p>
																	<p class="info-content-text"><span class="highlight">.column-select</span></p>
																	<p class="info-content-text"><span class="highlight">.column-yadcf</span></p>
																	<p class="info-content-text title">METODLAR</p>
																	<p class="info-content-text">DataTable metodlarını kullanırken her şeyin öncesinde tabloyu bir değişkene atamanız işinizi kolaylaştıracaktır. <strong>var table = $('#table').DataTable()</strong></p>
																	<p class="info-content-text"><span class="highlight">! $.fn.DataTable.isDataTable( '#tableId' )</span> bir tablo var mı yok mu kontrolünü sağlamak için kullanılan fonksiyondur. Eğer tablo yok ise; oluştur var ise; yeni veriyi tabloya yerleştir.</p>
																	<p class="info-content-text"><span class="highlight">table.draw()</span> tabloyu çizmenize yarar. herhangi bir veri güncellenmesinde, aramalarda, filtrelemelerde draw() metodu çalıştırılır. Örneğin draw() metodu kullanmayıp tabloyu silerseniz; eski haliyle görüntülenmeye devam eder.</p>
																	<p class="info-content-text"><span class="highlight">table.clear()</span> tablodaki tüm verileri siler; yeni veri eklemek istediğinizde önceki veriyi silmek için kullanabilirsiniz.</p>
																	<p class="info-content-text"><span class="highlight">table.row.add( { Object } )</span> tabloya bir adet satır eklemek için kullanılan metodtur. row.add metodu parametre olarak bir object alır.</p>
																	<p class="info-content-text"><span class="highlight">table.rows.add( [ { Object } ] )</span> tabloya birden fazla satır eklemek için kullanılan metodtur. rows.add metodu parametre olarak bir array alır ve bu array içerisinde veriler object olarak belirtilir.</p>
																	<p class="info-content-text"><span class="highlight">table.rows().data()</span> tabloyu oluşturan tüm veriyi döndürür. Bu veri array şeklinde object'tir. Ancak bir array olmadığı için; başka bir array'e assign ederek tablodaki tüm veriyi işleyebilirsiniz.</p>
																	<p class="info-content-text"><span class="highlight">table.row( { selected: true } ).data()</span> tabloda seçili olan satırların verisini döndürür</p>
																	<p class="info-content-text"><span class="highlight">table.row(rowIndex).data()</span> belirli bir satırdaki veriyi döndürür.</p>
																	<p class="info-content-text"><span class="highlight">table.columns.adjust()</span> tablo kolonlarının genişliklerini bulunduğu yere göre yeniden hesaplayarak çizer.</p>
																</div>

															</div>
														</div>
													</div>
													<!-- info content container end -->

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

					<!-- form group container start -->
					<div id="" class="col-md-12 form-group-container">
						<div id="" class="row">

							<div id="" class="col-md-12 form-group-container-body">
								<div id="" class="row">

									<!-- form group start -->
									<div id="" class="col-md-12 form-group">
										<div id="" class="row">

											<div id="" class="col-md-12 form-group-header">
												<div id="" class="row">

													<div id="" class="col-md-9 form-group-header-informations">
														<div id="" class="row">

															<div id="" class="col-md-12 form-group-header-title">
																<span class="form-group-header-title-text">DATATABLE</span>
															</div>

														</div>
													</div>
													<div id="" class="col-md-3 form-group-header-controls">

													</div>

												</div>
											</div>
											<div id="" class="col-md-12 form-group-body">
												<div id="" class="row">

													<!-- table table start -->
													<div id="" class="col-md-12 form-item table-container">
														<table id="table" class="dataTable table table-bordered table-hover" cellspacing="0" width="100%"></table>
													</div>
													<!-- table table end -->

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
<!-- partbox end -->
<?php
	include '_layout/_body-end.php';
?>
<!-- external scripts start -->
<script src="js/plugins/lazyload/js/lazyload.min.js"></script>
<link rel="stylesheet" href="js/plugins/select2/css/select2.min.css">
<script src="js/plugins/select2/js/select2.min.js"></script>
<link rel="stylesheet" href="js/plugins/datatables/css/datatables.min.css">
<script src="js/plugins/datatables/js/datatables.min.js"></script>
<!-- external scripts end -->
<!-- internal scripts start -->
<script src="js/content/datatables.js"></script>
<!-- internal scripts end -->
<?php
	include '_layout/_doc-end.php';
?>
