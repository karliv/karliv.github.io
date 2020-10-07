export const NOT_PAID = 'not_paid' // Не оплачен
export const PAID = 'paid' // Оплачен
export const MATCH_MEETING = 'match_meeting' // Согласование даты и времени
export const WAIT_CONFIRM_MEETING_CLIENT = 'wait_confirm_meeting_client' // Ожидается подтверждение времени Клиентом
export const AGREED_MEETING = 'agreed_meeting' // Согласовано время и дата (встреча назначена)
export const WAIT_WORK = 'wait_work' // Ожидает исполнения работы (загрузка данных)
export const WAIT_CONFIRM_WORK_CLIENT = 'wait_confirm_work_client' // Ожидает подтверждения работы Клиентом
export const FINALIZING = 'finalizing' // На доработке
export const FINISHED = 'finished' // Завершен
export const CANCELED = 'canceled' // Отменен

export const getPaidCategory = () => {
  return [ PAID ]
}

export const getMeetingCategory = () => {
  return [ MATCH_MEETING, WAIT_CONFIRM_MEETING_CLIENT, AGREED_MEETING ]
}

export const getInWorkCategory = () => {
  return [ WAIT_WORK, WAIT_CONFIRM_WORK_CLIENT, FINALIZING ]
}

export const getInWorkCategorySpecialist = () => {
  return [ WAIT_WORK, FINALIZING ]
}

export const getArchivalCategory = () => {
  return [ FINISHED, CANCELED ]
}
