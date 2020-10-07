let getSelection
let saveSelection
let restoreSelection
let replaceSelection

getSelection = () => {
  if (window.getSelection) {
    var sel = window.getSelection()
    var ranges = []
    if (sel.rangeCount) {
      var length = sel.rangeCount
      for (var i = 0; i < length; i++) {
        ranges.push(sel.getRangeAt(i))
      }
    }
    return ranges
  } else if (document.selection && document.selection.createRange) {
    var sel = document.selection
    return (sel.type.toLowerCase() !== 'none') ? sel.createRange() : null
  }
}

restoreSelection = (selection) => {
  if (window.getSelection) {
    var sel = window.getSelection()
    sel.removeAllRanges()
    var length = selection.length
    for (var i = 0; i < length; i++) {
      sel.addRange(selection[i])
    }
  } else if (document.selection && document.selection.createRange) {
    if (selection) {
      selection.select()
    }
  }
}

replaceSelection = (content) => {
  if (window.getSelection) {
    var range; var sel = window.getSelection()
    var node = typeof content === 'string' ? document.createTextNode(content) : content
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0)
      range.deleteContents()
      range.insertNode(document.createTextNode(' '))
      range.insertNode(node)
      range.setStart(node, 0)

      window.setTimeout(function () {
        range = document.createRange()
        range.setStartAfter(node)
        range.collapse(true)
        sel.removeAllRanges()
        sel.addRange(range)
      }, 0)
    }
  } else if (document.selection && document.selection.createRange) {
    var range = document.selection.createRange()
    if (typeof content === 'string') {
      range.text = content
    } else {
      range.pasteHTML(content.outerHTML)
    }
  }
}

saveSelection = () => {
  if (window.getSelection) {
    const sel = window.getSelection()
    const ranges = []

    if (sel.rangeCount) {
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        ranges.push(sel.getRangeAt(i))
      }
    }
    return ranges
  } else if (document.selection && document.selection.createRange) {
    const sel = document.selection
    return (sel.type.toLowerCase() !== 'none') ? sel.createRange() : null
  }
}

export default new class {
  escapeRegex (str) {
    return (`${str}`).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
  }
  htmlEntities (str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }
  restoreSelection (...args) {
    return restoreSelection.call(null, ...args)
  }
  getSelection (...args) {
    return getSelection.call(null, ...args)
  }
  replaceSelection (...args) {
    return replaceSelection.call(null, ...args)
  }
  saveSelection (...args) {
    return saveSelection.call(null, ...args)
  }
}()
