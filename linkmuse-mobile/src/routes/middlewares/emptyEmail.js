import Auth from '~auth'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const hasEmail = await auth.getHasEmailPromise()

    if (hasEmail === 'false') {
      next('/profile/empty-email')
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    next('/')
  }
}
