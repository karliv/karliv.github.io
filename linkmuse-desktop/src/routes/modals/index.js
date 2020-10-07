import Vue from 'vue'
import VueModalRouter from 'vue-modal-router'

import PartnersUser from '@components/User/Modals/Partners.vue'
import FollowersUser from '@components/User/Modals/Followers.vue'
import FollowingUser from '@components/User/Modals/Following.vue'
import CompanyCreate from '@components/User/Modals/CompanyCreate.vue'
import ProfessionCreate from '@components/User/Modals/ProfessionCreate.vue'
import ResponseCreate from '@components/Board/Casting/Modals/ResponseCreate.vue'

Vue.use(VueModalRouter, {
  delay: 300,
  model: 'value'
})

export function createModalRouter () {
  return new VueModalRouter({
    'partners.user': PartnersUser,
    'followers.user': FollowersUser,
    'following.user': FollowingUser,
    'users.companies.create': CompanyCreate,
    'users.professions.create': ProfessionCreate,
    'board.castings.responses.create': ResponseCreate
  })
}
