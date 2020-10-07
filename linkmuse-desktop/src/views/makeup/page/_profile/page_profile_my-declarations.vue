<template lang="html">
	<div class="page page_feed page_feed_profile">
		
		<!-- page content -->
		<div class="page__content">
			<div class="page__body page__body_feed">

				<!-- feed -->
				<div class="d-feed d-feed_castings">

					<div class="d-row align_end mb_6">
						<div class="heading heading_h2 mb_0">Мои объявления</div>
						<div class="profile">
							<a href="#" class="profile__name profile__name_feed_declarations ml_3">Евгения Белоусова</a>
						</div>
					</div>

					<!-- sidebar -->
					<div class="sidebar d-feed__sidebar">
						<div class="sidebar__content">

							<!-- filters -->
							<div class="filters">
								<div class="d-card">
									<div class="d-row">
										<a href="#" class="d-link d-link_back">
											<svg class="d-icon d-icon_size_16 fill_main mr_3">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-arrow-left" />
											</svg>
											Вернуться в профиль
										</a>
									</div>
								</div>
								<div class="d-card">
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
							<a href="#" class="section d-card__section">
								<div class="d-row">
									<div class="d-column">
										<div class="d-card__type_casting">полнометражный фильм</div>
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
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled mr_4">
												<svg class="d-icon d-icon_size_16">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
												</svg>
											</button>
											<button class="d-btn d-btn_round d-btn_secondary_filled mr_4">
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
											<button class="d-btn d-btn_round d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_socials">
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
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled mr_4">
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
											<button class="d-btn d-btn_round d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_socials">
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
									<div class="d-column w_auto">
										<div class="d-row">
											<button class="d-btn d-btn_round d-btn_secondary_filled mr_4">
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
											<button class="d-btn d-btn_round d-btn_secondary_filled">
												<div class="d-btn__popup d-btn__popup_top d-btn__popup_active">
													<div class="popup__content">
														<div class="list popup__list popup__list_socials">
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
