import moment from 'moment'
import { name, messages } from 'vee-validate/dist/locale/ru'

const attributes = {
  'email': 'Email',
  'password': 'пароль',
  'phone': 'телефон',
  'firstname': 'имя',
  'lastname': 'фамилия',
  'user->fullname': 'ФИО',
  'user->phone': 'телефон',
  'bank_account->itn': 'ваш ИНН',
  'bank_account->iec': 'КПП',
  'bank_account->bic': 'БИК',
  'date_start': 'Дата начала',
  'date_end': 'Дата завершения',
  'body-parameters->sex': 'пол',
  'contactdetails->phone': 'телефон',
  'company_name': 'название компании',
  'aboutme->birthday': 'дата рождения',
  'aboutme->guardian: ': 'имя родителя',
  'date_work_end': 'Дата завершения работы',
  'user->company_name': 'название компании',
  'bank_account->legal_address': 'юридический адрес',
  'bank_account->bank_recipient': 'банк-получатель',
  'bank_account->actual_address': 'фактический адрес (прописка)',
  'bank_account->checking_account': 'расчетный счет',
  'bank_account->correspondent_account': 'кор. счет'
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
