<template>
  <div :class="['lm-m-profile-user-info--line', { 'info-edit': (editing === true) }]">
    <div class="title">
      <div class="left">
        <span>Профессия</span>
      </div>
      <div class="right">
        <template v-if="(isCurrentUser && editing === false)">
          <i class="lm-icon-pencil" @click="_handleClickOpenEditMode"></i>
        </template>
        <template v-if="(isCurrentUser && editing === true)">
          <i class="lm-icon-eye" @click="_handleClickCloseEditMode"></i>
        </template>
      </div>
    </div>
    <template v-if="(editing === false)">
      <div class="lm-m-profile-user-profession-line">
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.actor')">
          <i class="actor"></i>
          <div class="right">
            <div class="profession-title">Актер</div>
            <template v-if="has(anketa, 'profession.actor.type-experience')">
              <div class="profession-desc">{{ anketa.profession.actor['type-experience'] }}</div>
            </template>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.model')">
          <i class="model"></i>
          <div class="right">
            <div class="profession-title">Модель</div>
            <template v-if="has(anketa, 'profession.model.type-experience')">
              <div class="profession-desc">{{ anketa.profession.model['type-experience'] }}</div>
            </template>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.musician')">
          <i class="musician"></i>
          <div class="right">
            <div class="profession-title">Музыкант</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.dancer')">
          <i class="dancer"></i>
          <div class="right">
            <div class="profession-title">Танцор</div>
            <template v-if="has(anketa, 'profession.dancer.type-experience')">
              <div class="profession-desc">{{ anketa.profession.dancer['type-experience'] }}</div>
            </template>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.leading')">
          <i class="leading"></i>
          <div class="right">
            <div class="profession-title">Ведущий</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.composer')">
          <i class="composer"></i>
          <div class="right">
            <div class="profession-title">Композитор</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.circus-artist')">
          <i class="circus-artist"></i>
          <div class="right">
            <div class="profession-title">Артист цирка</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.photographer')">
          <i class="photographer"></i>
          <div class="right">
            <div class="profession-title">Фотограф видеограф</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.visagiste')">
          <i class="visagiste"></i>
          <div class="right">
            <div class="profession-title">визажист стилист</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.designer')">
          <i class="designer"></i>
          <div class="right">
            <div class="profession-title">художник дизайнер</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
        <div class="lm-m-profile-user-profession-item" v-if="has(anketa, 'profession.film-crew')">
          <i class="film-crew"></i>
          <div class="right">
            <div class="profession-title">участник съемочной группы</div>
            <div class="profession-desc">&nbsp;</div>
          </div>
        </div>
      </div>
    </template>
    <div class="desc" v-if="(editing === true)">
        Чтобы отредактировать список профессий, <br>
        воспользуйтесь полной версией сайта (на пк)
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'

  export default {
    props: {
      isCurrentUser: {
        type: Boolean,
        default: false
      },
      anketa: {
        type: Object
      },
      rawAnketa: {
        type: Object
      }
    },
    data() {
     return {
       has,
       editing: false
     }
    },
    methods: {
      _handleClickOpenEditMode () {
        this.editing = true
      },
      _handleClickCloseEditMode () {
        this.editing = false
      },
    }
  }
</script>

<style scoped>

</style>
