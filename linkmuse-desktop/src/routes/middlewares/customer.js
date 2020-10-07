import Auth from '~auth'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const role = await auth.getRolePromise()

    if (role === 'customer') {
      next()
    } else {
      next('/')
      window.location.replace('/')
    }
  } catch (error) {
    console.log(error)
    next()
  }
}
