<template>
  <div class="col-xs-3">
    <template v-if="(users.length === 0)">
      <div class="folders-list--item null">
        <router-link target="_blank" :to="{ name: 'talents.index' }" class="folders-list--item--add">
          <i class="icon-plus"></i>
          <span>Добавить таланта</span>
        </router-link>

        <i class="icon-more"  @click.stop.prevent>
          <div class="actions-item">
            <ul>
              <template v-if="(isArchived === false)">
                <li><a href="javascript:void(0)" @click="_handleClickArchivedFolder">Архивировать</a></li>
                <template v-if="(count)">
                  <li><a href="javascript:void(0)" @click="_handleClickMessageFolder">Написать всем</a></li>
                </template>
              </template>
              <li><a href="javascript:void(0)" @click="_handleClickEditFolder">Редактировать</a></li>
              <template v-if="(isArchived === true)">
                <li><a href="javascript:void(0)" @click="_handleClickRestoreFolder">Восстановить</a></li>
                <li><a href="javascript:void(0)" @click="_handleClickDestroyFolder">Удалить</a></li>
              </template>
            </ul>
          </div>
        </i>

        <div class="folders-list--item-bottom">
          <router-link :to="{ name: 'folders.show', params: { id } }" :title="folder.name" class="folders-list--item--name">{{ folder.name | truncate(20) }}</router-link>
          <span class="folders-list--item--count">Нет пользователей</span>
        </div>
      </div>
    </template>

    <template v-if="(users.length > 0)">
      <router-link :to="{ name: 'folders.show', params: { id } }" :class="['folders-list--item', classCard]">

        <template v-if="(users.length === 1)">
          <div class="folders-list--item--full" v-for="user in users">
            <img :src="user.avatar" :alt="user.name">
          </div>
        </template>

        <template v-if="(users.length === 2)">
          <div>
            <div class="folders-list--item--left" v-for="user in users">
              <img :src="user.avatar" :alt="user.name">
            </div>
            <div class="clr"></div>
          </div>
        </template>

        <template v-if="(users.length >= 3)">
          <div class="folders-list--item-left">
            <img :src="users[0].avatar" :alt="users[0].name">
          </div>
          <div class="folders-list--item-right">
            <div class="folders-list--item-right-top">
              <img :src="users[1].avatar" :alt="users[1].name">
            </div>
            <div class="folders-list--item--right-bottom">
              <img :src="users[2].avatar" :alt="users[2].name">
            </div>
          </div>
          <div class="clr"></div>
        </template>

        <i class="icon-more"  @click.stop.prevent>
          <div class="actions-item">
            <ul>
              <template v-if="(isArchived === false)">
                <li><object><a href="javascript:void(0)" @click="_handleClickArchivedFolder">Архивировать</a></object></li>
                <li><object><a href="javascript:void(0)" @click="_handleClickMessageFolder">Написать всем</a></object></li>
              </template>
              <li><object><a href="javascript:void(0)" @click="_handleClickEditFolder">Редактировать</a></object></li>
              <template v-if="(isArchived === true)">
                <li><object><a href="javascript:void(0)" @click="_handleClickRestoreFolder">Восстановить</a></object></li>
                <li><object><a href="javascript:void(0)" @click="_handleClickDestroyFolder">Удалить</a></object></li>
              </template>
            </ul>
          </div>
        </i>

        <div class="folders-list--item-bottom">
          <div class="folders-list--item--name">{{ folder.name | truncate(20) }}</div>
          <span class="folders-list--item--count">{{ $pluralize(count, ['человек', 'человека', 'человек']) }}</span>
        </div>
      </router-link>
    </template>

  </div>
</template>

<script>
  export default {
    props: {
      folder: {
        type: Object,
        required: true
      }
    },
    computed: {
      id () {
        return this.folder['folder_id']
      },
      users () {
        return this.folder.users
      },
      count () {
        return Number(this.folder.users.length)
      },
      classCard () {
        switch (true) {
          case (this.count === 1):
            return 'one'
          case (this.count === 2):
            return 'two'
          case (this.count >= 3):
            return 'three'
          default:
            return 'null'
        }
      },
      isArchived () {
        return Boolean(this.folder['archived'])
      }
    },
    methods: {
      _handleClickArchivedFolder () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'архивировать',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите архивировать подборку?'
        }).then(() => {
          this.$emit('archived', this.id)
        }).catch(() => {})
      },
      _handleClickMessageFolder () {
        this.$emit('messages', this.id)
      },
      _handleClickEditFolder () {
        this.$emit('edit', this.id)
      },
      _handleClickRestoreFolder () {
        this.$emit('restore', this.id)
      },
      _handleClickDestroyFolder () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить подборку?'
        }).then(() => {
          this.$emit('destroy', this.id)
        }).catch(() => {})
      }
    }
  }
</script>

<style scoped>

</style>
