<template lang="html">
  <div class="lm-m-div-container">
  <div class="page lm-m-page-profile-settings">

    <div class="lm-m-page-content-profile-settings">
      <div class="lm-m-wrapper-profile-settings">
        <div class="lm-m-name-h1-profile-settings mb_24">
          Настройки
        </div>

        <div class="lm-m-profile-container p_b_24">

          <div class="lm-m-name-h2-profile-settings">
            Личные данные
          </div>

          <div class="lm-m-wrap-photo-profile-settings">
            <div class="label input__label input__label_declaration">
              Фото профиля
            </div>
            <img class="lm-m-photo-profile-settings" src="/dist/img/icons/svg/photo-profile-settings.svg" alt="">
            <div class="lm-m-blue-text-profile-settings">
              <a href="#">Загрузить фото</a>
            </div>
          </div>

          <div class="form__group form__group_declaration">
            <label class="label input__label input__label_declaration">
              Имя
              <span
                class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
            </label>
            <input type="text" placeholder="Иван" id="form__input_declaration_address" name="address"
                   class="error input form__input form__input_declaration" aria-required="false" aria-invalid="true">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">
              Введите ваше имя
            </div>
          </div>

          <div class="form__group form__group_declaration">
            <label class="label input__label input__label_declaration">
              Фамилия
              <span
                class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
            </label>
            <input type="text" placeholder="Иванов" class="input form__input form__input_declaration">
          </div>

          <div class="form__group form__group_declaration">
            <label class="label input__label input__label_declaration">
              Дата рождения
              <span
                class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
            </label>
            <input type="date" placeholder="Дата рождения" class="input form__input form__input_declaration">
          </div>

          <div class="form__group form__group_declaration">
            <label class="label input__label input__label_declaration">
              Пол
              <span
                class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
            </label>
            <div class="form__row form__row_declaration">
              <div class="form__column form__column_declaration">
                <input id="form__checkbox_declaration_gender_1" type="checkbox" name="gender"
                       class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender form__checkbox_declaration_gender_male"
                       value="1">
                <label for="form__checkbox_declaration_gender_1"
                       class="checkbox__label_declaration checkbox__label_declaration_gender">Мужской</label>
              </div>
              <div class="form__column form__column_declaration">
                <input id="form__checkbox_declaration_gender_2" type="checkbox" name="gender"
                       class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender form__checkbox_declaration_gender_male"
                       value="2">
                <label for="form__checkbox_declaration_gender_2"
                       class="checkbox__label_declaration checkbox__label_declaration_gender">Женский</label>
              </div>
            </div>
          </div>

          <div class="form__group form__group_declaration m_0">
            <label class="label input__label input__label_declaration">
              Страна
              <span
                class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
            </label>
            <div class="lm-dropdown-wrap">
              <div class="lm-dropdown">
                <select id="form__select_declaration_coutry" name="country" class="">
                  <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрана</option>
                  <option value="1">Россия</option>
                  <option value="2">Абхазия</option>
                  <option value="3">Азербайджан</option>
                  <option value="4">Армения</option>
                  <option value="5">Беларусь</option>
                  <option value="6">Грузия</option>
                  <option value="7">Казахстан</option>
                  <option value="8">Киргизия</option>
                  <option value="9">Латвия</option>
                  <option value="10">Литва</option>
                  <option value="11">Молдавия</option>
                  <option value="12">Таджикистан</option>
                  <option value="13">Туркмения</option>
                  <option value="14">Узбекистан</option>
                  <option value="15">Украина</option>
                  <option value="16">Эстония</option>
                  <option value="17">Южная Осетия</option>
                  <option value="18">Австралия</option>
                  <option value="19">Австрия</option>
                  <option value="20">Албания</option>
                  <option value="21">Алжир</option>
                  <option value="22">Ангола</option>
                  <option value="23">Андорра</option>
                  <option value="24">Антигуа и Барбуда</option>
                  <option value="25">Аргентина</option>
                  <option value="26">Афганистан</option>
                  <option value="27">Багамы</option>
                  <option value="28">Бангладеш</option>
                  <option value="29">Барбадос</option>
                  <option value="30">Бахрейн</option>
                  <option value="31">Белиз</option>
                  <option value="32">Бельгия</option>
                  <option value="33">Бенин</option>
                  <option value="34">Болгария</option>
                  <option value="35">Боливия</option>
                  <option value="36">Босния и Герцеговина</option>
                  <option value="37">Ботсвана</option>
                  <option value="38">Бразилия</option>
                  <option value="39">Бруней</option>
                  <option value="40">Буркина-Фасо</option>
                  <option value="41">Бурунди</option>
                  <option value="42">Бутан</option>
                  <option value="43">Вануату</option>
                  <option value="44">Ватикан</option>
                  <option value="45">Великобритания</option>
                  <option value="46">Венгрия</option>
                  <option value="47">Венесуэла</option>
                  <option value="48">Восточный Тимор</option>
                  <option value="49">Вьетнам</option>
                  <option value="50">Габон</option>
                  <option value="51">Гаити</option>
                  <option value="52">Гайана</option>
                  <option value="53">Гамбия</option>
                  <option value="54">Гана</option>
                  <option value="55">Гватемала</option>
                  <option value="56">Гвинея</option>
                  <option value="57">Гвинея-Бисау</option>
                  <option value="58">Германия</option>
                  <option value="59">Гондурас</option>
                  <option value="60">Гренада</option>
                  <option value="61">Греция</option>
                  <option value="62">Дания</option>
                  <option value="63">Демократическая Республика Конго</option>
                  <option value="64">Джибути</option>
                  <option value="65">Доминика</option>
                  <option value="66">Доминиканская Республика</option>
                  <option value="67">Египет</option>
                  <option value="68">Замбия</option>
                  <option value="69">Зимбабве</option>
                  <option value="70">Израиль</option>
                  <option value="71">Индия</option>
                  <option value="72">Индонезия</option>
                  <option value="73">Иордания</option>
                  <option value="74">Ирак</option>
                  <option value="75">Иран</option>
                  <option value="76">Ирландия</option>
                  <option value="77">Исландия</option>
                  <option value="78">Испания</option>
                  <option value="79">Италия</option>
                  <option value="80">Йемен</option>
                  <option value="81">Кабо-Верде</option>
                  <option value="82">Камбоджа</option>
                  <option value="83">Камерун</option>
                  <option value="84">Канада</option>
                  <option value="85">Катар</option>
                  <option value="86">Кения</option>
                  <option value="87">Кипр</option>
                  <option value="88">Кирибати</option>
                  <option value="89">Китай</option>
                  <option value="93">КНДР</option>
                  <option value="90">Колумбия</option>
                  <option value="91">Коморы</option>
                  <option value="92">Конго</option>
                  <option value="94">Коста-Рика</option>
                  <option value="95">Кот-д'Ивуар</option>
                  <option value="96">Куба</option>
                  <option value="97">Кувейт</option>
                  <option value="98">Лаос</option>
                  <option value="99">Лесото</option>
                  <option value="100">Либерия</option>
                  <option value="101">Ливан</option>
                  <option value="102">Ливия</option>
                  <option value="103">Лихтенштейн</option>
                  <option value="104">Люксембург</option>
                  <option value="105">Маврикий</option>
                  <option value="106">Мавритания</option>
                  <option value="107">Мадагаскар</option>
                  <option value="108">Македония</option>
                  <option value="109">Малави</option>
                  <option value="110">Малайзия</option>
                  <option value="111">Мали</option>
                  <option value="112">Мальдивы</option>
                  <option value="113">Мальта</option>
                  <option value="114">Марокко</option>
                  <option value="115">Маршалловы Острова</option>
                  <option value="116">Мексика</option>
                  <option value="117">Мозамбик</option>
                  <option value="118">Монако</option>
                  <option value="119">Монголия</option>
                  <option value="120">Мьянма</option>
                  <option value="121">Намибия</option>
                  <option value="122">Науру</option>
                  <option value="123">Непал</option>
                  <option value="124">Нигер</option>
                  <option value="125">Нигерия</option>
                  <option value="126">Нидерланды</option>
                  <option value="127">Никарагуа</option>
                  <option value="128">Новая Зеландия</option>
                  <option value="129">Норвегия</option>
                  <option value="130">Объединённые Арабские Эмираты</option>
                  <option value="131">Оман</option>
                  <option value="132">Пакистан</option>
                  <option value="133">Палау</option>
                  <option value="134">Палестина</option>
                  <option value="135">Панама</option>
                  <option value="136">Папуа-Новая Гвинея</option>
                  <option value="137">Парагвай</option>
                  <option value="138">Перу</option>
                  <option value="139">Польша</option>
                  <option value="140">Португалия</option>
                  <option value="141">Руанда</option>
                  <option value="142">Румыния</option>
                  <option value="143">Сальвадор</option>
                  <option value="144">Самоа</option>
                  <option value="145">Сан-Марино</option>
                  <option value="146">Сан-Томе и Принсипи</option>
                  <option value="147">Саудовская Аравия</option>
                  <option value="148">Свазиленд</option>
                  <option value="149">Сейшельские Острова</option>
                  <option value="150">Сенегал</option>
                  <option value="151">Сент-Винсент и Гренадины</option>
                  <option value="152">Сент-Китс и Невис</option>
                  <option value="153">Сент-Люсия</option>
                  <option value="154">Сербия</option>
                  <option value="155">Сингапур</option>
                  <option value="156">Сирия</option>
                  <option value="157">Словакия</option>
                  <option value="158">Словения</option>
                  <option value="159">Соединённые Штаты Америки</option>
                  <option value="160">Соломоновы Острова</option>
                  <option value="161">Сомали</option>
                  <option value="162">Судан</option>
                  <option value="163">Суринам</option>
                  <option value="164">Сьерра-Леоне</option>
                  <option value="165">Таиланд</option>
                  <option value="166">Танзания</option>
                  <option value="167">Того</option>
                  <option value="168">Тонга</option>
                  <option value="169">Тринидад и Тобаго</option>
                  <option value="170">Тувалу</option>
                  <option value="171">Тунис</option>
                  <option value="172">Турция</option>
                  <option value="173">Уганда</option>
                  <option value="174">Уругвай</option>
                  <option value="175">Федеративные Штаты Микронезии</option>
                  <option value="176">Фиджи</option>
                  <option value="177">Филиппины</option>
                  <option value="178">Финляндия</option>
                  <option value="179">Франция</option>
                  <option value="180">Хорватия</option>
                  <option value="181">Центральноафриканская Республика</option>
                  <option value="182">Чад</option>
                  <option value="183">Черногория</option>
                  <option value="184">Чехия</option>
                  <option value="185">Чили</option>
                  <option value="186">Швейцария</option>
                  <option value="187">Швеция</option>
                  <option value="188">Шри-Ланка</option>
                  <option value="189">Эквадор</option>
                  <option value="190">Экваториальная Гвинея</option>
                  <option value="191">Эритрея</option>
                  <option value="192">Эфиопия</option>
                  <option value="194">Южная Корея</option>
                  <option value="193">Южно-Африканская Республика</option>
                  <option value="195">Южный Судан</option>
                  <option value="196">Ямайка</option>
                  <option value="197">Япония</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form__group form__group_declaration m_0">
            <label for="form__select_declaration_city" class="label input__label input__label_declaration">
              Город
              <span
                class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
            </label>
            <div class="lm-dropdown-wrap">
              <div class="lm-dropdown">
                <select id="form__select_declaration_city" name="city" class="">
                  <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбран</option>
                  <option value="1">Москва</option>
                  <option value="2">Санкт-Петербург</option>
                  <option value="15">Волгоград</option>
                  <option value="14">Воронеж</option>
                  <option value="4">Екатеринбург</option>
                  <option value="6">Казань</option>
                  <option value="12">Красноярск</option>
                  <option value="5">Нижний Новгород</option>
                  <option value="3">Новосибирск</option>
                  <option value="8">Омск</option>
                  <option value="13">Пермь</option>
                  <option value="10">Ростов-на-Дону</option>
                  <option value="9">Самара</option>
                  <option value="11">Уфа</option>
                  <option value="7">Челябинск</option>
                  <option value="105">Абакан</option>
                  <option value="114">Альметьевск</option>
                  <option value="88">Ангарск</option>
                  <option value="164">Арзамас</option>
                  <option value="101">Армавир</option>
                  <option value="158">Артём</option>
                  <option value="55">Архангельск</option>
                  <option value="33">Астрахань</option>
                  <option value="161">Ачинск</option>
                  <option value="100">Балаково</option>
                  <option value="41">Балашиха</option>
                  <option value="21">Барнаул</option>
                  <option value="136">Батайск</option>
                  <option value="51">Белгород</option>
                  <option value="167">Бердск</option>
                  <option value="122">Березники</option>
                  <option value="96">Бийск</option>
                  <option value="90">Благовещенск</option>
                  <option value="86">Братск</option>
                  <option value="50">Брянск</option>
                  <option value="92">Великий Новгород</option>
                  <option value="26">Владивосток</option>
                  <option value="67">Владикавказ</option>
                  <option value="53">Владимир</option>
                  <option value="108">Волгодонск</option>
                  <option value="60">Волжский</option>
                  <option value="65">Вологда</option>
                  <option value="70">Грозный</option>
                  <option value="139">Дербент</option>
                  <option value="85">Дзержинск</option>
                  <option value="143">Димитровград</option>
                  <option value="165">Долгопрудный</option>
                  <option value="138">Домодедово</option>
                  <option value="160">Евпатория</option>
                  <option value="162">Елец</option>
                  <option value="156">Ессентуки</option>
                  <option value="170">Железногорск</option>
                  <option value="153">Жуковский</option>
                  <option value="171">Зеленоград</option>
                  <option value="112">Златоуст</option>
                  <option value="49">Иваново</option>
                  <option value="20">Ижевск</option>
                  <option value="23">Иркутск</option>
                  <option value="77">Йошкар-Ола</option>
                  <option value="40">Калининград</option>
                  <option value="57">Калуга</option>
                  <option value="110">Каменск-Уральский</option>
                  <option value="151">Камышин</option>
                  <option value="148">Каспийск</option>
                  <option value="30">Кемерово</option>
                  <option value="119">Керчь</option>
                  <option value="37">Киров</option>
                  <option value="129">Кисловодск</option>
                  <option value="128">Ковров</option>
                  <option value="124">Коломна</option>
                  <option value="172">Колпино</option>
                  <option value="79">Комсомольск-на-Амуре</option>
                  <option value="120">Копейск</option>
                  <option value="93">Королёв</option>
                  <option value="74">Кострома</option>
                  <option value="115">Красногорск</option>
                  <option value="16">Краснодар</option>
                  <option value="61">Курган</option>
                  <option value="42">Курск</option>
                  <option value="145">Кызыл</option>
                  <option value="36">Липецк</option>
                  <option value="97">Люберцы</option>
                  <option value="47">Магнитогорск</option>
                  <option value="125">Майкоп</option>
                  <option value="27">Махачкала</option>
                  <option value="117">Миасс</option>
                  <option value="69">Мурманск</option>
                  <option value="152">Муром</option>
                  <option value="95">Мытищи</option>
                  <option value="34">Набережные Челны</option>
                  <option value="144">Назрань</option>
                  <option value="82">Нальчик</option>
                  <option value="118">Находка</option>
                  <option value="142">Невинномысск</option>
                  <option value="130">Нефтекамск</option>
                  <option value="131">Нефтеюганск</option>
                  <option value="75">Нижневартовск</option>
                  <option value="83">Нижнекамск</option>
                  <option value="54">Нижний Тагил</option>
                  <option value="31">Новокузнецк</option>
                  <option value="168">Новокуйбышевск</option>
                  <option value="135">Новомосковск</option>
                  <option value="76">Новороссийск</option>
                  <option value="132">Новочебоксарск</option>
                  <option value="111">Новочеркасск</option>
                  <option value="154">Новошахтинск</option>
                  <option value="149">Новый Уренгой</option>
                  <option value="169">Ногинск</option>
                  <option value="106">Норильск</option>
                  <option value="157">Ноябрьск</option>
                  <option value="147">Обнинск</option>
                  <option value="126">Одинцово</option>
                  <option value="146">Октябрьский</option>
                  <option value="63">Орёл</option>
                  <option value="29">Оренбург</option>
                  <option value="141">Орехово-Зуево</option>
                  <option value="87">Орск</option>
                  <option value="35">Пенза</option>
                  <option value="137">Первоуральск</option>
                  <option value="73">Петрозаводск</option>
                  <option value="104">Петропавловск-Камчатский</option>
                  <option value="68">Подольск</option>
                  <option value="98">Прокопьевск</option>
                  <option value="94">Псков</option>
                  <option value="173">Пушкин</option>
                  <option value="159">Пушкино</option>
                  <option value="121">Пятигорск</option>
                  <option value="150">Раменское</option>
                  <option value="123">Рубцовск</option>
                  <option value="102">Рыбинск</option>
                  <option value="32">Рязань</option>
                  <option value="116">Салават</option>
                  <option value="64">Саранск</option>
                  <option value="17">Саратов</option>
                  <option value="45">Севастополь</option>
                  <option value="103">Северодвинск</option>
                  <option value="155">Северск</option>
                  <option value="163">Сергиев Посад</option>
                  <option value="133">Серпухов</option>
                  <option value="58">Симферополь</option>
                  <option value="59">Смоленск</option>
                  <option value="48">Сочи</option>
                  <option value="43">Ставрополь</option>
                  <option value="91">Старый Оскол</option>
                  <option value="72">Стерлитамак</option>
                  <option value="52">Сургут</option>
                  <option value="107">Сызрань</option>
                  <option value="81">Сыктывкар</option>
                  <option value="78">Таганрог</option>
                  <option value="71">Тамбов</option>
                  <option value="46">Тверь</option>
                  <option value="19">Тольятти</option>
                  <option value="28">Томск</option>
                  <option value="39">Тула</option>
                  <option value="18">Тюмень</option>
                  <option value="44">Улан-Удэ</option>
                  <option value="22">Ульяновск</option>
                  <option value="109">Уссурийск</option>
                  <option value="24">Хабаровск</option>
                  <option value="127">Хасавюрт</option>
                  <option value="80">Химки</option>
                  <option value="38">Чебоксары</option>
                  <option value="62">Череповец</option>
                  <option value="140">Черкесск</option>
                  <option value="56">Чита</option>
                  <option value="84">Шахты</option>
                  <option value="134">Щёлково</option>
                  <option value="113">Электросталь</option>
                  <option value="166">Элиста</option>
                  <option value="89">Энгельс</option>
                  <option value="99">Южно-Сахалинск</option>
                  <option value="66">Якутск</option>
                  <option value="25">Ярославль</option>
                  <option value="180">Анадырь</option>
                  <option value="177">Биробиджан</option>
                  <option value="174">Горно-Алтайск</option>
                  <option value="176">Магадан</option>
                  <option value="178">Нарьян-Мар</option>
                  <option value="181">Салехард</option>
                  <option value="179">Ханты-Мансийск</option>
                  <option value="175">Магас</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form__group form__group_declaration">
            <label for="form__textarea_casting-description" class="label textarea__label textarea__label_declaration">
              Описание (о себе)
            </label>
            <textarea id="form__textarea_casting-description" rows="13" name="description"
                      placeholder="Расскажите о себе"
                      class="textarea form__textarea form__textarea_declaration lm-m-textarea-profile-settings"
                      aria-required="false"
                      aria-invalid="false">
          </textarea>
          </div>

          <div class="form__group form__group_declaration form__group_declaration_switch">
            <div class="form__row form__row_declaration form__row_declaration_payment">
              <div class="switch switch_declaration">
                <label for="form__checkbox_for_trusted" class="switch-label-settings">Представитель</label>
                <input id="form__checkbox_for_trusted" type="checkbox" class="switch__mark">
                <label for="form__checkbox_for_trusted" class="switch__btn"></label>
              </div>
            </div>
            <div class="switch__declaration_description">
              <span class="">Включите фильтр, если вы являетесь представителем компании или агентства</span>
            </div>
          </div>

        </div>
        <div class="lm-m-profile-container">

          <div class="lm-m-name-h2-profile-settings">
            Контакты
          </div>

          <div class="form__group form__group_declaration mb_-20">
            <div class="form__row form__row_declaration">
              <div class="form__column form__column_declaration">
                <label class="label textarea__label textarea__label_declaration">
                  Мессенджер
                </label>
                <div class="lm-dropdown-wrap disabled" aria-required="true" aria-invalid="false">
                  <div class="lm-dropdown">
                    <select id="form__select_period_payment" name="feeCurrencyId" class="">
                      <option value="" selected="selected" disabled="disabled" hidden="hidden">Telegram</option>
                      <option value="1">WatsApp</option>
                      <option value="2">Viber</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form__column form__column_declaration">
                <label for="form__select_declaration_age_to"
                       class="label select__label select__label_declaration p_t_15">

                </label>
                <input type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                       placeholder="id аккаунта" id="form__select_declaration_age_to" name="ageTo"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
              </div>
            </div>
          </div>

          <div class="lm-m-text-container">
            <div class="lm-m-blue-text-profile-settings">
              <a href="#">Добавить ещё</a>
            </div>
            <div class="lm-m-delete-text-profile-settings">
              <a href="#">Удалить</a>
            </div>
          </div>

        </div>
        <div class="lm-m-profile-container">

          <div class="lm-m-name-h2-profile-settings">
            Аккаунт
          </div>

          <div class="form__group form__group_declaration">
            <label for="profile-settings__phone" class="label input__label input__label_declaration">
              Телефон
            </label>
            <input type="tel" id="profile-settings__phone" name="phone" autocomplete="off"
                   placeholder="+7 900 000 00 00" class="input form__input form__input_declaration"
                   aria-required="false" aria-invalid="false">
          </div>

          <div class="form__group form__group_declaration">
            <label for="profile-settings__email" class="label input__label input__label_declaration">
              Email
            </label>
            <div class="column justify_center align_flex-end position_relative">
              <a href="#" class="lm-m-link">Изменить</a>
              <input type="email" id="profile-settings__email" name="email" autocomplete="off" autocapitalize="off"
                     placeholder="pochta@gmaill.com" class="input form__input form__input_declaration"
                     aria-required="false" aria-invalid="false">
            </div>
          </div>

          <div class="form__group form__group_declaration">
            <label for="profile-settings__password" class="label input__label input__label_declaration">
              Пароль
            </label>
            <div class="column justify_center align_flex-end position_relative">
              <a href="#" class="lm-m-link">Изменить</a>
              <input type="email" id="profile-settings__password" name="password" autocomplete="off"
                     autocapitalize="off"
                     placeholder="qwerty123" class="input form__input form__input_declaration"
                     aria-required="false" aria-invalid="false">
            </div>
          </div>

          <label class="label input__label input__label_declaration">
            Адрес страницы
          </label>
          <div class="form__group form__group_declaration form__group_declaration_address_profile">
            <div class="form__row form__row_declaration form__row_declaration_payment p_0">
              <div class="address_declaration">
                <input class="lm-m-address-input mb_0" type="text" placeholder="30123">
              </div>
            </div>
            <div class="address_declaration_description m_0">
            <span class="">Адрес страницы может содержать только буквы (A–Z), цифры (0–9) и точки (.), без расширений
              (.com, .net)
            </span>
            </div>
          </div>

          <div class="form__group form__group_declaration form__group_declaration_switch">
            <div class="form__row form__row_declaration form__row_declaration_payment">
              <div class="switch switch_declaration mb_16">
                <label for="form__checkbox_for_service_mailing" class="switch-label-settings">Сервисная рассылка</label>
                <input id="form__checkbox_for_service_mailing" type="checkbox" class="switch__mark">
                <label for="form__checkbox_for_service_mailing" class="switch__btn"></label>
              </div>
              <div class="switch switch_declaration">
                <label for="form__checkbox_for_news_mailing" class="switch-label-settings">Новостная рассылка</label>
                <input id="form__checkbox_for_news_mailing" type="checkbox" class="switch__mark">
                <label for="form__checkbox_for_news_mailing" class="switch__btn"></label>
              </div>
            </div>
          </div>

          <div class="lm-m-red-text-profile-settings pb_0">
            <a href="javascript:void(0)" @click="_handleClickDestroyPage">Удалить аккаунт</a>
          </div>

        </div>
      </div>

      <div class="page__footer page__footer_declaration page__footer_declaration_casting">
        <div class="form__row form__row_buttons form__row_buttons_declaration">
          <button class="button form__button_cancel form__button_cancel_declaration">
            Назад
          </button>
          <button class="button form__button form__button_publish form__button_publish_declaration">
            Сохранить
          </button>
        </div>
      </div>

<!--      <div class="lm-m-modal-delete-profile">-->
<!--        <span class="lm-m-h2-text-delete-profile">Подтвердите действие</span>-->
<!--        <div class="lm-m-text-delete-profile">Вы уверены, что хотите удалить аккаунт и все данные в нем?</div>-->
<!--        <div class="form__row form__row_buttons form__row_buttons_declaration">-->
<!--          <button class="button form__button_cancel form__button_cancel_declaration">-->
<!--            Отмена-->
<!--          </button>-->
<!--          <button class="button form__button form__button_publish form__button_delete_declaration">-->
<!--            Удалить-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
  </div>

</template>

<script>
  export default {}
</script>

<style lang="css" scoped>
</style>
