import Vue from 'vue'
import VueModalRouter from 'vue-modal-router'

import CompanyCreate from '@components/User/Modals/CompanyCreate.vue'
import UserPhoneAttach from '@components/User/Modals/PhoneAttach.vue'
import UserEmailAttach from '@components/User/Modals/EmailAttach.vue'
import ProfessionCreate from '@components/User/Modals/ProfessionCreate.vue'
import SuccessCreateBoard from '@components/UI/Modals/SuccessCreateBoard.vue'
import UserCheckListSnaps from '@components/User/Modals/CheckLists/Snaps.vue'
import ResponseCreate from '@components/Board/Casting/Modals/ResponseCreate.vue'
import UserCheckListPortfolio from '@components/User/Modals/CheckLists/Portfolio.vue'
import UserSettingsPhoneAttach from '@components/User/Modals/SettingsPhoneAttach.vue'
import UserSettingsPhoneDetach from '@components/User/Modals/SettingsPhoneDetach.vue'

Vue.use(VueModalRouter, {
  delay: 300,
  model: 'value'
})

export function createModalRouter () {
  return new VueModalRouter({
    'users.phone.attach': UserPhoneAttach,
    'users.email.attach': UserEmailAttach,
    'users.companies.create': CompanyCreate,
    'success.board.create': SuccessCreateBoard,
    'users.checklists.snaps': UserCheckListSnaps,
    'users.professions.create': ProfessionCreate,
    'board.castings.responses.create': ResponseCreate,
    'users.checklists.portfolio': UserCheckListPortfolio,
    'users.settings.phone.attach': UserSettingsPhoneAttach,
    'users.settings.phone.detach': UserSettingsPhoneDetach
  })
}
