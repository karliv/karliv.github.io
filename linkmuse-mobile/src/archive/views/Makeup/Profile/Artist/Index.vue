<template>
    <div>
        <div class="lm-m-profile-page artist">
            <div class="wrapper no-padding">
                <div class="lm-m-profile-page-head">
                    <div class="lm-user-vertical big">
                        <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-vertical-avatar">
                        <div class="lm-user-vertical-info">
                            <div class="lm-user-vertical-info-name">
                                <span>Fashion production</span>
                            </div>
                            <div class="lm-user-block-vertical-type">
                                <span class="type">Модель</span>
                            </div>
                        </div>
                    </div>
                    <div class="lm-m-profile-actions-button">
                        <a href="javascript:void(0)" class="lm-follow-icon"></a>
                        <a style="display: none;" href="javascript:void(0)" class="lm-wait-icon"></a>
                        <a style="display: none;" href="javascript:void(0)" class="lm-following-icon"></a>
                        <a href="javascript:void(0)" class="lm-icon-message"></a>
                        <a href="javascript:void(0)" class="lm-icon-phone"></a>
                        <a @click="modalResponse" href="javascript:void(0)" class="lm-plus-icon"></a>
                        <a style="display: none;" href="javascript:void(0)" class="lm-small-ok-icon"></a>

                    </div>
                    <div class="lm-m-profile--subscribe-block">
                        <a href="javascript:void(0)">
                            <div class="count">34к</div>
                            <div class="desc">подписок</div>
                        </a>
                        <a href="javascript:void(0)">
                            <div class="count">34к</div>
                            <div class="desc">подписок</div>
                        </a>
                    </div>
                </div>
                <!--этот блок должен быть вверху при "доскролинге" до него-->
                <div class="lm-m-nav-menu">
                    <div class="lm-m-nav-wrapper">
                        <div class="lm-m-nav-menu--left">
                            <a href="javascript:void(0)" class="lm-m-nav-menu--item active">
                                <span class="text">Портфолио</span>
                            </a>
                            <a href="/artist#anketa" class="lm-m-nav-menu--item">
                                <span class="text">анкета</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lm-m-profile-tablet-right" style="display: none;">
                    <div class="lm-m-profile-portfolio model">
                        <i class="edit lm-icon-pencil"></i>
                        <div class="lm-m-model-portofolio video">
                            <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/Ar/53/Ar53ZObXyzd8mKYErsBt.jpg" alt="">
                            <i class="lm-play-button big"></i>
                        </div>
                        <div class="lm-m-model-portofolio portret">
                            <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/j6/Is/j6IswOusieUL6bBYtql5.jpg" alt="">
                        </div>
                        <div class="lm-m-model-portofolio full-height">
                            <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/Ar/53/Ar53ZObXyzd8mKYErsBt.jpg" alt="">
                        </div>
                        <div class="lm-m-model-portofolio full-height">
                            <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/mf/ar/mfarp2IPS55oWMz4XFXx.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="lm-m-profile-tablet-right">
                    <div class="lm-portfolio">
                        <div class="portfolio-wrap">
                            <div class="lm-m-post-register-portfolio--item first uploaded">
                                <div class="item-wrap">
                                    <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                                    <i class="remove"></i>
                                </div>
                            </div>
                            <div class="lm-m-post-register-portfolio--item second uploaded error">
                                <div class="item-wrap">
                                    <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                                    <i class="remove"></i>
                                    <i class="error-icon"></i>
                                </div>
                            </div>
                            <div class="lm-m-post-register-portfolio--item second uploaded loaded">
                                <div class="item-wrap">
                                    <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                                    <i class="loaded"></i>
                                </div>
                            </div>
                            <div class="lm-m-post-register-portfolio--item three uploaded">
                                <div class="item-wrap">
                                    <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                                    <i class="remove"></i>
                                </div>
                            </div>
                        </div>
                        <div class="lm-input-wrap">
                            <input type="text" class="lm-input ok" placeholder="Добавьте ссылку">
                            <span class="desc">Вместо загрузки видео вы можете указать ссылку на Youtube,
    Rutube, Vimeo и другие</span>
                        </div>
                    </div>
                    <div class="lm-m-profile-action-edit">
                        <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                        <button href="javascript:void(0)" class="lm-primary-button middle ">опубликовать</button>
                    </div>
                </div>
                <div class="lm-m-profile-tablet-right null" style="display: none;">
                    <div class="lm-m-profile-portfolio null">
                        <span>😕</span>
                        <div class="desc">Анфиса Василевская пока не опубликовала портфолио</div>
                    </div>
                </div>
                <div class="lm-m-profile-tablet-right null" style="display: none;">
                    <div class="lm-m-profile-portfolio null">
                        <span>😕</span>
                        <div class="desc">Ваше портфолио не опубликовано</div>
                        <a href="javascript:void(0)" class="lm-primary-button lm-plus-icon lm-icon-button middle">Создать</a>
                    </div>
                </div>
                <div class="lm-m-profile-user-info" id="anketa">
                    <div class="lm-m-profile-user-info--line">
                        <div class="title">
                            <div class="left">
                                <span>Обо мне</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <div class="about">
                            <div class="lm-sex female"></div>
                            <div class="lm-tags">
                                <div class="lm-tag small">25 лет</div>
                            </div>
                            <span class="city">Владивосток, Россия</span>
                        </div>
                        <div class="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur ex soluta temporibus veritatis? Asperiores eaque exercitationem iure quibusdam velit. Commodi eveniet necessitatibus non odio quaerat quia, quibusdam soluta voluptas.
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="title">
                                <div class="left">
                                    <span>Обо мне</span>
                                </div>
                            </div>
                            <div class="lm-input-wrap">
                                <label for="about_field">Описание</label>
                                <textarea class="lm-input" id="about_field" placeholder="Опишите себя"></textarea>
                            </div>
                            <div class="lm-m-profile-user-info--line-separator"></div>
                            <div class="lm-dropdown-wrap filled">
                                <label for="">Страна</label>
                                <div class="lm-dropdown">
                                    <div class="lm-dropdown-selected">Россия</div>
                                    <i class="lm-dropdown-icon"></i>
                                </div>
                            </div>
                            <div class="lm-dropdown-wrap">
                                <label for="">Город</label>
                                <div class="lm-dropdown">
                                    <div class="lm-dropdown-selected">Выберите</div>
                                    <i class="lm-dropdown-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line info-edit">
                      Чтобы отредактировать список профессий,
                      воспользуйтесь полной версией сайта (на пк)
                    </div>
                    <div class="lm-m-profile-user-info--line">
                        <div class="title">
                            <div class="left">
                                <span>Образование</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <ul class="list">
                            <li>
                                <div>
                                <div class="name">Театральный институт имени Бориса Щукина</div>
                                <div class="date">мар 1986 - апр 1987 </div>
                                </div>
                            </li>
                            <li>
                                <div class="name">Театральный институт имени Бориса Щукина</div>
                                <div class="date">мар 1986 - апр 1987 </div>
                            </li>
                            <li>
                                <div class="name">Театральный институт имени Бориса Щукина</div>
                                <div class="date">мар 1986 - апр 1987 </div>
                            </li>
                        </ul>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                        <div class="title">
                            <div class="left">
                                <span>Образование</span>
                            </div>
                        </div>
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="lm-editable-removed-line">
                                <div class="lm-input-wrap">
                                    <label for="">Учреждение</label>
                                    <input type="text" class="lm-input" placeholder="Введите">
                                </div>
                                <a href="javascript:void(0)" class="lm-round-button remove"></a>
                            </div>
                            <div class="lm-column-2">
                                <div class="lm-input-wrap">
                                    <label>Начало обучения</label>
                                    <input class="lm-input lm-input-icon lm-icon-calendar-fill filled" type="date" placeholder="Введите">
                                </div>
                                <div class="lm-input-wrap">
                                    <label>Конец обучения</label>
                                    <input class="lm-input lm-input-icon lm-icon-calendar-fill" type="date" placeholder="Введите">
                                </div>
                            </div>
                            <div class="lm-m-profile-user-info--line-separator"></div>
                            <div class="lm-editable-add-wrap">
                                <a href="javascript:void(0)" class="lm-round-button add"></a>
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line">
                        <div class="title">
                            <div class="left">
                                <span>Профессия</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <div class="lm-m-profile-user-profession-line">
                            <div class="lm-m-profile-user-profession-item">
                                <i class="actor"></i>
                                <div class="right">
                                    <div class="profession-title">Актер</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="model"></i>
                                <div class="right">
                                    <div class="profession-title">Модель</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="musician"></i>
                                <div class="right">
                                    <div class="profession-title">Музыкант</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="dancer"></i>
                                <div class="right">
                                    <div class="profession-title">Танцор</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="leading"></i>
                                <div class="right">
                                    <div class="profession-title">Ведущий</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="composer"></i>
                                <div class="right">
                                    <div class="profession-title">Композитор</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="circus-artist"></i>
                                <div class="right">
                                    <div class="profession-title">Артист цирка</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="photographer"></i>
                                <div class="right">
                                    <div class="profession-title">Фотограф видеограф</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="visagiste"></i>
                                <div class="right">
                                    <div class="profession-title">визажист стилист</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="designer"></i>
                                <div class="right">
                                    <div class="profession-title">художник дизайнер</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-profession-item">
                                <i class="film-crew"></i>
                                <div class="right">
                                    <div class="profession-title">участник съемочной группы</div>
                                    <div class="profession-desc">Профессионал</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                            <div class="title">
                                <div class="left">
                                    <span>Профессия </span>
                                </div>
                            </div>
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="lm-editable-removed-line">
                                <div class="lm-dropdown-wrap filled">
                                    <label for="">Должность</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Модель</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="lm-round-button remove"></a>
                            </div>
                            <div class="lm-dropdown-wrap">
                                <label for="">Уровень</label>
                                <div class="lm-dropdown">
                                    <div class="lm-dropdown-selected">Профессионал</div>
                                    <i class="lm-dropdown-icon"></i>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-info--line-separator"></div>
                        </div>
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="lm-editable-removed-line">
                                <div class="lm-dropdown-wrap filled">
                                    <label for="">Должность</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Модель</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="lm-round-button remove"></a>
                            </div>
                            <div class="lm-dropdown-wrap">
                                <label for="">Уровень</label>
                                <div class="lm-dropdown">
                                    <div class="lm-dropdown-selected">Профессионал</div>
                                    <i class="lm-dropdown-icon"></i>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-info--line-separator"></div>
                            <div class="lm-editable-add-wrap">
                                <a href="javascript:void(0)" class="lm-round-button add"></a>
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line">
                        <div class="title">
                            <div class="left">
                                <span>Навыки</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <div class="lm-m-profile-skills-line">
                            <div class="lm-m-profile-skill-title">Вождение</div>
                            <div class="lm-m-profile-skill-desc">А, B, С</div>
                        </div>
                        <div class="lm-m-profile-skills-line">
                            <div class="lm-m-profile-skill-title">Танцевальные стили</div>
                            <div class="lm-m-profile-skill-desc">Румба-бумба, Тра-та-та, Танго</div>
                        </div>
                        <div class="lm-m-profile-skills-line">
                            <div class="lm-m-profile-skill-title">Музыкальные инструменты</div>
                            <div class="lm-m-profile-skill-desc">Гитара, Окулеле</div>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="title">
                                <div class="left">
                                    <span>Навыки</span>
                                </div>
                            </div>
                            <div class="lm-editable-removed-line">
                                <div class="lm-dropdown-wrap filled">
                                    <label for="">Категория</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Вождение</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="lm-round-button remove"></a>
                            </div>
                            <div class="lm-dropdown-wrap">
                                <label for="">Тип</label>
                                <div class="lm-dropdown">
                                    <div class="lm-dropdown-selected">Введите</div>
                                    <i class="lm-dropdown-icon"></i>
                                </div>
                                <div class="lm-tags">
                                    <div class="lm-tag small">
                                        В
                                        <i class="icon-close"></i>
                                    </div>
                                    <div class="lm-tag small">A
                                        <i class="icon-close"></i>
                                    </div>
                                    <div class="lm-tag small">C
                                        <i class="icon-close"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="lm-m-profile-user-info--line-separator"></div>
                            <div class="lm-editable-removed-line">
                                <div class="lm-dropdown-wrap filled">
                                    <label for="">Категория</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Танцевальные стили</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="lm-round-button remove"></a>
                            </div>
                            <div class="lm-dropdown-wrap">
                                <label for="">Тип</label>
                                <div class="lm-dropdown">
                                    <div class="lm-dropdown-selected">Введите</div>
                                    <i class="lm-dropdown-icon"></i>
                                </div>
                                <div class="lm-tags">
                                    <div class="lm-tag small">
                                        РуМБА-БУМБА
                                        <i class="icon-close"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line">
                        <div class="title">
                            <div class="left">
                                <span>Внешность</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <div class="lm-m-profile-user-params">
                            <ul>
                                <li>
                                    <div class="left">
                                        <span>Рост</span>
                                    </div>
                                    <div class="right">
                                        <span>189</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Цвет глаз</span>
                                    </div>
                                    <div class="right">
                                        <span>серый</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Вес</span>
                                    </div>
                                    <div class="right">
                                        <span>54</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Цвет волос</span>
                                    </div>
                                    <div class="right">
                                        <span>серый</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Размер обуви</span>
                                    </div>
                                    <div class="right">
                                        <span>39</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Длина волос</span>
                                    </div>
                                    <div class="right">
                                        <span>длинный</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Размер одежды</span>
                                    </div>
                                    <div class="right">
                                        <span>34</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Татуировки</span>
                                    </div>
                                    <div class="right">
                                        <span>есть</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <span>Телосложение</span>
                                    </div>
                                    <div class="right">
                                        <span>худой</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="title">
                                <div class="left">
                                    <span>Внешность</span>
                                </div>
                            </div>
                            <div class="lm-column-2">
                                <div class="lm-input-wrap">
                                    <label>Рост</label>
                                    <input type="text" placeholder="Введите">
                                </div>
                                <div class="lm-input-wrap">
                                    <label>Вес</label>
                                    <input type="text" placeholder="Введите">
                                </div>
                            </div>
                            <div class="lm-column-2">
                                <div class="lm-input-wrap">
                                    <label>Размер обуви</label>
                                    <input type="text" placeholder="Введите">
                                </div>
                                <div class="lm-input-wrap">
                                    <label>Размер одежды</label>
                                    <input type="text" placeholder="Введите">
                                </div>
                            </div>

                            <div class="lm-m-profile-user-info--line-separator"></div>
                            <div class="lm-column-2">
                                <div class="lm-dropdown-wrap">
                                    <label for="">Телосложение</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Выберите</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                                <div class="lm-dropdown-wrap">
                                    <label for="">Цвет глаз</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Выберите</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="lm-column-2">
                                <div class="lm-dropdown-wrap">
                                    <label for="">Цвет волос</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Выберите</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                                <div class="lm-dropdown-wrap">
                                    <label for="">Длина волос</label>
                                    <div class="lm-dropdown">
                                        <div class="lm-dropdown-selected">Выберите</div>
                                        <i class="lm-dropdown-icon"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="lm-column-center">
                                <div class="lm-input-wrap">
                                    <label class="fix-label" for="">Татуировки</label>
                                    <ul class="lm-radio-buttons">
                                        <li>
                                            <input checked name="radio" type="radio" id="radio_1">
                                            <label for="radio_1">Нет</label>
                                        </li>
                                        <li>
                                            <input name="radio" type="radio" id="radio_2">
                                            <label for="radio_2">Есть</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line">
                        <div class="title">
                            <div class="left">
                                <span>Контакты</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <div class="lm-profile-contact">
                            <div class="lm-profile-contact-line">
                                <a href="javascript:void(0)" class="lm-profile-contact-web">
                                    <span>http://pointmanagement.ru</span>
                                </a>
                            </div>
                            <div class="lm-profile-contact-line">
                                <a href="javascript:void(0)" class="lm-profile-contact-mail">
                                    <span>ol5478@ya.ru</span>
                                </a>
                            </div>
                            <div class="lm-profile-contact-line">
                                <a href="javascript:void(0)" class="lm-profile-contact-phone">
                                    <span>8 (908) 063-28-10</span>
                                </a>
                            </div>
                        </div>
                        <div class="title" style="margin-top: 24px;">
                            <div class="left">
                                <span>Соц. сети</span>
                            </div>
                            <div class="right">
                                <i class="lm-icon-pencil"></i>
                            </div>
                        </div>
                        <div class="lm-social">
                            <div class="lm-social-vk"></div>
                            <div class="lm-social-fb"></div>
                            <div class="lm-social-google"></div>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="title">
                                <div class="left">
                                    <span>Контакты</span>
                                </div>
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Сайт</label>
                                <input placeholder="Введите" type="text" class="lm-input lm-input-icon lm-icon-world filled" value="https://linkmuse.com">
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Почта</label>
                                <input placeholder="Введите" type="text" class="lm-input lm-input-icon lm-icon-email filled" value="example@gmail.com">
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Телефон</label>
                                <input placeholder="Введите" type="text" class="lm-input lm-input-icon lm-icon-phone">
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                    <div class="lm-m-profile-user-info--line editable">
                        <div class="lm-m-profile-user-info--line-edit-wrap">
                            <div class="title">
                                <div class="left">
                                    <span>Соц. сети</span>
                                </div>
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Vk</label>
                                <input placeholder="Введите ссылку на профиль" type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Facebook</label>
                                <input placeholder="Введите ссылку на профиль" type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Twitter</label>
                                <input placeholder="Введите ссылку на профиль" type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for="">Instagram</label>
                                <input placeholder="Введите ссылку на профиль" type="text" class="lm-input">
                            </div>
                        </div>
                        <div class="lm-m-profile-action-edit">
                            <a href="javascript:void(0)" class="lm-link-button">отмена</a>
                            <button href="javascript:void(0)" class="lm-primary-button middle ">сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lm-m-casting--page" v-if="modal">
            <div class="lm-m-black-head-nav">
                <div class="lm-m-black-head-nav-wrap">
                    <div class="left">
                        <router-link :to="{ name: 'profile.artist.index' }">
                            <i class="lm-back-icon"></i>
                            <span>назад</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="lm-m-casting--page-content response">
                <div class="lm-m-casting--page-content-wrap">
                    <h1 class="lm-m-casting-page-title">Приглашение на кастинг</h1>

                    <div class="lm-input-wrap">
                        <div class="lm-dropdown-wrap">
                            <label for=''>Кастинг</label>
                            <div class="lm-dropdown">
                                <div class="lm-dropdown-selected">Требуются модели для нового шоу д...</div>
                                <i class="lm-dropdown-icon"></i>
                                <div class="lm-dropdown-menu">
                                    <a href="javascript:void(0)">Выбор</a>
                                    <a href="javascript:void(0)">Выбор 1</a>
                                    <a href="javascript:void(0)">Выбор 2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lm-input-wrap">
                        <label for="">Комментарии к отклику</label>
                        <textarea class="lm-input"></textarea>
                    </div>
                    <div class="lm-m-attach-file-wrap">
                        <input type="file" id="attach-file">
                        <label for="attach-file">
                            <i class="lm-attach-icon"></i>
                            <span>ЗАГРУЗИТЬ ФАЙЛ</span>
                        </label>
                        <div class="lm-m-attach-file-item">
                            <div class="left">
                                <i class="lm-icon-square-download"></i>
                                <span>бриф.pdf</span>
                            </div>
                            <div class="right">
                                <i class="lm-close"></i>
                            </div>
                        </div>
                        <div class="lm-m-attach-file-item">
                            <div class="left">
                                <i class="lm-close uploading">
                                    <div class="lds-css ng-scope">
                                        <div style="width:100%;height:100%" class="lds-rolling">
                                            <div></div>
                                        </div>
                                    </div>
                                </i>
                                <span>файл загружается.pdf</span>
                            </div>
                            <div class="right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lm-m-casting--page-content response-button">
                <div class="lm-m-casting--page-content-wrap">
                    <a @click="modalResponse" href="javascript:void(0)" class="lm-primary-button">пригласить на кастинг</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Исполнитель'
    },
    data () {
      return {
        modal: false,
      }
    },
    computed: {},
    methods: {
      modalResponse () {
        this.modal = !this.modal
      },
    }
  }
</script>
