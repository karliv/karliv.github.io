const round = (value, decimals = 0) => {
  if (!value) return value
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

export default round
