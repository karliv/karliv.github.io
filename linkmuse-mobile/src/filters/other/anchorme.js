import anchorme from 'anchorme'

const defaultOptions = {
  emails: true,
  urls: true,
  ips: false,
  files: true,
  attributes: [
    {
      name: 'target',
      value: '_blank'
    },
    {
      name: 'rel',
      value: 'nofollow noopener'
    }
  ]
}

const transform = (value, options) => {
  if (!value) return
  let rules = { ...defaultOptions, ...options }
  return anchorme(value, rules)
}

export default transform
