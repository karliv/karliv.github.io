import Vue from 'vue'
import _ from 'lodash'
import { has } from '@utils'
import { vueSet } from 'vue-deepset'

export function SET_SHOW_USER_LOADING (state, value) {
  state.show.loading = value
}

export function SET_SHOW_USER_ERROR (state, value) {
  state.show.error = value
}

export function SET_SHOW_USER_DATA (state, { data }) {
  state.show.data = data
}

export function SET_SHOW_USER_DATA_PORTFOLIO_PUBLISH (state, value) {
  if (has(state.show.data, 'portfolio.data.publish')) {
    state.show.data.portfolio.data.publish = value
  }
}

export function SET_FIELD_SHOW_USER_DATA (state, { key, value }) {
  vueSet(state.show.data, key, value)
}

export function SET_SOURCES (state, data) {
  Object.assign(state.sources, data)
}

/** START USERS */
export function SET_USERS_LOADING (state, value) {
  state.users.loading = value
}

export function SET_USERS_ERROR (state, value) {
  state.users.error = value
}

export function SET_USERS_INFINITE_DISABLED (state, value) {
  state.users.infiniteDisabled = value
}

export function SET_USERS_INITIALIZED (state, value) {
  state.users.initialized = value
}

export function SET_USERS_DATA (state, { data, total, offset, replace }) {
  Object.assign(state.users, {
    total,
    offset,
    data: (replace) ? (data) : _.uniqBy([...state.users.data, ...data], 'id')
  })
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.users.filter, {
    ...fields
  })
}

export function CLEAR_USERS (state) {
  Object.assign(state.users, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_USERS_DATA (state, { id, key, value }) {
  let indexOf = state.users.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.users.data[indexOf], key, value)
}
/** END USERS */

/* SETTINGS */
export function SET_SETTINGS_FIELDS (state, { data }) {
  Object.assign(state.settings.fields, data)
}

export function SET_SETTINGS_SOURCES (state, data) {
  Object.assign(state.settings.sources, data)
}
/* END SETTINGS */

/* FOLLOWINGS */
export function SET_FOLLOWINGS_LOADING (state, value) {
  state.followings.loading = value
}

export function SET_FOLLOWINGS_ERROR (state, value) {
  state.followings.error = value
}

export function SET_FOLLOWINGS_DATA (state, { data, count, offset, replace }) {
  Object.assign(state.followings, {
    count,
    offset,
    data: (replace) ? (data) : [...state.followings.data, ...data]
  })
}

export function CLEAR_FOLLOWINGS (state) {
  Object.assign(state.followings, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: true
  })
}

export function SET_FOLLOWINGS_INITIALIZED (state, value) {
  state.followings.initialized = value
}

export function SET_FOLLOWINGS_INFINITE_DISABLED (state, value) {
  state.followings.infiniteDisabled = value
}

export function SET_FOLLOWING_FIELD_BY_ID (state, { id, key, value }) {
  let folder = _.find(state.followings.data, (d) => d['id'] === id)
  if (folder) _.set(folder, key, value)
}

export function CREATE_FOLLOWING (state, data) {
  let { count, offset } = state.followings

  state.followings.data.unshift(data)
  Object.assign(state.followings, {
    count: ++count,
    offset: ++offset
  })
}

export function DESTROY_FOLLOWING_BY_ID (state, id) {
  let indexOf = _.findIndex(state.followings.data, (d) => d['id'] === id)
  if (indexOf > -1) {
    Vue.delete(state.followings.data, indexOf)

    const count = (state.followings.count > 0) ? --state.followings.count : 0
    const offset = (state.followings.offset > 0) ? --state.followings.offset : 0

    Vue.set(state.followings, 'count', count)
    Vue.set(state.followings, 'offset', offset)
  }
}
/* END FOLLOWINGS */

/* FOLLOWERS */
export function SET_FOLLOWERS_LOADING (state, value) {
  state.followers.loading = value
}

export function SET_FOLLOWERS_ERROR (state, value) {
  state.followers.error = value
}

export function SET_FOLLOWERS_DATA (state, { data, count, offset, replace }) {
  Object.assign(state.followers, {
    count,
    offset,
    data: (replace) ? (data) : [...state.followers.data, ...data]
  })
}

export function CLEAR_FOLLOWERS (state) {
  Object.assign(state.followers, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: true
  })
}

export function SET_FOLLOWERS_INITIALIZED (state, value) {
  state.followers.initialized = value
}

export function SET_FOLLOWERS_INFINITE_DISABLED (state, value) {
  state.followers.infiniteDisabled = value
}

export function SET_FOLLOWER_FIELD_BY_ID (state, { id, key, value }) {
  let folder = _.find(state.followers.data, (d) => d['id'] === id)
  if (folder) _.set(folder, key, value)
}

export function DESTROY_FOLLOWER_BY_ID (state, id) {
  let indexOf = _.findIndex(state.followers.data, (d) => d['id'] === id)
  if (indexOf > -1) {
    Vue.delete(state.followers.data, indexOf)

    const count = (state.followers.count > 0) ? --state.followers.count : 0
    const offset = (state.followers.offset > 0) ? --state.followers.offset : 0

    Vue.set(state.followers, 'count', count)
    Vue.set(state.followers, 'offset', offset)
  }
}
/* END FOLLOWERS */

/* PARTNERS */
export function SET_PARTNERS_LOADING (state, value) {
  state.partners.loading = value
}

export function SET_PARTNERS_ERROR (state, value) {
  state.partners.error = value
}

export function SET_PARTNERS_DATA (state, { data, count, offset, replace }) {
  Object.assign(state.partners, {
    count,
    offset,
    data: (replace) ? (data) : [...state.partners.data, ...data]
  })
}

export function CLEAR_PARTNERS (state) {
  Object.assign(state.partners, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: true
  })
}

export function SET_PARTNERS_INITIALIZED (state, value) {
  state.partners.initialized = value
}

export function SET_PARTNERS_INFINITE_DISABLED (state, value) {
  state.partners.infiniteDisabled = value
}

export function SET_PARTNER_FIELD_BY_ID (state, { id, key, value }) {
  let folder = _.find(state.partners.data, (d) => d['id'] === id)
  if (folder) _.set(folder, key, value)
}

export function CREATE_PARTNER (state, data) {
  let { count, offset } = state.partners

  state.partners.data.unshift(data)
  Object.assign(state.partners, {
    count: ++count,
    offset: ++offset
  })
}

export function DESTROY_PARTNER_BY_ID (state, id) {
  let indexOf = _.findIndex(state.partners.data, (d) => d['id'] === id)
  if (indexOf > -1) {
    Vue.delete(state.partners.data, indexOf)

    const count = (state.partners.count > 0) ? --state.partners.count : 0
    const offset = (state.partners.offset > 0) ? --state.partners.offset : 0

    Vue.set(state.partners, 'count', count)
    Vue.set(state.partners, 'offset', offset)
  }
}
/* END PARTNERS */

export default {
  CLEAR_USERS,
  SET_SOURCES,
  CLEAR_PARTNERS,
  SET_USERS_DATA,
  CREATE_PARTNER,
  CLEAR_FOLLOWERS,
  SET_USERS_ERROR,
  CLEAR_FOLLOWINGS,
  CREATE_FOLLOWING,
  SET_USERS_LOADING,
  SET_PARTNERS_DATA,
  SET_SHOW_USER_DATA,
  SET_FOLLOWERS_DATA,
  SET_PARTNERS_ERROR,
  SET_SHOW_USER_ERROR,
  SET_FOLLOWINGS_DATA,
  SET_FOLLOWERS_ERROR,
  SET_SETTINGS_FIELDS,
  SET_SETTINGS_SOURCES,
  SET_FOLLOWINGS_ERROR,
  SET_PARTNERS_LOADING,
  SET_FIELD_USERS_DATA,
  SET_USERS_INITIALIZED,
  SET_SHOW_USER_LOADING,
  SET_FOLLOWERS_LOADING,
  DESTROY_PARTNER_BY_ID,
  SET_FOLLOWINGS_LOADING,
  DESTROY_FOLLOWER_BY_ID,
  DESTROY_FOLLOWING_BY_ID,
  SET_PARTNER_FIELD_BY_ID,
  SET_FIELD_SHOW_USER_DATA,
  SET_FOLLOWER_FIELD_BY_ID,
  SET_PARTNERS_INITIALIZED,
  SET_FOLLOWING_FIELD_BY_ID,
  SET_FOLLOWERS_INITIALIZED,
  SET_FIELDS_FILTER_CATALOG,
  SET_FOLLOWINGS_INITIALIZED,
  SET_USERS_INFINITE_DISABLED,
  SET_PARTNERS_INFINITE_DISABLED,
  SET_FOLLOWERS_INFINITE_DISABLED,
  SET_FOLLOWINGS_INFINITE_DISABLED,
  SET_SHOW_USER_DATA_PORTFOLIO_PUBLISH
}
