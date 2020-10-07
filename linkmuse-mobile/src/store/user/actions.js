export const clearUsers = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_USERS')
      resolve && resolve()
    } catch (e) {
      console.log(e)
      reject && reject()
    }
  })
}

export const setFieldUsersData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_USERS_DATA', { id, key, value })
    resolve()
  })
}

export const fetchUsers = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 48 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_USERS_LOADING', true)
    commit('SET_USERS_INFINITE_DISABLED', true)

    return $api.get(`/api/v2/users`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_USERS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_USERS_LOADING', false)
      commit('SET_USERS_ERROR', false)
      commit('SET_USERS_INFINITE_DISABLED', (!next))

      resolve && resolve(total)
    }, (error) => {
      commit('SET_USERS_LOADING', false)
      commit('SET_USERS_ERROR', true)
      commit('SET_USERS_INFINITE_DISABLED', true)

      reject && reject(error)
    })
  })
}

export const getUserByUsername = ({ commit, state, rootState: { $api } }, { username, include }) => {
  return new Promise((resolve, reject) => {
    commit('SET_SHOW_USER_LOADING', true)

    return $api.get(`api/v3/users/${username}`, { include }).then((response) => {
      let { data: { data } } = response

      commit('SET_SHOW_USER_DATA', { data })
      commit('SET_SHOW_USER_LOADING', false)
      commit('SET_SHOW_USER_ERROR', false)
      resolve && resolve()
    }, (error) => {
      commit('SET_SHOW_USER_LOADING', false)
      commit('SET_SHOW_USER_ERROR', true)
      reject && reject(error)
    })
  })
}

export function setFieldShowUserData ({ commit }, { key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_SHOW_USER_DATA', { key, value })
    resolve && resolve()
  })
}

export const setInitializedUsersData = ({ commit }, value) => {
  return new Promise((resolve, reject) => {
    try {
      commit('SET_USERS_INITIALIZED', value)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

/* SETTINGS */
export const getFieldsSettings = ({ commit, state, rootState: { $api } }) => {
  return new Promise((resolve, reject) => {
    return $api.get('api/v2/settings').then((response) => {
      const { data: { data } } = response
      commit('SET_SETTINGS_FIELDS', { data })
      resolve && resolve()
    }, (response) => {
      reject && reject()
    })
  })
}

export const getSourcesSettings = ({ commit, state, rootState: { $api } }) => {
  return new Promise((resolve, reject) => {
    return $api.get('api/v2/settings/sources').then((response) => {
      const { data: { data } } = response
      commit('SET_SETTINGS_SOURCES', { ...data, initialized: true })
      resolve && resolve()
    }, (response) => {
      reject && reject()
    })
  })
}
/* END SETTINGS */

/* FOLLOWINGS */
export const getUserFollowingsByUsername = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FOLLOWINGS_LOADING', true)
    commit('SET_FOLLOWINGS_INITIALIZED', true)
    commit('SET_FOLLOWINGS_INFINITE_DISABLED', true)

    return $api.get(`api/v1/users/${username}/following`, { ...fields, offset, limit }).then((response) => {
      let { data: { data, meta: { count, new_offset } } } = response

      commit('SET_FOLLOWINGS_DATA', { data, count, offset: new_offset, replace: (offset === 0) })
      commit('SET_FOLLOWINGS_LOADING', false)
      commit('SET_FOLLOWINGS_ERROR', false)
      commit('SET_FOLLOWINGS_INFINITE_DISABLED', (new_offset >= count))
      resolve && resolve((new_offset >= count))
    }, (response) => {
      commit('SET_FOLLOWINGS_LOADING', false)
      commit('SET_FOLLOWINGS_ERROR', true)
      commit('SET_FOLLOWINGS_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export function setFollowingFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_FOLLOWING_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export function destroyFollowingById ({ commit }, id) {
  return new Promise((resolve, reject) => {
    try {
      commit('DESTROY_FOLLOWING_BY_ID', id)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export function createFollowing ({ commit }, data) {
  return new Promise((resolve, reject) => {
    try {
      commit('CREATE_FOLLOWING', data)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const clearFollowings = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_FOLLOWINGS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}
/* END FOLLOWINGS */

/* FOLLOWERS */
export const getUserFollowersByUsername = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FOLLOWERS_LOADING', true)
    commit('SET_FOLLOWERS_INITIALIZED', true)
    commit('SET_FOLLOWERS_INFINITE_DISABLED', true)

    return $api.get(`api/v1/users/${username}/followers`, { ...fields, offset, limit }).then((response) => {
      let { data: { data, meta: { count, new_offset } } } = response

      commit('SET_FOLLOWERS_DATA', { data, count, offset: new_offset, replace: (offset === 0) })
      commit('SET_FOLLOWERS_LOADING', false)
      commit('SET_FOLLOWERS_ERROR', false)
      commit('SET_FOLLOWERS_INFINITE_DISABLED', (new_offset >= count))
      resolve && resolve((new_offset >= count))
    }, (response) => {
      commit('SET_FOLLOWERS_LOADING', false)
      commit('SET_FOLLOWERS_ERROR', true)
      commit('SET_FOLLOWERS_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export function setFollowerFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_FOLLOWER_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export function destroyFollowerById ({ commit }, id) {
  return new Promise((resolve, reject) => {
    try {
      commit('DESTROY_FOLLOWER_BY_ID', id)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const clearFollowers = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_FOLLOWERS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}
/* END FOLLOWERS */

/* PARTNERS */
export const getUserPartnersByUsername = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_PARTNERS_LOADING', true)
    commit('SET_PARTNERS_INITIALIZED', true)
    commit('SET_PARTNERS_INFINITE_DISABLED', true)

    return $api.get(`api/v1/users/${username}/partners`, { offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_PARTNERS_DATA', { data, count: total, offset: next, replace: (offset === 0) })
      commit('SET_PARTNERS_LOADING', false)
      commit('SET_PARTNERS_ERROR', false)
      commit('SET_PARTNERS_INFINITE_DISABLED', (!next))
      resolve && resolve((!next))
    }, (response) => {
      commit('SET_PARTNERS_LOADING', false)
      commit('SET_PARTNERS_ERROR', true)
      commit('SET_PARTNERS_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export function setPartnerFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_PARTNER_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export function destroyPartnerById ({ commit }, id) {
  return new Promise((resolve, reject) => {
    try {
      commit('DESTROY_PARTNER_BY_ID', id)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export function createPartner ({ commit }, data) {
  return new Promise((resolve, reject) => {
    try {
      commit('CREATE_PARTNER', data)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const clearPartners = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_PARTNERS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}
/* END PARTNERS */

export default {
  fetchUsers,
  clearUsers,
  clearPartners,
  createPartner,
  clearFollowers,
  clearFollowings,
  createFollowing,
  setFieldUsersData,
  getUserByUsername,
  getFieldsSettings,
  getSourcesSettings,
  destroyPartnerById,
  setPartnerFiledById,
  destroyFollowerById,
  setFollowerFiledById,
  destroyFollowingById,
  setFieldShowUserData,
  setFollowingFiledById,
  setInitializedUsersData,
  getUserPartnersByUsername,
  getUserFollowersByUsername,
  getUserFollowingsByUsername
}
