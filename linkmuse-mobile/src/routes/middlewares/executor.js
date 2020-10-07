import Auth from '~auth'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const role = await auth.getRolePromise()

    if (role === 'executor') {
      next()
    } else {
      next('/')
    }
  } catch (error) {
    console.log(error)
    next('/')
  }
}
