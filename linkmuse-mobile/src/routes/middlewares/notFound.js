import Auth from '~auth'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const token = await auth.getTokenPromise()
    const user = await auth.getAuthUser()

    if (token && (user && user.hasOwnProperty('username'))) {
      next(`/${user.username}`)
    } else next('/')
  } catch (error) {
    console.log(error)
    next('/')
  }
}
