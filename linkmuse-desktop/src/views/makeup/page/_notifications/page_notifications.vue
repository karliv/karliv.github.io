<template lang="html">
	<div class="page page_feed">

		<!-- page content -->
		<div class="page__content">

			<div class="page__body page__body_feed">

				<div class="d-row align_end mb_6">
					<div class="heading heading_h2 mb_0">Уведомления</div>
				</div>

				<!-- feed -->
				<div class="d-feed d-feed_notifications">


					<!-- sidebar -->
					<div class="sidebar d-feed__sidebar">

						<!-- active sidebar__content class: sidebar__content_active -->
						<div class="sidebar__content">

							<!-- filters -->
							<div class="filters">
								<div class="d-card">

									<div class="section filters__section">
										<div class="list list_filters list_dropdown list_dropdown_active">
											<div class="d-row align_center mb_3">
												<div class="list__header list__header_filters list__header_dropdown">От</div>
												<svg class="d-icon d-icon_size_16 ml_2">
													<use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
												</svg>
											</div>
											<div class="list__body list__body_filters list__body_dropdown">
												<div class="list__item">
													<div class="d-radio">
														<input id="from-all" type="radio" class="d-radio__mark" name="filter-from">
														<label for="from-all" class="d-radio__label">Всех</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="from-users" type="radio" class="d-radio__mark" name="filter-from">
														<label for="from-users" class="d-radio__label">Пользователей</label>
													</div>
												</div>
												<div class="list__item">
													<div class="d-radio">
														<input id="from-linkmuse" type="radio" class="d-radio__mark" name="filter-from">
														<label for="from-linkmuse" class="d-radio__label">Linkmuse</label>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div> <!-- end of filters -->

<!-- 							<div class="d-card d-card_outline">
								<div class="d-nav d-nav_inline-bullet">
									<router-link class="d-nav__item" :to="{ name: 'certifying.index' }">Верификация</router-link>
									<router-link class="d-nav__item" :to="{ name: 'board.castings.index' }">Кастинги</router-link>
									<a class="d-nav__item" href="/talents">Таланты</a>
									<a class="d-nav__item" href="/customers">Заказчики</a>
									<router-link class="d-nav__item" :to="{ name: 'articles.index' }"> Блог</router-link>
									<a class="d-nav__item" target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8">App Store</a>
									<a class="d-nav__item" target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&amp;hl=ru">Google play</a>

									<template v-if="isAuthorized === false">
										<a class="d-nav__item" href="/register">Регистрация</a>
										<a class="d-nav__item" href="/login">Вход</a>
									</template>

									<a class="d-nav__item" href="https://www.facebook.com/linkmuseofficial" target="_blank">Фейсбук</a>
									<a class="d-nav__item" href="https://vk.com/link_muse" target="_blank">Вконтакте</a>
									<a class="d-nav__item" href="https://www.instagram.com/linkmuse" target="_blank">Инстаграм</a>
									<a class="d-nav__item" href="mailto:help@linkmuse.com">Написать на почту</a>
								</div>
								<div class="d-copyright mt_3">© {{ $moment() | moment('Y') }} Linkmuse</div>
							</div> -->

						</div>
					</div> <!-- end of sidebar -->

					<!-- feed__body -->
					<div class="d-feed__body ml_4">

						<div class="d-card">

							<div href="#" class="section d-card__section">
								<div class="notification">
									<div class="d-row align_center">
										<div class="d-btn d-btn_round d-btn_primary">
											<svg class="d-icon d-icon_size_16 fill_white">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info" />
											</svg>
										</div>
										<div class="d-column ml_4 w_100">
											<div class="notification__text">
												Получен новый отклик на объявление <a href="#" class="d-link fw_600">“Название”</a>
											</div>
											<div class="notification__date mt_1">27 июня 2019</div>
										</div>
									</div>
								</div>
							</div>

							<div href="#" class="section d-card__section">
								<div class="notification">
									<div class="d-row align_center">
										<div class="d-btn d-btn_round bg-color_support-1">
											<svg class="d-icon d-icon_size_16 fill_white">
												<use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info" />
											</svg>
										</div>
										<div class="d-column ml_4 w_100">
											<div class="notification__text">
												Модератор отклонил ваше объявление <a href="#" class="d-link fw_600">“Название”</a> по причине: “Причина”
											</div>
											<div class="notification__date mt_1">27 июня 2019</div>
										</div>
									</div>
								</div>
							</div>

							<div href="#" class="section d-card__section">
								<div class="notification">
									<div class="d-row justify_between">
										<div class="d-row align_center">
											<img src="/dist/web/img/2.png" alt="user avatar" class="d-img border-radius_16px d-img_size_40">
											<div class="d-column ml_4 w_100">
												<div class="notification__text">
													Получен новый отклик на объявление <a href="#" class="d-link fw_600">“Название”</a>
												</div>
												<div class="notification__date mt_1">27 июня 2019</div>
											</div>
										</div>
										<div class="d-row w_auto ml_4 align_center">
											<button class="d-btn d-btn_primary mr_2">Принять</button>
											<button class="d-btn d-btn_secondary_filled">Отклонить</button>
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
		mounted () {
			setTimeout(() => {
				this.$notify({ type: 'success', title: 'Успешно', text: 'Предложение отправлено', duration: 100000 })
				this.$notify({ type: 'warn1', title: 'Внимание', text: 'Срок публикации объявления закончится через 3 дня. Нажмите, чтобы продлить', duration: 10000 })
				this.$notify({ type: 'response', title: 'Новый отклик', text: 'Получен новый отклик на объявление. Нажмите, чтобы посмотреть', duration: 10000 })
			}, 1000)
		}
	}
</script>

<style lang="css" scoped>
</style>
