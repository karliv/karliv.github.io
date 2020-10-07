import _ from 'lodash'

export function SET_INTERVIEWS_CATEGORIES_LOADING (state, value) {
  state.categories.loading = value
}

export function SET_INTERVIEWS_CATEGORIES_ERROR (state, value) {
  state.categories.error = value
}

export function SET_INTERVIEWS_CATEGORIES_DATA (state, { data }) {
  state.categories.data = data
}

export function SET_ACTIVE_INTERVIEW_CATEGORY (state, value) {
  state.category = value
}

export function SET_INTERVIEWS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    state.lists.data = data
  } else state.lists.data.push(...data)
  state.lists.count = count
  state.lists.offset = offset
}

export function SET_INTERVIEWS_INFINITE_DISABLED (state, value) {
  state.lists.infiniteDisabled = value
}

export function SET_INTERVIEWS_LOADING (state, value) {
  state.lists.loading = value
}

export function SET_INTERVIEWS_ERROR (state, value) {
  state.lists.error = value
}

export function SET_INTERVIEW_ON_CATALOG_FIELD_BY_ID (state, { id, key, value }) {
  let interview = _.find(state.lists.data, (i) => i.id === id)
  if (interview) _.set(interview, key, value)
}

export function SET_SINGLE_INTERVIEW_DATA (state, value) {
  state.interview.data = value
}

export function SET_SINGLE_INTERVIEW_DATA_FIELDS (state, { key, value }) {
  _.set(state.interview.data, key, value)
}

export function SET_SINGLE_INTERVIEW_LOADING (state, value) {
  state.interview.loading = value
}

export function SET_SINGLE_INTERVIEW_ERROR (state, value) {
  state.interview.error = value
}

export default {
  SET_INTERVIEWS_CATEGORIES_DATA,
  SET_INTERVIEWS_CATEGORIES_ERROR,
  SET_INTERVIEWS_CATEGORIES_LOADING,
  SET_INTERVIEWS_DATA,
  SET_INTERVIEWS_ERROR,
  SET_INTERVIEWS_LOADING,
  SET_INTERVIEWS_INFINITE_DISABLED,
  SET_INTERVIEW_ON_CATALOG_FIELD_BY_ID,
  SET_SINGLE_INTERVIEW_DATA,
  SET_SINGLE_INTERVIEW_DATA_FIELDS,
  SET_SINGLE_INTERVIEW_LOADING,
  SET_SINGLE_INTERVIEW_ERROR
}
