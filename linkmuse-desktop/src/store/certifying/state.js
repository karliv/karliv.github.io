import { INDIVIDUAL_ENTREPRENEUR } from '@modules/CertifyingSpecialist/Enums/Types.js'

const state = () => ({
  services: {
    data: [],
    error: false,
    loading: false
  },
  specialists: {
    random: {
      data: [],
      count: 0,
      error: false,
      loading: false
    }
  },
  orders: {
    customer: {
      data: {},
      error: false,
      loading: false
    },
    executor: {
      data: [],
      count: 0,
      offset: 0,
      limit: 24,
      error: false,
      loading: false,
      counters: {
        loading: false,
        error: false,
        data: {
          all: 0,
          not_paid: 0,
          paid: 0,
          dispute: 0,
          finished: 0,
          canceled: 0
        }
      }
    },
    archival: {
      data: [],
      error: false,
      loading: true
    },
    single: {
      data: null,
      error: false,
      loading: false
    }
  },
  register: {
    data: {
      fields: {
        services: [],
        'user.type': INDIVIDUAL_ENTREPRENEUR,
        'user.phone': null,
        'user.fullname': null,
        'bank_account.itn': null,
        'bank_account.iec': null,
        'bank_account.bic': null,
        'user.company_name': null,
        'bank_account.legal_address': null,
        'bank_account.bank_recipient': null,
        'bank_account.actual_address': null,
        'bank_account.checking_account': null,
        'bank_account.correspondent_account': null,
        'bank_account.vat': '0'
      },
      error: false,
      loading: false
    }
  },
  settings: {
    studios: {
      data: [],
      error: false,
      loading: false
    }
  }
})
export default state
