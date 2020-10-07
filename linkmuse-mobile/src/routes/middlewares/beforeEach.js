export default function (to, from, next) {
  console.log('beforeEach' + to, from)
  next()
}
