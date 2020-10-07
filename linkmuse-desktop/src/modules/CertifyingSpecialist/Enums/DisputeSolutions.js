export const RETURN_MONEY = 'return_money'
export const REPLACE_SPECIALIST = 'replace_specialist'
export const AGAIN = 'again'
export const GET_MONEY = 'get_money'

export const getSpecialistSolutions = () => {
  return [ RETURN_MONEY, REPLACE_SPECIALIST, AGAIN ]
}

export const getCertifiedUserSolutions = () => {
  return [ RETURN_MONEY, GET_MONEY ]
}
