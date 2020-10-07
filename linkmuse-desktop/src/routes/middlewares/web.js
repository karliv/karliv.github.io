import cookies from 'js-cookie'

export default async function (to, from, next) {

  let { query: { ref } } = to
  if (ref) {
    cookies.set('referral', ref)
  }

  next()
}
