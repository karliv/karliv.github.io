const placeholder = (value, property) => {
  return (value === undefined || value === '' || value === null) ? property : value
}

export default placeholder
