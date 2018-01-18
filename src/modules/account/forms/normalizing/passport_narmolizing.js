const normalizePassport = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 4) {
      return onlyNums + '-'
    }
  }
  if (onlyNums.length <= 4) {
    return onlyNums
  }
  return onlyNums.slice(0, 4) + '-' + onlyNums.slice(4, 10)
}

export default normalizePassport
