<template lang="html">
	<div class="page page_feed">

		<!-- page content -->
		<div class="page__content">

			<div class="page__body page__body_feed">

				<div class="d-row align_end mb_6">
					<div class="heading heading_h2 mb_0">Кастинги</div>
					<div class="d-feed__counter d-feed__counter_castings">2 045</div>
				</div>

				<!-- feed -->
				<div class="d-feed d-feed_castings">


					<!-- sidebar -->
					<div class="sidebar d-feed__sidebar">

						<!-- active sidebar__content class: sidebar__content_active -->
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
											<svg class="d-icon d-icon_size_16 d-icon_close">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close" />
											</svg>
										</div>
									</div>
									<div class="section filters__section">
										<div class="d-switch w_100">
											<label for="under-me" class="d-switch__label">Подобрать под меня</label>
											<input id="under-me" type="checkbox" class="d-switch__mark">
											<label for="under-me" class="d-switch__btn"></label>
										</div>
									</div>
									<div class="section filters__section">
										<div class="list list_filters list_dropdown list_dropdown_active">
											<div class="d-row align_center mb_3">
												<div class="list__header list__header_filters list__header_dropdown">Категория</div>
												<svg class="d-icon d-icon_size_16 ml_2">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
												</svg>
												<div class="filters__status filters__status_changed"></div>
											</div>
											<div class="list__body list__body_filters list__body_dropdown">
												<div class="list__item">
													<div class="d-checkbox">
														<input id="feature-film" type="checkbox" class="d-checkbox__mark">
														<label for="feature-film" class="d-checkbox__label">Полнометражный фильм</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="short-film" type="checkbox" class="d-checkbox__mark">
														<label for="short-film" class="d-checkbox__label">Короткометражный фильм</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="serial" type="checkbox" class="d-checkbox__mark">
														<label for="serial" class="d-checkbox__label">Сериал</label>	
													</div>
												</div>
												<a href="#" class="d-link d-link_show-all">Показать все</a>
											</div>
										</div>
									</div>
									<div class="section filters__section">
										<div class="list list_filters list_dropdown list_dropdown_active">
											<div class="d-row align_center mb_3">
												<div class="list__header list__header_filters list__header_dropdown">Роль</div>
												<svg class="d-icon d-icon_size_16 ml_2">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
												</svg>
											</div>
											<div class="list__body list__body_filters list__body_dropdown">
												<div class="list__item">
													<div class="d-checkbox">
														<input id="role_actor" type="checkbox" class="d-checkbox__mark">
														<label for="role_actor" class="d-checkbox__label">Актер</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="role_model" type="checkbox" class="d-checkbox__mark">
														<label for="role_model" class="d-checkbox__label">Модель</label>	
													</div>
												</div>
												<div class="list__item">
													<div class="d-checkbox">
														<input id="role_musicion" type="checkbox" class="d-checkbox__mark">
														<label for="role_musicion" class="d-checkbox__label">Музыкант</label>	
													</div>
												</div>
												<a href="#" class="d-link d-link_show-all">Показать все</a>
											</div>
										</div>
									</div>
									<div class="section filters__section">
										<div class="list list_filters list_dropdown list_dropdown_active">
											<div class="d-row align_center mb_3">
												<div class="list__header list__header_filters list__header_dropdown">Пол</div>
												<svg class="d-icon d-icon_size_16 ml_2">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
												</svg>
											</div>
											<div class="list__body list__body_filters list__body_dropdown">
												<div class="list__item">
													<div class="d-radio">
														<input id="gender_anyone" type="radio" class="d-radio__mark" name="test">
														<label for="gender_anyone" class="d-radio__label">Любой</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="gender_male" type="radio" class="d-radio__mark" name="test">
														<label for="gender_male" class="d-radio__label">Мужской</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="gender_female" type="radio" class="d-radio__mark" name="test">
														<label for="gender_female" class="d-radio__label">Женский</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="section filters__section">
										<div class="d-row align_center mb_3">
											<div class="list__header list__header_filters list__header_dropdown">Возраст</div>
											<svg class="d-icon d-icon_size_16 ml_2">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
											</svg>
										</div>
										<div class="d-row align_center">
											<div class="d-input">
												<input type="number" class="d-input__field" placeholder="От">
											</div>
											<div class="color_gray-4 ml_1 mr_1">-</div>
											<div class="d-input">
												<input type="number" class="d-input__field" placeholder="До">
											</div>
										</div>
									</div>
									<div class="section filters__section">
										<div class="d-row align_center mb_3">
											<div class="list__header list__header_filters list__header_dropdown">Страна</div>
											<svg class="d-icon d-icon_size_16 ml_2 rotate_180">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
											</svg>
										</div>
										<div class="d-select">
											<div class="d-select__field">

											</div>
										</div>
									</div>
									<div class="section filters__section">
										<div class="d-row align_center mb_3">
											<div class="list__header list__header_filters list__header_dropdown">Город</div>
											<svg class="d-icon d-icon_size_16 ml_2 rotate_180">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
											</svg>
											<div class="filters__status filters__status_changed"></div>
										</div>
										<div class="d-select">
											<div class="d-select__field">

											</div>
										</div>
									</div>
									<div class="section filters__section">
										<button class="d-btn d-btn_outline w_100">Сбросить фильтры</button>
									</div>
								</div>
							</div> <!-- end of filters -->

							<div class="d-card">
								<div class="d-row justify_between">
									<div class="heading heading_h5 mb_0">Сделаем сайт лучше?</div>
									<a href="#">
										<svg class="d-icon d-icon_size_16 fill_gray-3">
											<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close"/>
										</svg>
									</a>
								</div>
								<div class="d-row mt_2">
									Пожалуйста, ответьте на
									несколько вопросов по удобству
								</div>
								<button class="d-btn d-btn_outline mt_4 w_100">Пройти опрос</button>
							</div>

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
								<div class="d-copyright mt_3">© 2019 Linkmuse</div>
							</div>
						</div>
					</div> <!-- end of sidebar -->

					<!-- feed__body -->
					<div class="d-feed__body ml_4">

						<div class="d-card">
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-row justify_between">
											<div class="d-card__type_casting">полнометражный фильм</div>
											<div class="d-card__date_casting-creation">24 июня 2019</div>
										</div>
										<div class="heading heading_h4">Требуется актер на главную роль в новом фильме</div>
										<div class="d-card__description_casting">СПб! На историческую реконструкцию телевизионной программы ТайнNet нужны актеры массовых сцен. Может быть, сможете нам помочь) Занятость завтра, 16.05., в 16:00 (занятость один час, адрес Бухарестская 22) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер, Модель</div>
											<div>Мужской</div>
											<div>20-24</div>
										</div>
									</div>
								</div>
							</a>
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
											<button class="d-btn d-btn_primary mr_4">Откликнуться</button>
											<button class="d-btn d-btn_outline">Написать сообщение</button>
										</div>
									</div>
									<div class="d-column w_auto z-index_3">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled mr_4 d-btn_like d-btn_like_active">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_share d-btn_secondary_filled mr_4">
												<div class="popup d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_socials">
															<a class="list__item" href="#">Вконтакте</a>
															<a class="list__item" href="#">Фейсбук</a>
															<a class="list__item" href="#">Твиттер</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
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

						<div class="d-card d-card_premium">
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-row justify_between">
											<div class="d-card__type_casting">Полнометражный фильм</div>
											<div class="casting__option casting__option_premium">
												<svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
												</svg>
												Премиум
											</div>
										</div>
										<div class="heading heading_h4">Требуется актер на главную роль в новом фильме</div>
										<div class="d-card__description_casting">В это воскресенье 19.05 Для съёмок эпизода экспериментального юмористического YouTube-проекта «1819» ( канал пердимонокль энтертеймент) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер</div>
											<div>Мужской</div>
											<div>До 26</div>
										</div>
									</div>
								</div>
							</a>
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
											<button class="d-btn d-btn_primary">Откликнуться</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_primary d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_primary">
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

						<div class="d-card d-card_premium">
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-row justify_between">
											<div class="d-card__type_casting">Полнометражный фильм</div>
											<div class="casting__option casting__option_premium">
												<svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
												</svg>
												Премиум
											</div>
										</div>
										<div class="heading heading_h4">Требуется актер на главную роль в новом фильме</div>
										<div class="d-card__description_casting">В это воскресенье 19.05 Для съёмок эпизода экспериментального юмористического YouTube-проекта «1819» ( канал пердимонокль энтертеймент) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер</div>
											<div>Мужской</div>
											<div>До 26</div>
										</div>
									</div>
								</div>
							</a>
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
											<button class="d-btn d-btn_primary mr_4">Откликнуться</button>
											<button class="d-btn d-btn_outline">Написать сообщение</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_primary d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_primary">
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

						<div class="d-card bg-color_main_08">
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__type_casting">ваше объявление</div>
										<div class="heading heading_h4">Требуется актер на главную роль в новом фильме</div>
										<div class="d-card__description_casting">В это воскресенье 19.05 Для съёмок эпизода экспериментального юмористического YouTube-проекта «1819» ( канал пердимонокль энтертеймент) ...</div>
										<div class="d-card__list d-card__list_casting-parameters">
											<div>Москва</div>
											<div>Актер</div>
											<div>Мужской</div>
											<div>До 26</div>
										</div>
									</div>
								</div>
							</a>
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
											<button class="d-btn d-btn_primary">Откликнуться</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_primary d-btn_edit mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_archive d-btn_primary">
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
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__type_casting">показ</div>
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
							</a>
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
											<button class="d-btn d-btn_primary mr_4">Откликнуться</button>
											<button class="d-btn d-btn_outline">Написать сообщение</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_share d-btn_secondary_filled mr_4">
												<div class="popup d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_socials">
															<a class="list__item" href="#">Вконтакте</a>
															<a class="list__item" href="#">Фейсбук</a>
															<a class="list__item" href="#">Твиттер</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
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
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__type_casting">показ</div>
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
							</a>
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
											<button class="d-btn d-btn_primary mr_4">Откликнуться</button>
											<button class="d-btn d-btn_outline">Написать сообщение</button>
										</div>
									</div>
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_share d-btn_secondary_filled mr_4">
												<div class="popup d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_socials">
															<a class="list__item" href="#">Вконтакте</a>
															<a class="list__item" href="#">Фейсбук</a>
															<a class="list__item" href="#">Твиттер</a>
														</div>
													</div>
												</div>
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
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
								<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search" />
							</svg>
							<div class="heading heading_h5">Мы ничего не нашли</div>
							<div class="ta_center mb_4">Попробуйте другой запрос<br>или сбросьте фильтры</div>
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
