import { has } from '@utils'
import { COMPANY, AGENT, PRODUCER, DIRECTOR, CASTING_DIRECTOR, PHOTOGRAPHER } from './Enums/Customer/Statuses'
import { ACTOR,
  MODEL,
  MUSICIAN,
  DANCER,
  LEADING,
  PHOTOGRAPHER as PHOTOGRAPHER_EXECUTOR,
  DESIGNER,
  VISAGISTE,
  CIRCUS_ARTIST,
  FILM_CREW,
  COMPOSER } from './Enums/Executor/Professions'

import { MALE, FEMALE } from './Enums/Sex'

const DEFAULT_ICON_CLASS = 'test'

export const getQualityThumbnail = (item) => {
  if (has(item, 'size.width') && item.size.width < 300 && has(item, 'data.path_273_resize')) {
    item.original = item.data['path']
    item.thumbnail = item.data['path_273_resize']
  }

  if (has(item, 'data.cover_image_orig')) {
    item.thumbnail = item.data['cover_image_orig']
  }

  if (has(item, 'data.cover_image_blur')) {
    item.data['path_blur'] = item.data['cover_image_blur']
  }

  if (has(item, 'type') && item.type.includes('photo') && has(item, 'paths')) {
    let size = 0
    let thumbnail = item.paths.original

    Object.keys(item.paths).forEach(key => {
      if (key.indexOf('x') > -1) {
        let thumbSize = parseInt(key.split('x')[0])

        if (thumbSize > size) {
          thumbnail = item.paths[key]
          size = thumbSize
        }
      }
    })

    item.thumbnail = thumbnail
    item.original = item.paths.original
  }

  return item
}

class User {
  constructor () {
    this.facebookRegex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
    this.youtubeRegex = /((http|https):\/\/|)(www\.|)youtube\.com\/(channel\/|user\/)[a-zA-Z0-9\-]{1,}/
    this.vkRegex = /(http:\/\/|https:\/\/)?(www.)?(vk\.com|vkontakte\.ru)\/(id(\d{9})|[a-zA-Z0-9_.]+)/
    this.instagramRegex = /(https?:\/\/)?([\w\.]*)instagram\.com\/([a-zA-Z0-9_-]+){1,}/
    this.okRegex = /(https?:\/\/)?([\w\.]*)ok\.ru\/(?:profile\/)?([a-zA-Z0-9_-]+){1,}/

    this.customer = {
      icons: {
        [COMPANY]: 'lm-m-role-icon-company',
        [AGENT]: 'lm-m-role-icon-agent',
        [PRODUCER]: 'lm-m-role-icon-producer',
        [DIRECTOR]: 'lm-m-role-icon-director',
        [CASTING_DIRECTOR]: 'lm-m-role-icon-casting-director',
        [PHOTOGRAPHER]: 'lm-m-role-icon-photographer'
      }
    }

    this.executor = {
      icons: {
        [ACTOR]: 'lm-m-role-icon-actor',
        [MODEL]: 'lm-m-role-icon-model',
        [MUSICIAN]: 'lm-m-role-icon-musician',
        [DANCER]: 'lm-m-role-icon-dancer',
        [LEADING]: 'lm-m-role-icon-leading',
        [PHOTOGRAPHER_EXECUTOR]: 'lm-m-role-icon-photographer-executor',
        [DESIGNER]: 'lm-m-role-icon-designer',
        [VISAGISTE]: 'lm-m-role-icon-visagiste',
        [CIRCUS_ARTIST]: 'lm-m-role-icon-circus-artist',
        [FILM_CREW]: 'lm-m-role-icon-film-crew',
        [COMPOSER]: 'lm-m-role-icon-composer'
      }
    }

    this.sex = {
      [MALE]: 'male',
      [FEMALE]: 'female'
    }
  }

  getIconClassByCustomerStatus (status) {
    return this.customer.icons[status] || DEFAULT_ICON_CLASS
  }

  getIconClassByExecutorProfession (status) {
    return this.executor.icons[status] || DEFAULT_ICON_CLASS
  }

  getAttributeSex (sex) {
    let attribute = this.sex[sex]
    return attribute || null
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
  }
}

export default new User()
