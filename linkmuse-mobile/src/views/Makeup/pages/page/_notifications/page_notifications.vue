<template>
  <div class="lm-m-v2-notifications lm-m-page">
    <div class="lm-m-v2-notifications-head lm-m-page--head">
      <span>Уведомления</span>
    </div>
    <div class="lm-m-v2-notifications-body"  v-if="isEmpty">
      <div class="lm-m-v2-notifications-list"
           infinite-scroll-distance="200"
           infinite-scroll-disabled="infiniteDisabled">

        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваше объявление <a href="#" class="notifications__link fw_600">“Название”</a> опубликовано в ленте
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-2"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваше объявление <a href="#" class="notifications__link fw_600">“Название”</a> снято с публикации
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-3"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Срок публикации вашего объявления <a href="#" class="notifications__link fw_600">“Название”</a> закончится
              через 3 дня
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
            <button class="btn btn_primary notifications__btn">Продлить</button>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Получен новый отклик на объявление <a href="#" class="notifications__link fw_600">“Название”</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Модератор проверил и опубликовал ваше объявление <a href="#"
                                                                  class="notifications__link fw_600">“Название”</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-2"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Модератор отклонил ваше объявление <a href="#" class="notifications__link fw_600">“Название”</a>
              по причине: “Причина”
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>

        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-2"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Модератор удалил ваше объявление <a href="#" class="notifications__link fw_600">“Название”</a>
              по причине: “Причина”
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon eye"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваш отклик на объявление <a href="#" class="notifications__link fw_600">“Название”</a> был просмотрен
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-2"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Один из ваших откликов больше не актуален, т.к. автор объявления был заблокирован
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon eye"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              За вчерашний день ваш профиль был просмотрен “кол-во” раз
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>

        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-2"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваша заявка на верификацию отклонена. <a href="#" class="notifications__link fw_600">Узнать причину</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Вы успешно оплатили услугу <a href="#" class="notifications__link fw_600">“Название”</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">Вы открыли доступ. Ожидайте решения модератора</div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle btn__alert-2"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваш доступ закрыт <a href="#" class="notifications__link fw_600">Узнать решение</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваш заказ готов <a href="#" class="notifications__link fw_600">Посмотреть детали</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Вы успешно назначили встречу <a href="#" class="notifications__link fw_600">Посмотреть детали</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              У вас новый заказ <a href="#" class="notifications__link fw_600">Посмотреть</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Ваш заказ завершен <a href="#" class="notifications__link fw_600">Посмотреть детали</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon check-circle"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Модератор одобрил вашу заявку на регистрацию в программе ВС
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>

        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-3"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Опубликуйте портфолио, чтобы увеличить внимание к своему профилю в 2 раза
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
            <button class="btn btn_primary notifications__btn">Опубликовать</button>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon info btn__alert-3"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Заполните анкету профиля, чтобы увеличить свою позицию в поисковой выдаче
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
            <button class="btn btn_primary notifications__btn">заполнить</button>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              Роман Васильев подписался на вас <a href="#" class="notifications__link fw_600">Подписаться в ответ</a>
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
          </div>
        </section>


        <section class="lm-m-v2-notifications-item">
          <div class="notifications-avatar-wrap btn btn_round">
            <img class="notifications-avatar">
            <i class="notifications-avatar-icon"></i>
          </div>
          <div class="notifications-info-wrap ml_3">
            <div class="notifications__text">
              <a href="#" class="notifications__link fw_600">Роман Васильев</a> предлагает вам сотрудничество
            </div>
            <div class="notifications__date mt_2">27 июня 2019</div>
            <button class="btn btn_primary notifications__btn">принять</button>
            <button class="notifications__btn notifications__btn_disabled">отклонить</button>
          </div>
        </section>
      </div>
    </div>

    <div class="lm-m-v2-notifications-body-isEmpty" v-if="!isEmpty">
      Новых уведомлений нет
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        count: 'notification/getCountNotificationsOnCatalog',
        loading: 'notification/getNotificationsLoadingOnCatalog',
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      }
    },
  }
</script>

<style lang="sass" scoped>
  .lm-m-page .lm-m-page--head
    border-radius: 4px
    margin-bottom: 8px

    span
      font-size: 18px
      font-weight: 600
      font-style: normal
      font-stretch: normal
      line-height: 1.33
      letter-spacing: 0.25px
      color: #282a36
  //$lm-gray-1

</style>
