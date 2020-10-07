import { MODEL } from '@modules/User/Profession/Enums/ProfessionName'

class Profession {
  constructor () {

  }

  supportSnaps (profession) {
    return [MODEL].includes(profession)
  }
}

export default new Profession()
