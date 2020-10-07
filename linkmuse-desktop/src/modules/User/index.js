class User {
  constructor () {
    this.facebookRegex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
    this.youtubeRegex = /((http|https):\/\/|)(www\.|)youtube\.com\/(channel\/|user\/)[a-zA-Z0-9\-]{1,}/
    this.vkRegex = /(http:\/\/|https:\/\/)?(www.)?(vk\.com|vkontakte\.ru)\/(id(\d{9})|[a-zA-Z0-9_.]+)/
    this.instagramRegex = /(https?:\/\/)?([\w\.]*)instagram\.com\/([a-zA-Z0-9_-]+){1,}/
    this.okRegex = /(https?:\/\/)?([\w\.]*)ok\.ru\/(?:profile\/)?([a-zA-Z0-9_-]+){1,}/
  }

  validVk (val) {
    let loc = this.getLocation(val)
    if (val) {
      let matches = this.getMathes(val, this.vkRegex)
      if (matches) {
        return loc.pathname.slice(1)
      } else {
        loc.hostname = 'vk.com'
        loc.pathname = '/' + val
        let matchesSecond = this.getMathes(loc.href, this.vkRegex)
        if (matchesSecond) {
          loc.hostname = ''
          return loc.pathname.slice(1)
        }
      }
    }
  }

  validFacebook (val) {
    let loc = this.getLocation(val)
    if (val) {
      let matches = this.getMathes(val, this.facebookRegex)
      if (matches) {
        return loc.pathname.slice(1)
      } else {
        loc.hostname = 'facebook.com'
        loc.pathname = '/' + val
        let matchesSecond = this.getMathes(loc.href, this.facebookRegex)
        if (matchesSecond) {
          loc.hostname = ''
          return loc.pathname.slice(1)
        }
      }
    }
  }

  validInstagram (val) {
    let loc = this.getLocation(val)
    if (val) {
      let matches = this.getMathes(val, this.instagramRegex)
      if (matches) {
        return loc.pathname.slice(1)
      } else {
        loc.hostname = 'instagram.com'
        loc.pathname = '/' + val
        let matchesSecond = this.getMathes(loc.href, this.instagramRegex)
        if (matchesSecond) {
          loc.hostname = ''
          return loc.pathname.slice(1)
        }
      }
    }
  }

  validYoutube (val) {
    let loc = this.getLocation(val)
    if (val) {
      let matches = this.getMathes(loc.href, this.youtubeRegex)
      if (matches) {
        loc.hostname = ''
        return loc.pathname.slice(1)
      } else {
        loc.hostname = 'youtube.com'
        loc.pathname = '/' + val
        let matchesSecond = this.getMathes(loc.href, this.youtubeRegex)
        if (matchesSecond) {
          loc.hostname = ''
          return loc.pathname.slice(1)
        } else {
          if (val.indexOf('user/') !== 0) {
            if (val !== 'user/') {
              loc.pathname = '/user/' + val
            }
            let matchesThird = this.getMathes(loc.href, this.youtubeRegex)
            if (matchesThird) {
              return loc.pathname.slice(1)
            }
            return false
          }
          return false
        }
      }
    }
  }

  getMathes (href, regex) {
    return href.match(regex)
  }

  getLocation (href) {
    let loc = document.createElement('a')

    loc.href = href
    return loc
  };
}

export default new User()
