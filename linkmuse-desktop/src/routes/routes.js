/* global System */

import _ from 'lodash'
import cookies from 'js-cookie'
import Route from 'vue-routisan'

import { web, auth, guest, registered, NotRegistered, executor, customer, home, NotFound, dev, emptyEmail } from './middlewares'

export function createRoutes () {
  Route.setViewResolver(path => () => System.import(`./../views/${path}.vue`))

  Route.view('500', 'Errors/500').name('InternalServerError').options({ meta: { classMain: ['error-page'] } })

  Route.group({ beforeEnter: [guest] }, () => {
    Route.view('/login', 'Auth/Login').name('login').options({ meta: { main: true, header: false, classPage: ['main-layout'] } })
    Route.view('/login/:social', 'Auth/Login').name('auth.social').options({ meta: { main: true, header: false, classPage: ['main-layout'] } })
    Route.view('/register', 'Auth/Register').name('register').options({ meta: { main: true, header: false, classPage: ['main-layout'] } })
    Route.view('/password/email', 'Auth/Password/Email').name('password.email').options({ meta: { main: true, header: false, classPage: ['main-layout'] } })
    Route.view('/auth/:social/callback', 'OAuth/Callback/Login').options({ meta: { modalGeo: false, main: true, header: false, classPage: ['main-layout'] } })
    Route.view('/password/reset/:token', 'Auth/Password/Reset').name('password.reset').options({ meta: { modalGeo: false, main: true, header: false, classPage: ['main-layout'] } })
    Route.view('/logout', 'Auth/Logout').name('logout')
  })

  Route.view('/', 'home').name('index').guard(home).options({ meta: { main: true, modalGeo: false, classPage: ['main-layout'], classHeader: ['header_fixed header_blue'] } })
  Route.view('/ref/:user_id').name('referral').options({
    name: 'referral',
    redirect: (route) => {
      let { user_id } = route.params
      cookies.set('referral', user_id)

      return '/'
    }
  })

  Route.view('/referrals', 'Referrals/Index').name('referrals.index').guard([web, auth])

  Route.group({ beforeEnter: [auth] }, () => {
    Route.view('/profile/empty-email', 'User/EmptyEmail/Index').name('user.empty.email').options({ meta: { header: true, modalGeo: false, bannerApp: false } })
  })

  Route.group({ beforeEnter: [auth, emptyEmail, NotRegistered] }, () => {
    Route.view('/profile/register', 'User/Register/Index').name('user.register').options({ meta: { main: true, header: false, modalGeo: false, bannerApp: false } })
  })

  /*
    Only makeup front-end
   */
  Route.group({ prefix: 'makeup', beforeEnter: [web, dev] }, () => {
    // Route.view('/profile-settings', 'makeup/page/_verification/_profile-settings/page_verification_profile-settings').name('makeup.verification.profile-settings')
    // Route.view('/registration-step', 'makeup/page/_verification/_registration/_step/page_verification_registration_step').name('makeup.verification.registration.step')
    // Route.view('/setup-studios', 'makeup/page/_verification/_setup/_studios/page_verification_setup_studios').name('makeup.verification.setup.studios')
    // Route.view('/specialist-profile', 'makeup/page/_verification/_specialist-profile/page_verification_specialist_profile').name('makeup.verification.specialist-profile')
    //
    // Route.view('/modal_verification_rules', 'makeup/common/blocks/modal/_verification/_rules/modal_verification_rules').name('makeup.blocks.modal_verification_rules').options({ meta: { footer: false } })
    // Route.view('/vs-rules', 'makeup/page/_vs-rules/page_vs-rules').name('makeup.page_vs-rules').options({ meta: { footer: false } })
    //
    // Route.view('/page_declaration_creating', 'makeup/page/_declaration/_creating/page_declaration_creating').name('makeup.page_declaration_creating').options({ meta: { footer: false } })
    // Route.view('/page_declaration_creating-2', 'makeup/page/_declaration/_creating/page_declaration_creating-2').name('makeup.page_declaration_creating.2').options({ meta: { footer: false } })
    //
    Route.view('/page_board_casting_inner', 'makeup/page/_board/_casting/_inner/page_board_casting_inner').name('makeup.page_board_casting_inner').options({ meta: { footer: false } })
    // Route.view('/page_board_casting_inner_markdown', 'makeup/page/_board/_casting/_inner/page_board_casting_inner_markdown').name('makeup.page_board_casting_inner_markdown').options({ meta: { footer: false } })
    Route.view('/page_board_casting_inner_customer', 'makeup/page/_board/_casting/_inner/page_board_casting_inner_customer').name('makeup.page_board_casting_inner_customer').options({ meta: { footer: false } })
    // Route.view('/page_board_casting_inner_customer_plug', 'makeup/page/_board/_casting/_inner/page_board_casting_inner_customer_plug').name('makeup.page_board_casting_inner_customer_plug').options({ meta: { footer: false } })
    //
    // Route.view('/page_board_feed', 'makeup/page/_board/_feed/page_board_feed').name('makeup.page_board_feed').options({ meta: { footer: false } })
    // Route.view('/page_board_feed_my-declarations', 'makeup/page/_board/_feed/page_board_feed_my-declarations').name('makeup.page_board_feed_my-declarations').options({ meta: { footer: false } })
    // Route.view('/page_board_feed_my-responses', 'makeup/page/_board/_feed/page_board_feed_my-responses').name('makeup.page_board_feed_my-responses').options({ meta: { footer: false } })
    // Route.view('/page_board_feed_locations', 'makeup/page/_board/_feed/page_board_feed_locations').name('makeup.page_board_feed_locations').options({ meta: { footer: false } })
    //
    // Route.view('/modal_declaration_casting', 'makeup/common/blocks/modal/_declaration/_casting/modal_declaration_casting').name('makeup.blocks.modal_declaration_casting').options({ meta: { footer: false } })
    Route.view('/modal_confirm_email', 'makeup/common/blocks/modal/_confirm/_email/modal_confirm_email').name('makeup.blocks.modal_confirm_email').options({ meta: { footer: false } })
    Route.view('/modal_confirm_phone', 'makeup/common/blocks/modal/_confirm/_phone/modal_confirm_phone').name('makeup.blocks.modal_confirm_phone').options({ meta: { footer: false } })
    // Route.view('/modal_declaration_casting', 'makeup/common/blocks/modal/_feed/modal_feed').name('makeup.blocks.modal_feed').options({ meta: { footer: false } })

    Route.view('/modal_mailing', 'makeup/common/blocks/modal/_mailing/modal_mailing').name('makeup.blocks.modal_mailing').options({ meta: { footer: false } })

    Route.view('/page_hr', 'makeup/page/_about-us/page_about-us_hr').name('makeup.page.page_about-us_hr')
    Route.view('/page_profile_settings', 'makeup/page/_profile/_settings/page_profile_settings').name('makeup.page.page_profile_settings')
    Route.view('/page_profile_creating', 'makeup/page/_profile/_creating/page_profile_creating').name('makeup.page.page_profile_creating')
    Route.view('/page_profile_profession', 'makeup/page/_profile/_profession/page_profile_profession').name('makeup.page.page_profile_profession')
    Route.view('/page_profile_catalog', 'makeup/page/_profile/_catalog/page_profile_catalog').name('makeup.page.page_profile_catalog')
    Route.view('/page_profile', 'makeup/page/_profile/page_profile').name('makeup.page.page_profile')
    Route.view('/page_profile_modal', 'makeup/page/_profile/page_profile_modal').name('makeup.page.page_profile_modal')
    Route.view('/page_vacancy', 'makeup/page/_about-us/page_about-us_vacancy').name('makeup.page.page_about-us_vacancy')
    Route.view('/error_502', 'makeup/page/_error/page_error_502').name('makeup.page.page_error_502').options({ meta: { header: false } })
    Route.view('/list_declarations', 'makeup/common/blocks/list/_declarations/list_declarations').name('makeup.block.list_declarations')

    Route.view('/modal_onboarding', 'makeup/common/blocks/modal/_onboarding/modal_onboarding').name('makeup.block.modal_onboarding')

    Route.view('/datepicker', 'makeup/datepicker').name('makeup.datepicker')

    Route.view('/page_notifications', 'makeup/page/_notifications/page_notifications').name('makeup.page.page_notifications')
  })

  Route.view('pages/:slug', 'Page/Show').name('pages.show').options({ meta: { } }).guard(web)

  Route.group({ beforeEnter: [web, emptyEmail, registered] }, () => {
    Route.view('notifications', 'Notifications/Index').name('notifications.index').guard(auth)
    Route.view('settings', 'Settings/Index').name('settings.index').guard(auth)

    // Route.redirect('/professions', '/users')
    Route.view('/professions/:profession', 'User/Profession/Index').name('users.professions.index').options({ meta: { } })

    Route.group({ prefix: 'users' }, () => {
      Route.view('/', 'User/Index').name('users.index').options({ meta: { } })

      Route.group({ prefix: 'professions' }, () => {
        Route.view(':id', 'User/Profession/Show').name('users.professions.show').options({ meta: { } })
      })
      Route.group({ prefix: 'companies' }, () => {
        Route.view(':id', 'User/Company/Show').name('users.companies.show').options({ meta: { } })
      })
    })

    Route.view('users/professions/create', 'User/Profession/Create').guard(auth).children(() => {
      Route.view(':profession', 'User/Profession/Create/Profession').name('users.professions.create.profession').options({ meta: { } })
    })
    Route.view('users/professions/edit', 'User/Profession/Edit').guard(auth).children(() => {
      Route.view(':id', 'User/Profession/Edit/Profession').name('users.professions.edit').options({ meta: { } })
    })

    Route.view('users/companies/create', 'User/Company/Create').guard(auth).children(() => {
      Route.view(':company', 'User/Company/Create/Company').name('users.companies.create.company').options({ meta: { } })
    })
    Route.view('users/companies/edit', 'User/Company/Edit').guard(auth).children(() => {
      Route.view(':id', 'User/Company/Edit/Company').name('users.companies.edit').options({ meta: { } })
    })

    Route.redirect('/talents', '/professions').name('talents.index')
    Route.redirect('/customers', '/professions').name('customers.index')
    // Route.view('/talents', 'Talents/Index').name('talents.index').options({ meta: { classPage: ['talents-page'] } })

    Route.view('messages', 'Messages/Index').children(() => {
      Route.view('/', 'Messages/Pages/Index').name('messages.index').options({ meta: { classPage: ['message-page'] } })
      Route.view('/:uid', 'Messages/Pages/Show').name('messages.show').options({ meta: { classPage: ['message-page'] } })
    }).guard(auth)

    Route.view('articles', 'Article/Index').children(() => {
      Route.view('/', 'Article/Pages/Index').name('articles.index').options({ meta: { article: true } })
      Route.view('/:tag', 'Article/Pages/Tag').name('articles.tag').options({ meta: { article: true } })
    })
    Route.view('article/:slug', 'Article/Show/Index').name('articles.show').options({ meta: { article: true } })

    Route.group({ prefix: '/folders', beforeEnter: [auth] }, () => {
      Route.view('/', 'Folders/Index').name('folders.index')
      Route.view(':id', 'Folders/Show').name('folders.show')
    })

    // CertifyingSpecialist
    Route.view('/certifying', 'CertifyingSpecialist/Index').name('certifying.index')
    Route.view('/certifying/executor', 'CertifyingSpecialist/Executor/Index').name('certifying.executor.index')
    Route.view('/certifying/customer', 'CertifyingSpecialist/Customer/Index').name('certifying.customer.index')

    Route.group({ prefix: '/certifying', beforeEnter: [auth] }, () => {
      Route.group({ beforeEnter: [auth] }, () => {
        Route.group({ prefix: '/executor', beforeEnter: [executor] }, () => {
          Route.group({ prefix: '/orders' }, () => {
            Route.view('/', 'CertifyingSpecialist/Executor/Orders/Index').name('certifying.executor.orders.index')
            Route.view('/create/:service_id', 'CertifyingSpecialist/Executor/Orders/Create/Specialists').name('certifying.executor.orders.create.specialists')
            Route.view('/:order_id', 'CertifyingSpecialist/Executor/Orders/Show/Index').name('certifying.executor.orders.show')
            Route.view('/:order_id/dispute', 'CertifyingSpecialist/Executor/Orders/Show/Dispute').name('certifying.executor.orders.show.dispute')
            Route.view('/:order_id/success', 'CertifyingSpecialist/Executor/Orders/Show/Success').name('certifying.executor.orders.show.success')
            Route.view('/:order_id/pay', 'CertifyingSpecialist/Executor/Orders/Pay/Index').name('certifying.executor.orders.pay')
          })
        })

        Route.group({ prefix: '/customer', beforeEnter: [customer] }, () => {
          Route.view('/register', 'CertifyingSpecialist/Customer/Register/Index').name('certifying.customer.register')
          Route.view('/settings', 'CertifyingSpecialist/Customer/Settings/Index').name('certifying.customer.settings')
          Route.view('/studios', 'CertifyingSpecialist/Customer/Studios/Index').name('certifying.customer.studios')

          Route.group({ prefix: '/orders' }, () => {
            Route.view('/', 'CertifyingSpecialist/Customer/Orders/Index').name('certifying.customer.orders.index')
            Route.view('/archive', 'CertifyingSpecialist/Customer/Orders/Archive').name('certifying.customer.orders.archive')
            Route.view('/:order_id', 'CertifyingSpecialist/Customer/Orders/Show/Index').name('certifying.customer.orders.show')
            Route.view('/:order_id/dispute', 'CertifyingSpecialist/Customer/Orders/Show/Dispute').name('certifying.customer.orders.show.dispute')
          })
        })

        Route.group({ prefix: '/catalog' }, () => {
          Route.view('/', 'CertifyingSpecialist/Catalog/Index').name('certifying.catalog.index')
        })
      })
    })

    Route.group({ prefix: '/boards' }, () => {
      Route.view('/', 'Board/Index').name('board.index').options({ meta: { board: true } }).guard(web)
      Route.view('/create', 'Board/Create').name('board.create').options({ meta: { board: true, boardForm: true } }).guard(web)
      Route.group({ prefix: '/castings' }, () => {
        Route.view('create', 'Board/Castings/Create').name('board.castings.create').options({ meta: { board: true, boardForm: true } }).guard(web)
        Route.view(':id/edit', 'Board/Castings/Edit').name('board.castings.edit').options({ meta: { board: true, boardForm: true } }).guard(auth)
        Route.view(`:slug?-:id(\\d+)`, 'Board/Castings/Show').name('board.castings.show').options({ meta: { board: true } }).guard(web)
        Route.view(':filter*', 'Board/Castings/Index').name('board.castings.index').options({ meta: { board: true } }).guard(web)
      })
      Route.group({ prefix: '/locations' }, () => {
        Route.view('create', 'Board/Locations/Create').name('board.locations.create').options({ meta: { board: true, boardForm: true } }).guard(web)
        Route.view(':id/edit', 'Board/Locations/Edit').name('board.locations.edit').options({ meta: { board: true, boardForm: true } }).guard(auth)
        Route.view(`:slug?-:id(\\d+)`, 'Board/Locations/Show').name('board.locations.show').options({ meta: { board: true } }).guard(web)
        Route.view(':filter*', 'Board/Locations/Index').name('board.locations.index').options({ meta: { board: true } }).guard(web)
      })
      Route.group({ prefix: '/sales' }, () => {
        Route.view('/', 'Board/Sales/Index').name('board.sales.index').options({ meta: { board: true } }).guard(web)
      })
      Route.group({ prefix: '/rents' }, () => {
        Route.view('/', 'Board/Rents/Index').name('board.rents.index').options({ meta: { board: true } }).guard(web)
      })
    })

    Route.group({ prefix: ':username' }, () => {
      Route.view('/', 'User/Show').name('user.show').options({ meta: { } })
      Route.view('/boards/castings', 'Board/Castings/User').name('board.castings.user').options({ meta: { } })
      Route.view('/boards/castings/responses', 'Board/Castings/Responses/User').name('board.castings.responses.user').options({ meta: { } })
      Route.view('/boards/locations', 'Board/Locations/User').name('board.locations.user').options({ meta: { } })
      Route.view('/boards/sales', 'Board/Sales/Index').name('board.sales.user').options({ meta: { } })
      Route.view('/boards/rents', 'Board/Rents/Index').name('board.rents.user').options({ meta: { } })
      Route.view('/following', 'User/Show').name('following.user').options({ meta: { } })
      Route.view('/followers', 'User/Show').name('followers.user').options({ meta: { } })
      Route.view('/partners', 'User/Show').name('partners.user').options({ meta: { } })
      // Route.view('*', 'User/Show').options({ meta: { } })
    })
  })

  Route.view('unsubscribe/:user_id', 'Unsubscribe/Index').name('mailing.unsubscribe').options({ meta: { } })

  Route.view('*', 'Errors/404').name('NotFound').options({ meta: { classMain: ['page page_error page_error_404'] } })

  return Route.all()
}
