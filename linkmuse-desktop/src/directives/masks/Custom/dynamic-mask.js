export default function dynamicMask (value, maskit, masks, tokens, custom = []) {
  if (custom.includes('phone')) {
    masks = masks.filter((e) => {
      return value.replace(/[+()#-]/g, "").search(e.replace(/[+()#-]/g, "")) === 0
    })
  } else {
    masks = masks.sort((a, b) => a.length - b.length)
  }

  return function (value, mask, masked = true) {
    if (custom.includes('email') && !masks.length) {
      return maskit(value, '*'.repeat(320), masked, tokens)
    }

    let i = 0
    while (i < masks.length) {
      let currentMask = masks[i]
      i++
      let nextMask = masks[i]
      if (! (nextMask && maskit(value, nextMask, true, tokens).length > currentMask.length) ) {
        return maskit(value, currentMask, masked, tokens)
      }
    }

    return maskit(value, '+###########', masked, tokens)
  }
}
