import moment from 'moment'
import { name, messages } from 'vee-validate/dist/locale/ru'

const attributes = {
  email: 'email',
  phone: 'телефон',
  first_name: 'имя',
  last_name: 'фамилия',
  company_name: 'название компании'
}

const locale = {
  name,
  attributes,
  messages: {
    ...messages,
    dateAfter: (field, params) => `В поле ${field} должна быть дата от ${params[0]}}`,
    dateBefore: (field, params) => `В поле ${field} должна быть дата до ${params[0]}}`,
    minTarget: (field, [target, inclusion]) => `В поле ${field} должно быть число после ${inclusion ? 'или равная ' : ''}${target}.`,
    dateBeforeRef: (field, [target, inclusion]) => `В поле ${field} должна быть дата до ${inclusion ? 'или равная ' : ''}${target}.`,
    dateAfterRef: (field, [target, inclusion]) => `В поле ${field} должна быть дата после ${inclusion ? 'или равная ' : ''}${target}.`,
    betweenDate: (field, [min, max]) => `В поле ${field} должна должны быть дата от ${moment(min).format('DD.MM.YYYY')} до ${moment(max).format('DD.MM.YYYY')}`
  }
}

export default locale
