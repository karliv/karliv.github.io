import Auth from '~auth'
import { has, isBrowser } from '@utils'

export default async function (to, from, next) {
  const auth = new Auth()

  try {
    const token = await auth.getTokenPromise()

    if (token) {
      if (isBrowser && has(to.query, 'from') && to.query.from === 'svobodnoekino') {
        window.location.href = `${process.env.FREEKINO_URL}/?ak=${token}`

        return
      }

      next('/')
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    next('/')
  }
}
