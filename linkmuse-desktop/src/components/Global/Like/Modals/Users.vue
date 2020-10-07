<template>
  <modal v-model="modal.show" @hide="closeModal()" :footer="false" class="modal-callback-users modal-center" :title="title">
    <div class="users--list row">

      <a :href="user.href" target="_blank" :class="{ 'users--item': true, 'col-xs-3': true, 'users--item-hide': false }" v-for="user in modal.users.data">
        <img :src="user.avatar" :alt="user.name">
        <span class="name">{{ user.name }}</span>
      </a>

      <div class="pd-26 no-top" v-if="(modal.users.count === 0 && !modal.users.loading) || (modal.users.data.length === 0 && !modal.users.loading)">
        <span>Здесь пока пусто.</span>
      </div>

      <div class="pd-26 no-top" v-if="modal.users.data.length === 0 && modal.users.loading">
        <loader class="col-xs-12 pd-26"></loader>
      </div>
    </div>

    <a href="javascript:void(0)" class="read-more" v-if="(modal.users.offset < modal.users.count)" @click="fetchUsers()">
      <span v-if="modal.users.loading">Загрузка...</span>
      <span v-else>Загрузить еще</span>
    </a>

    <div class="clr"></div>
  </modal>
</template>

<script>

export default {
  data() {
    return {
      modal: {
        show: false,
        users: {
          data: [],
          offset: 0,
          count: 0,
          loading: false
        },
        params: null
      }
    }
  },
  created () {
    this.$root.$on('open-modal-users-likes', (params, users) => {
      this.modal.params = params;
      this.modal.users = users;

      this.$nextTick(() => {
        this.modal.show = true;
      });
    });
  },
  computed: {
    empty() {
      return (this.modal.users.count === 0 && !this.modal.users.loading) || (this.modal.users.data.length === 0 && !this.modal.users.loading);
    },
    title() {
      return `Оценили ${this.modal.users.count}`;
    }
  },
  methods: {
    fetchUsers() {

      if (!this.modal.params) return false;

      this.modal.users.loading = true;

      let params = {
        id: this.modal.params.id,
        type: this.modal.params.type,
        offset: this.modal.users.offset,
        limit: 24
      };

      this.$api.get('/api/v1/likes', params).then((response) => {

        let { data: { data, meta: { count, new_offset } } } = response

        data.forEach(item => this.modal.users.data.push(item));

        this.modal.users.count = new_offset;
        this.modal.users.offset = offset;

        this.modal.users.loading = false;

      }, (response) => {

        this.modal.users.loading = false;
        this.$root.showServerErrorToast();
        throw new Error("Error get uers likes post");
      });
    },
    closeModal() {
      this.modal = {
        show: false,
        users: {
          data: [],
          offset: 0,
          count: 0,
          loading: false
        }
      };
    },
  }
}
</script>
