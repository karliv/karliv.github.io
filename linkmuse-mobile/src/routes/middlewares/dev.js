export default async (to, from, next) => {
  if (process.env.NODE_ENV === 'production') {
    next('/')
  } else {
    next()
  }
}
