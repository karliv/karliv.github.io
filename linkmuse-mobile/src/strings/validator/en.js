import { name, messages } from 'vee-validate/dist/locale/en'

const attributes = {
  'email': 'Email',
  'password': 'password',
  'phone': 'phone',
  'lastname': 'last name',
  'firstname': 'first name',
  'date_start': 'start date',
  'date_end': 'end date',
  'company_name': 'company name',
  'body-parameters->sex': 'gender',
  'aboutme->birthday': 'birthday',
  'date_work_end': 'end work date',
  'contactdetails->phone': 'phone',
  'aboutme->guardian: ': 'guardian name'
}

const locale = {
  name,
  attributes,
  messages: {
    ...messages,
    minTarget: (field, [target, inclusion]) => `The ${field} must be after ${inclusion ? 'or equal to ' : ''}${target}.`,
  }
}

export default locale
