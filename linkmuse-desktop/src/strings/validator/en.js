import { name, messages } from 'vee-validate/dist/locale/en'

const attributes = {
  email: 'email',
  phone: 'phone',
  first_name: 'first name',
  last_name: 'last name',
  company_name: 'company name'
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
