import Auth from '~auth'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const token = await auth.getTokenPromise()

    if (token) {
      next()
    } else {
      next('/login')
    }
  } catch (error) {
    console.log(error)
    next()
  }
}
