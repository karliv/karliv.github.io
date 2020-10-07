import Cookies from 'universal-cookie'

export default function (context) {
  const cookies = new Cookies(context)

  return cookies
}
