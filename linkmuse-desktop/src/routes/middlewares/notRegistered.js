import Auth from '~auth'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const user = await auth.getAuthUserPromise()
    const isRegistered = await auth.getRegisteredPromise()

    if (user && isRegistered) {
      next('/')
    } else next()
  } catch (error) {
    console.log(error)
    next('/')
  }
}
