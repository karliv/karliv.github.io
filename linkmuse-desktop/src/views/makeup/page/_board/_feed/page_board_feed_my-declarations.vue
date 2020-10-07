<template lang="html">
	<div class="page page_feed">
		
		<!-- page content -->
		<div class="page__content">

			<div class="page__body page__body_feed">

				<!-- feed -->
				<div class="d-feed d-feed_castings">

					<div class="d-row align_end mb_6">
						<div class="heading heading_h2 mb_0">Мои объявления</div>
					</div>

					<!-- sidebar -->
					<div class="sidebar d-feed__sidebar">
						<div class="sidebar__content">

							<!-- filters -->
							<div class="filters">
								<div class="d-card">
									<div class="section filters__section">
										<div class="d-input d-input_search d-input_search_feed">
											<svg class="d-icon d-icon_size_16 d-icon_search">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search" />
											</svg>
											<input class="d-input__field d-input__field_search" placeholder="Поиск">
										</div>
									</div>
									<div class="section filters__section">
										<div class="list list_filters list_dropdown list_dropdown_active">
											<div class="d-row align_center mb_3">
												<div class="list__header list__header_filters list__header_dropdown">Тип объявления</div>
												<svg class="d-icon d-icon_size_16 d-icon_search">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search" />
												</svg>
											</div>
											<div class="list__body list__body_filters list__body_dropdown">
												<div class="list__item">
													<div class="d-radio">
														<input id="type_castings" type="radio" class="d-radio__mark" name="test">
														<label for="type_castings" class="d-radio__label">Кастинги</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="type_locations" type="radio" class="d-radio__mark" name="test">
														<label for="type_locations" class="d-radio__label">Локации</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="type_sale" type="radio" class="d-radio__mark" name="test">
														<label for="type_sale" class="d-radio__label">Продажа</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="gender_rent" type="radio" class="d-radio__mark" name="test">
														<label for="gender_rent" class="d-radio__label">Аренда</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="section filters__section">
										<div class="list list_filters list_dropdown list_dropdown_active">
											<div class="d-row align_center mb_3">
												<div class="list__header list__header_filters list__header_dropdown">Статус объявления</div>
												<svg class="d-icon d-icon_size_16 d-icon_search">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search" />
												</svg>
											</div>
											<div class="list__body list__body_filters list__body_dropdown">
												<div class="list__item">
													<div class="d-checkbox">
														<input id="status_draft" type="checkbox" class="d-checkbox__mark">
														<label for="status_draft" class="d-checkbox__label">Черновик</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="status_published" type="checkbox" class="d-checkbox__mark">
														<label for="status_published" class="d-checkbox__label">Опубликован</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="status_moderation" type="checkbox" class="d-checkbox__mark">
														<label for="status_moderation" class="d-checkbox__label">На модерации</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="status_refused" type="checkbox" class="d-checkbox__mark">
														<label for="status_refused" class="d-checkbox__label">Отклонён</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="status_archive" type="checkbox" class="d-checkbox__mark">
														<label for="status_archive" class="d-checkbox__label">Архив</label>	
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> <!-- end of filters -->

							<div class="d-card d-card_outline">
								<div class="d-nav d-nav_inline-bullet">
									<div class="d-nav__item">Верификация</div>
									<div class="d-nav__item">Кастинги</div>
									<div class="d-nav__item">Таланты</div>
									<div class="d-nav__item">Заказчики</div>
									<div class="d-nav__item">Блог</div>
									<div class="d-nav__item">App Store</div>
									<div class="d-nav__item">Google play</div>
									<div class="d-nav__item">Регистрация</div>
									<div class="d-nav__item">Вход</div>
									<div class="d-nav__item">Фейсбук</div>
									<div class="d-nav__item">Вконтакте</div>
									<div class="d-nav__item">Инстаграм</div>
									<div class="d-nav__item">Написать на почту</div>
								</div>
								<div class="d-copyright">© 2019 Linkmuse</div>
							</div>
						</div>
					</div> <!-- end of sidebar -->

					<!-- feed__body -->
					<div class="d-feed__body ml_4">

						<div class="d-card">
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__status_casting d-card__status_casting_draft">черновик</div>
									</div>
								</div>
							</div>
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__date_casting">
											<span>Дата кастинга:</span>
											уточняется
										</div>
										<div class="d-card__date_work">
											<span>Дата работы:</span>
											уточняется
										</div>
										<div class="d-card__fee_casting">Без гонорара</div>
									</div>
								</div>
								<div class="d-row w_100 justify_between mt_5">
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_primary">Продолжить</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_archive">
															<a class="list__item" href="#">В архив</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_options" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="d-card">
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__status_casting d-card__status_casting_published">опубликован</div>
										<div class="heading heading_h4">Нужны артисты на новое шоу</div>
										<div class="d-card__description_casting">СПб! На историческую реконструкцию телевизионной программы ТайнNet нужны актеры массовых сцен. Может быть, сможете нам помочь) Занятость завтра, 16.05., в 16:00 (занятость один час, адрес Бухарестская 22) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер</div>
											<div>Мужской</div>
											<div>20-24</div>
										</div>
									</div>
								</div>
							</div>
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__date_casting">
											<span>Дата кастинга:</span>
											до 30.06.19
										</div>
										<div class="d-card__date_work">
											<span>Дата работы:</span>
											с 22.07.19
										</div>
										<div class="d-card__fee_casting">
											10 000 ₽
										</div>
									</div>
								</div>
								<div class="d-row w_100 justify_between mt_5">
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_primary">Отклики <span>2</span> <span>(+1)</span>
											</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_archive">
															<a class="list__item" href="#">В архив</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_options" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="d-card">
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__status_casting d-card__status_casting_moderation">на модерации</div>
										<div class="heading heading_h4">Требуется актер на роль самца в новом фильме</div>
										<div class="d-card__description_casting">СПб! На историческую реконструкцию телевизионной программы ТайнNet нужны актеры массовых сцен. Может быть, сможете нам помочь) Занятость завтра, 16.05., в 16:00 (занятость один час, адрес Бухарестская 22) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер, Модель</div>
											<div>Мужской, Женский</div>
											<div>20-24</div>
										</div>
									</div>
								</div>
							</div>
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__date_casting">
											<span>Дата кастинга:</span>
											20.06.19 – 30.06.19
										</div>
										<div class="d-card__date_work">
											<span>Дата работы:</span>
											12.07.19 – 24.09.19
										</div>
										<div class="d-card__fee_casting">1 400 000 ₽</div>
									</div>
								</div>
								<div class="d-row w_100 justify_between mt_5">
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_primary">Отклики</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_archive">
															<a class="list__item" href="#">В архив</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_options" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="d-card">
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__status_casting d-card__status_casting_refused">отклонён: мошенничество</div>
										<div class="heading heading_h4">Открыт кастинг на Fashion Week</div>
										<div class="d-card__description_casting">Мужчина 25-35, женщина 20-30. Милые, стройные, интеллигентные приятной внешности ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер, Модель</div>
											<div>Мужской, Женский</div>
											<div>от 18</div>
										</div>
									</div>
								</div>
							</div>
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__date_casting">
											<span>Дата кастинга:</span>
											уточняется
										</div>
										<div class="d-card__date_work">
											<span>Дата работы:</span>
											уточняется
										</div>
										<div class="d-card__fee_casting">Гонорар уточняется</div>
									</div>
								</div>
							</div>
						</div>

						<div class="d-card d-card_archived">
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__status_casting d-card__status_casting_archive">архив</div>
										<div class="heading heading_h4">Требуется актер на роль самца в новом фильме</div>
										<div class="d-card__description_casting">СПб! На историческую реконструкцию телевизионной программы ТайнNet нужны актеры массовых сцен. Может быть, сможете нам помочь) Занятость завтра, 16.05., в 16:00 (занятость один час, адрес Бухарестская 22) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер, Модель</div>
											<div>Мужской, Женский</div>
											<div>20-24</div>
										</div>
									</div>
								</div>
							</div>
							<div class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__date_casting">
											<span>Дата кастинга:</span>
											20.06.19 – 30.06.19
										</div>
										<div class="d-card__date_work">
											<span>Дата работы:</span>
											12.07.19 – 24.09.19
										</div>
										<div class="d-card__fee_casting">10 000 ₽</div>
									</div>
								</div>
								<div class="d-row w_100 justify_between mt_5">
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_primary">Отклики <span>2</span> <span>(+1)</span>
											</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_archive">
															<a class="list__item" href="#">В архив</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_options" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="d-card d-card_feed-plug">
							<svg class="d-icon d-icon_size_64 fill_main mb_5">
								<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info" />
							</svg>
							<div class="heading heading_h5">Тут пока пусто</div>
							<div class="ta_center mb_4">Для начала работы создайте<br>новое объявление</div>
							<button class="d-btn d-btn_primary">Создать</button>
						</div>

					</div> <!-- end of feed__body -->
				</div> <!-- end of feed -->
			</div>
		</div> <!-- end of page content -->
	</div> <!-- end of page -->
</template>

<script>
	export default {
	}
</script>

<style lang="css" scoped>
</style>
