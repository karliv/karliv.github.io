
const DEFAULT_STATUS_CLASS = 'other'

class Project {
  getStatusClassByCategoryId (categoryId) {
    let classes = {
      1: 'full-film',
      2: 'film',
      3: 'serial',
      4: 'ad_verti_sing',
      5: 'voice',
      6: 'participation-tv',
      7: 'participation-crowd',
      8: 'pokaz',
      9: 'filming',
      10: 'event',
      11: 'other',
      12: 'clips',
      13: 'videos'
    }

    let item = classes[categoryId]
    return item || DEFAULT_STATUS_CLASS
  }
}

export default new Project
