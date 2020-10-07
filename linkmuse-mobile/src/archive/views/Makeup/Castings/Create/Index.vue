<template>
    <div class="lm-create-casting">

        <div class="lm-m-register-steps">
            <div style="width: 10%;"></div>
        </div>
        <div class="lm-create-casting-wrap wrapper" v-if="step === 1">
            <h1>Кого вы ищете?</h1>
            <div class="lm-select-type--wrap">
                <div class="lm-select-type--item talent">
                    <input id="customer_0" type="radio" name="profession" value="customer">
                    <label for="customer_0" @click="nextStep">
                        <i class="lm-m-role-icon-actor"></i>
                        <span class="lm-post-register-label-icon">Актер</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_1" type="radio" name="profession" value="talent">
                    <label for="talent_1">
                        <i class="lm-m-role-icon-model"></i>
                        <span class="lm-post-register-label-icon">модель</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_2" type="radio" name="profession" value="talent">
                    <label for="talent_2">
                        <i class="lm-m-role-icon-musician"></i>
                        <span class="lm-post-register-label-icon">музыкант</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_3" type="radio" name="profession" value="talent">
                    <label for="talent_3">
                        <i class="lm-m-role-icon-dancer"></i>
                        <span class="lm-post-register-label-icon">танцор</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_4" type="radio" name="profession" value="talent">
                    <label for="talent_4">
                        <i class="lm-m-role-icon-leading"></i>
                        <span class="lm-post-register-label-icon">ведущий</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_5" type="radio" name="profession" value="talent">
                    <label for="talent_5">
                        <i class="lm-m-role-icon-composer"></i>
                        <span class="lm-post-register-label-icon">композитор</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_6" type="radio" name="profession" value="talent">
                    <label for="talent_6">
                        <i class="lm-m-role-icon-circus-artist"></i>
                        <span class="lm-post-register-label-icon">артист цирка</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_7" type="radio" name="profession" value="talent">
                    <label for="talent_7">
                        <i class="lm-m-role-icon-photographer"></i>
                        <span class="lm-post-register-label-icon">фотогораф видеограф</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_8" type="radio" name="profession" value="talent">
                    <label for="talent_8">
                        <i class="lm-m-role-icon-visagiste"></i>
                        <span class="lm-post-register-label-icon">визажист стилист</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_9" type="radio" name="profession" value="talent">
                    <label for="talent_9">
                        <i class="lm-m-role-icon-designer"></i>
                        <span class="lm-post-register-label-icon">художник дизайнер</span>
                    </label>
                </div>
                <div class="lm-select-type--item talent">
                    <input id="talent_10" type="radio" name="profession" value="talent">
                    <label for="talent_10">
                        <i class="lm-m-role-icon-film-crew"></i>
                        <span class="lm-post-register-label-icon">участник съемочной группы</span>
                    </label>
                </div>

                <div class="fix"></div>
            </div>
        </div>
        <template v-if="step === 2">
            <div class="lm-create-casting-wrap wrapper fix-bottom-actions">
                <h1>Укажите данные об исполнителе</h1>
                <div class="lm-casting-input">
                    <div class="lm-column-2">
                        <div class="lm-input-wrap">
                            <label for="">Возраст</label>
                            <input type="text" placeholder="От" class="lm-input">
                        </div>
                        <div class="lm-input-wrap">
                            <label for="">&nbsp;</label>
                            <input type="text" placeholder="До" class="lm-input">
                        </div>
                    </div>
                    <div class="lm-m-post-register-select-sex">
                        <ul class="lm-checkbox-buttons">
                            <li>
                                <input name="checkbox" type="checkbox" id="male">
                                <label for="male">
                                    <span>Мужской</span>
                                    <i class="lm-sex-male-icon"></i>
                                </label>
                            </li>
                            <li>
                                <input name="checkbox" type="checkbox" id="female">
                                <label for="female">
                                    <span>Женский</span>
                                    <i class="lm-sex-female-icon"></i>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lm-separator"></div>
                <div class="lm-casting-input">
                    <div class="lm-input-wrap">
                        <label for="desc">Описание типажа</label>
                        <textarea id="desc" class="lm-input"
                                  placeholder="Подробное описание того, кого вы ищете"></textarea>
                    </div>
                    <div class="lm-m-attach-file-wrap">
                        <input type="file" id="attach-file">
                        <label for="attach-file">
                            <i class="lm-attach-icon"></i>
                            <span>ЗАГРУЗИТЬ ФАЙЛ</span>
                        </label>
                    </div>
                </div>

                <div class="lm-m-post-register-fixed-bottom">
                    <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">Продолжить
                    </button>
                </div>
            </div>
        </template>
        <template v-if="step === 3">
            <div class="lm-create-casting-wrap wrapper fix-bottom-actions">
                <h1>Укажите название и категорию</h1>
                <div class="lm-casting-input">
                    <div class="lm-input-wrap">
                        <label for="">Название <font class="required">*</font></label>
                        <input type="text" class="lm-input" placeholder="Название кастинга">
                    </div>
                    <div class="lm-dropdown-wrap">
                        <label for="">Категория <font class="required">*</font></label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Выбрать категорию</div>
                            <i class="lm-dropdown-icon"></i>
                        </div>
                    </div>
                </div>
                <div class="lm-m-post-register-fixed-bottom">
                    <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">Продолжить
                    </button>
                </div>
            </div>
        </template>
        <template v-if="step === 4">
            <div class="lm-create-casting-wrap wrapper fix-bottom-actions">
                <h1>Укажите даты и место проведения</h1>
                <div class="lm-casting-input">
                    <div class="lm-column-2">
                        <div class="lm-input-wrap">
                            <label for="">Даты кастинга</label>
                            <input type="text" placeholder="От" class="lm-input lm-input-icon lm-icon-calendar-fill">
                        </div>
                        <div class="lm-input-wrap">
                            <label for="">&nbsp;</label>
                            <input type="text" placeholder="До" class="lm-input lm-input-icon lm-icon-calendar-fill">
                        </div>
                    </div>
                    <div class="lm-casting-input">
                        <div class="lm-input-wrap">
                            <label for="country">Страна <font class="required">*</font></label>
                            <input type="text" class="lm-input" placeholder="Страна проведения кастинга">
                        </div>
                        <div class="lm-input-wrap">
                            <label for="country">Город <font class="required">*</font></label>
                            <input disabled type="text" class="lm-input" placeholder="Сначала выберите страну">
                        </div>
                    </div>
                    <ul class="lm-checkbox-buttons">
                        <li>
                            <input type="checkbox" id="checkbox_1">
                            <label for="checkbox_1">Принимать заявки только с этого региона</label>
                        </li>
                    </ul>
                    <div class="lm-separator"></div>
                    <div class="lm-column-2">
                        <div class="lm-input-wrap">
                            <label for="">Даты работы</label>
                            <input type="text" placeholder="От" class="lm-input lm-input-icon lm-icon-calendar-fill">
                        </div>
                        <div class="lm-input-wrap">
                            <label for="">&nbsp;</label>
                            <input type="text" placeholder="До" class="lm-input lm-input-icon lm-icon-calendar-fill">
                        </div>
                    </div>
                </div>
                <div class="lm-m-post-register-fixed-bottom">
                    <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">Продолжить
                    </button>
                </div>
            </div>
        </template>
        <template v-if="step === 5">
            <div class="lm-create-casting-wrap wrapper fix-bottom-actions">
                <h1>Работа оплачивается?</h1>
                <div class="lm-casting-input">
                    <div class="create-casting-toogle-wrap">
                        <span class="no active">нет</span>
                        <div class="lm-toggle">
                            <input class="lm-toggle--checkbox" type="checkbox" id="toggle_1">
                            <label class="lm-toggle--label" for="toggle_1"></label>
                        </div>
                        <span class="yes active">Да</span>
                    </div>
                    <div class="lm-input-wrap">
                        <label for="">Сумма</label>
                        <input type="text" placeholder="Введите сумму" class="lm-input">
                        <div class="text-price">если сумма по договоренности,
                            оставьте пустым
                        </div>
                    </div>
                    <div class="lm-dropdown-wrap">
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">RUB - ₽</div>
                            <i class="lm-dropdown-icon"></i>
                        </div>
                    </div>
                    <div class="lm-dropdown-wrap">
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">За рабочий день</div>
                            <i class="lm-dropdown-icon"></i>
                        </div>
                    </div>
                </div>
                <div class="lm-m-post-register-fixed-bottom">
                    <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">Продолжить
                    </button>
                </div>
            </div>
        </template>
        <template v-if="step === 6">
            <div class="lm-create-casting-wrap wrapper fix-bottom-actions">
                <h1>Задайте видимость и частоту уведомлений</h1>
                <div class="lm-casting-input">
                    <div class="lm-input-wrap radio-wrap">
                        <label for="">Видимость <font class="required">*</font></label>
                        <ul class="lm-radio-buttons">
                            <li>
                                <input checked name="radio" type="radio" id="radio_1">
                                <label for="radio_1">Всем</label>
                            </li>
                            <li>
                                <input name="radio" type="radio" id="radio_2">
                                <label for="radio_2">Только подходящим по параметрам</label>
                            </li>
                            <li>
                                <input name="radio" type="radio" id="radio_3">
                                <label for="radio_3">Только тем, у кого есть ссылка</label>
                            </li>
                        </ul>
                    </div>
                    <div class="lm-separator"></div>
                    <div class="lm-input-wrap radio-wrap">
                        <label for="">Частота уведомлений об откликах <font class="required">*</font></label>
                        <ul class="lm-radio-buttons">
                            <li>
                                <input checked name="radio" type="radio" id="radio_1">
                                <label for="radio_1">Каждый отклик</label>
                            </li>
                            <li>
                                <input name="radio" type="radio" id="radio_2">
                                <label for="radio_2">Раз в час</label>
                            </li>
                            <li>
                                <input name="radio" type="radio" id="radio_3">
                                <label for="radio_3">Раз в сутки</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lm-m-post-register-fixed-bottom">
                    <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">Продолжить
                    </button>
                </div>
            </div>
        </template>
        <template v-if="step === 7">
            <div class="lm-create-casting-wrap wrapper fix-bottom-actions">
                <h1>Ваш кастинг создан и готов к публикации</h1>
                <div class="lm-create-casting-info-wrap">
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Роль</div>
                        <div class="desc">Модель</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Возраст и пол</div>
                        <div class="desc">18-26 лет, Мужской & Женский</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Название и категория</div>
                        <div class="desc">Нужны красивые модели</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Описание и файлы</div>
                        <div class="desc">Хорошее описание</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Даты и место проведения</div>
                        <div class="desc">25.09.18 - 29.09.18, Москва</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Даты работ</div>
                        <div class="desc">Уточняется</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Гонорар</div>
                        <div class="desc">10 000 ₽, За рабочий день</div>
                    </div>
                    <div class="lm-create-casting-info-item">
                        <i class="lm-dropdown-icon"></i>
                        <div class="title">Видимость и уведомления</div>
                        <div class="desc">Доступно всем, Каждый отклик</div>
                    </div>
                </div>
                <div class="lm-m-post-register-fixed-bottom">
                    <a href="javascript:void(0)" class="lm-link-button">Сохранить</a>
                    <button href="javascript:void(0)" class="lm-primary-button middle">Опубликовать</button>
                </div>
            </div>
        </template>
    </div>

</template>

<script>
  export default {
    metaInfo: {
      title: 'Создание кастинга'
    },
    data () {
      return {
        step: 1
      }
    },
    methods: {
      nextStep () {
        this.step++
      },
      prevStep () {
        this.step--
      }
    }
  }
</script>