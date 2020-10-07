export const IGNORE_SPECIALIST = 'ignore_specialist'
export const QUALITY_WORK = 'quality_work'
export const NOT_MEETING = 'not_meeting'

export const WAS_LATE = 'was_late'
export const INADEQUATE_STATE = 'inadequate_state'
export const DISCREPANCY = 'discrepancy'
export const ANOTHER_MAN = 'another_man'
export const OTHER = 'other'

export const getSpecialistCauses = () => {
  return [ IGNORE_SPECIALIST, QUALITY_WORK, NOT_MEETING ]
}

export const getCertifiedUserCauses = () => {
  return [ WAS_LATE, INADEQUATE_STATE, DISCREPANCY, ANOTHER_MAN, OTHER ]
}
