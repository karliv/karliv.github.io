/* global System */

import Route from 'vue-routisan'
import cookies from 'js-cookie'

import { web, auth, guest, registered, notRegistered, executor, customer, home, NotFound, dev } from './middlewares'

const CINEMARKET_OPTIONS = { meta: { header: false, modalGeo: false, bannerApp: false, cineMarket: true } }

export function createRoutes () {
  Route.setViewResolver(path => () => System.import(`./../views/${path}.vue`))

  Route.view('500', 'Errors/500').name('InternalServerError')
  Route.view('redirect', 'Redirect').name('Redirect').options({ meta: { modalGeo: false, bannerApp: false } })

  Route.group({ beforeEnter: [guest] }, () => {
    Route.view('/login', 'Auth/Login').name('login').options({ meta: { header: false, bannerApp: false } })
    Route.view('/login/:social', 'Auth/Login').name('auth.social').options({ meta: { header: false, bannerApp: false } })
    Route.view('/register', 'Auth/Register').name('register').options({ meta: { header: false, bannerApp: false } })
    Route.view('/password/email', 'Auth/Password/Email').name('password.email').options({ meta: { header: false, bannerApp: false } })
    Route.view('/password/reset/:token', 'Auth/Password/Reset').name('password.reset').options({ meta: { modalGeo: false, header: false, bannerApp: false, modalAttachPhone: false, modalAttachEmail: false } })
    Route.view('/logout', 'Auth/Logout').name('logout')
  })

  Route.view('/auth/:social/callback', 'OAuth/Callback/Login').name('auth.social.callback').options({ meta: { modalGeo: false, header: false, bannerApp: false, modalAttachPhone: false, modalAttachEmail: false } })
  Route.view('/auth/by-token', 'Auth/Token').name('auth.token').options({ meta: { header: false, modalGeo: false, bannerApp: false } })

  Route.view('/', 'home').name('index').options({ meta: { header: false, modalGeo: false, bannerApp: false, modalAttachPhone: false, modalAttachEmail: false } }).guard(home)
  Route.view('/ref/:user_id').name('referral').options({
    name: 'referral',
    redirect: (route) => {
      let { user_id } = route.params
      cookies.set('referral', user_id)

      return '/'
    }
  })

  Route.view('/referrals', 'Referrals/Index').name('referrals.index').guard([web, auth])

  Route.group({ beforeEnter: [auth, notRegistered] }, () => {
    Route.view('/profile/register', 'User/Register/Index').name('user.register').options({ meta: { header: false, modalGeo: false, bannerApp: false, update: false, modalAttachPhone: false, modalAttachEmail: false } })
  })

  /*
    Only makeup front-end
    */
  Route.group({ prefix: 'makeup', beforeEnter: [web, dev] }, () => {
    // Route.view('/', 'Makeup/Index').name('makeup.index')
    // Route.view('/register', 'Makeup/Auth/Register').name('makeup.register').options({ meta: { header: true } })
    // Route.group({ prefix: '/castings' }, () => {
    //   Route.view('/', 'Makeup/Castings/Index').name('makeup.castings.index')
    //   Route.view('/invitations', 'Makeup/Castings/Invitations').name('makeup.castings.invitations.index')
    //   Route.view('/page', 'Makeup/Castings/Show/Index').name('makeup.castings.show')
    //   Route.view('/create', 'Makeup/Castings/Create/Index').name('makeup.castings.create.index')
    //   Route.view('/response', 'Makeup/Castings/Response/Index').name('makeup.castings.response')
    //   Route.view('/inviations', 'Makeup/Castings/Response/Invitations').name('makeup.castings.inviations')
    // })
    //
    // Route.group({ prefix: '/profile/castings' }, () => {
    //   Route.view('/', 'Makeup/Profile/Castings/Index').name('profile.castings.index')
    // })
    //
    // Route.view('/notifications', 'Makeup/Notifications/Index').name('makeup.notifications.index')
    //
    // // Route.view('/articles', 'Makeup/Article/Index').name('makeup.articles.index')
    // Route.view('/artist', 'Makeup/Profile/Artist/Index').name('makeup.profile.artist.index')
    // Route.view('/customer', 'Makeup/Profile/Customer/Index').name('makeup.profile.customer.index')
    // Route.view('/messages', 'Makeup/Messages/Index').name('makeup.messages.index')
    // Route.view('/talents', 'Makeup/Talents/Index').name('makeup.talents.index')
    // Route.view('/abuse', 'Makeup/Abuse/Index').name('makeup.abuse.index')
    // Route.view('/registration', 'Makeup/modal/_registration/modal_registration').name('makeup.modal.modal_registration').options({ meta: { header: false } })

    // Route.view('/error_404', 'Makeup/pages/page/_error/_404/page_error_404').name('makeup.pages.page_error_404')
    // Route.view('/mailing_subscribe', 'Makeup/pages/page/_mailing/_subscribe/page_mailing_subscribe').name('makeup.pages.page_mailing_subscribe')
    // Route.view('/mailing_unsubscribe', 'Makeup/pages/page/_mailing/_unsubscribe/page_mailing_unsubscribe').name('makeup.pages.page_mailing_unsubscribe')
    // Route.view('/landing-talent', 'Makeup/Landing/Talent').name('makeup.lading.talent').options({ meta: { header: false } })
    // Route.view('/landing-vs', 'Makeup/Landing/Vs').name('makeup.lading.vs').options({ meta: { header: false } })

    // Route.view('/selectphotograph', 'Makeup/CertifyingSpecialist/SelectPhotograph').name('makeup.certifyingspecialist.selectphotograph').options({ meta: { header: false } })
    // Route.view('/confirm', 'Makeup/CertifyingSpecialist/ConfirmOrder').name('makeup.certifyingspecialist.confirmorder').options({ meta: { header: false } })
    // Route.view('/paid', 'Makeup/CertifyingSpecialist/Paid').name('makeup.certifyingspecialist.paid')
    // Route.view('/landing-talent', 'Makeup/Landing/Talent').name('makeup.lading.talent').options({ meta: { header: false } })
    //
    // Route.view('/landing-vs', 'Makeup/Landing/Vs').name('makeup.lading.vs').options({ meta: { header: false } })
    // Route.view('/register-vs', 'Makeup/CertifyingSpecialist/Register').name('makeup.rertifyingspecialist.register').options({ meta: { header: false } })
    //
    // Route.view('/wait-vs', 'Makeup/CertifyingSpecialist/Wait').name('makeup.certifyingspecialist.wait').options({ meta: { header: false } })
    // Route.view('/wait-after-vs', 'Makeup/CertifyingSpecialist/WaitAfterMeeting').name('makeup.certifyingspecialist.waitafter').options({ meta: { header: false } })
    // Route.view('/agree-meeting-vs', 'Makeup/CertifyingSpecialist/AgreeMeeting').name('makeup.certifyingspecialist.agreemeeting').options({ meta: { header: false } })
    // Route.view('/open-dispute-vs', 'Makeup/CertifyingSpecialist/OpenDispute').name('makeup.certifyingspecialist.opendispute').options({ meta: { header: false } })
    // Route.view('/select-meeting-vs', 'Makeup/CertifyingSpecialist/SelectMeeting').name('makeup.certifyingspecialist.selectmeeting').options({ meta: { header: false } })
    Route.view('/rules-page', 'Makeup/CertifyingSpecialist/RulesPage').name('makeup.certifyingspecialist.rulespage').options({ meta: { header: false } })
    // Route.view('/certification-vs', 'Makeup/CertifyingSpecialist/Certification').name('makeup.certifyingspecialist.certification').options({ meta: { header: false } })
    // Route.view('/certification-success-vs', 'Makeup/CertifyingSpecialist/CertificationSuccess').name('makeup.certifyingspecialist.certificationsuccess').options({ meta: { header: false } })
    //
    // Route.view('/castings_response_contractor', 'Makeup/common/castings/_response/_contractor/castings_response_contractor').name('makeup.common.castings_response_contractor')
    // Route.view('/castings_invitation_customer', 'Makeup/common/castings/_invitation/_customer/castings_invitation_customer').name('makeup.common.castings_invitation_customer')
    //
    // Route.view('/page_declaration', 'Makeup/pages/page/_declaration/page_declaration').name('makeup.pages.page_declaration').options({ meta: { header: false } })
    // Route.view('/multiselect', 'Makeup/common/blocks/multiselect/_declaration/multiselect_declaration').name('makeup.pages.multiselect_declaration').options({ meta: { header: false } })
    //
    // Route.view('/page_declaration_casting', 'Makeup/pages/page/_declaration/_casting/page_declaration_casting').name('makeup.pages.page_declaration_casting').options({ meta: { header: false } })
    // Route.view('/page_declaration_casting_customer', 'Makeup/pages/page/_declaration/_casting/_customer/page_declaration_casting_customer').name('makeup.pages.page_declaration_casting_customer').options({ meta: { header: false } })
    Route.view('/page_profile_settings', 'Makeup/pages/page/_profile/_settings/page_profile_settings').name('makeup.pages.page_profile_settings').options({ meta: { header: false } })
    Route.view('/page_profile_filled', 'Makeup/pages/page/_profile/page_profile_filled').name('makeup.pages.page_profile_filled').options({ meta: { header: false } })
    Route.view('/page_profile_modal', 'Makeup/pages/page/_profile/page_profile_modal').name('makeup.pages.page_profile_modal').options({ meta: { header: false } })
    Route.view('/page_response_modal', 'Makeup/pages/page/_profile/page_response_modal').name('makeup.pages.page_response_modal').options({ meta: { header: false } })
    Route.view('/page_confirm_email', 'Makeup/pages/page/_confirm/_email/page_confirm_email').name('makeup.pages.page_confirm_email').options({ meta: { header: false } })
    Route.view('/page_confirm_phone', 'Makeup/pages/page/_confirm/_phone/page_confirm_phone').name('makeup.pages.page_confirm_phone').options({ meta: { header: false } })
    Route.view('/page_profile_not_filled', 'Makeup/pages/page/_profile/page_profile_not_filled').name('makeup.pages.page_profile_not_filled').options({ meta: { header: false } })
    Route.view('/page_profile_not_filled_guest', 'Makeup/pages/page/_profile/page_profile_not_filled_guest').name('makeup.pages.page_profile_not_filled_guest').options({ meta: { header: false } })
    Route.view('/page_profile_filled_guest', 'Makeup/pages/page/_profile/page_profile_filled_guest').name('makeup.pages.page_profile_filled_guest').options({ meta: { header: false } })
    Route.view('/page_profile_list_companies', 'Makeup/pages/page/_profile/page_profile_list_companies').name('makeup.pages.page_profile_list_companies').options({ meta: { header: false } })
    Route.view('/page_profile_list_professions', 'Makeup/pages/page/_profile/page_profile_list_professions').name('makeup.pages.page_profile_list_professions').options({ meta: { header: false } })
    Route.view('/page_profile_creation_profession', 'Makeup/pages/page/_profile/page_profile_creation_profession').name('makeup.pages.page_profile_creation_profession').options({ meta: { header: false } })
    Route.view('/page_profile_creation_profession_model', 'Makeup/pages/page/_profile/page_profile_creation_profession_model').name('makeup.pages.page_profile_creation_profession_model').options({ meta: { header: false } })
    Route.view('/page_profile_creation_profession_filled', 'Makeup/pages/page/_profile/page_profile_creation_profession_filled').name('makeup.pages.page_profile_creation_profession_filled').options({ meta: { header: false } })
    Route.view('/page_profile_published_profession', 'Makeup/pages/page/_profile/page_profile_published_profession').name('makeup.pages.page_profile_published_profession').options({ meta: { header: false } })
    Route.view('/page_profile_published_profession_guest', 'Makeup/pages/page/_profile/page_profile_published_profession_guest').name('makeup.pages.page_profile_published_profession_guest').options({ meta: { header: false } })
    Route.view('/page_profile_archival_profession', 'Makeup/pages/page/_profile/page_profile_archival_profession').name('makeup.pages.page_profile_archival_profession').options({ meta: { header: false } })
    Route.view('/page_profile_catalog_professionals', 'Makeup/pages/page/_profile/page_profile_catalog_professionals').name('makeup.pages.page_profile_catalog_professionals').options({ meta: { header: false } })
    Route.view('/page_profile_catalog_filters', 'Makeup/pages/page/_profile/page_profile_catalog_filters').name('makeup.pages.page_profile_catalog_filters').options({ meta: { header: false } })
    Route.view('/page_profile_feedback_received', 'Makeup/pages/page/_profile/page_profile_feedback_received').name('makeup.pages.page_profile_feedback_received').options({ meta: { header: false } })
    Route.view('/page_profile_short_sheet_responses', 'Makeup/pages/page/_profile/page_profile_short_sheet_responses').name('makeup.pages.page_profile_short_sheet_responses').options({ meta: { header: false } })
    Route.view('/page_profile_response_sent_by_me', 'Makeup/pages/page/_profile/page_profile_response_sent_by_me').name('makeup.pages.page_profile_response_sent_by_me').options({ meta: { header: false } })
    Route.view('/page_declaration_location', 'Makeup/pages/page/_declaration/location/page_declaration_location').name('makeup.pages.page_declaration_location').options({ meta: { header: false } })
    Route.view('/page_declaration_location_customer', 'Makeup/pages/page/_declaration/location/_customer/page_declaration_location_customer').name('makeup.pages.page_declaration_location_customer').options({ meta: { header: false } })
    //
    // Route.view('/home_cinemarket', 'Makeup/CineMarket/home_cinemarket').name('makeup.CineMarket.home_cinemarket').options({ meta: { header: false } })
    // Route.view('/program_cinemarket', 'Makeup/CineMarket/program_cinemarket').name('makeup.CineMarket.program_cinemarket').options({ meta: { header: false } })
    // Route.view('/pitches_cinemarket', 'Makeup/CineMarket/pitches_cinemarket').name('makeup.CineMarket.pitches_cinemarket').options({ meta: { header: false } })
    // Route.view('/pitches_vote_cast_cinemarket', 'Makeup/CineMarket/pitches_vote_cast_cinemarket').name('makeup.CineMarket.pitches_vote_cast_cinemarket').options({ meta: { header: false } })
    // Route.view('/guest_cinemarket', 'Makeup/CineMarket/guest_cinemarket').name('makeup.CineMarket.guest_cinemarket').options({ meta: { header: false } })
    // Route.view('/organizer_cinemarket', 'Makeup/CineMarket/organizer_cinemarket').name('makeup.CineMarket.organizer_cinemarket').options({ meta: { header: false } })
    // Route.view('/partners_cinemarket', 'Makeup/CineMarket/partners_cinemarket').name('makeup.CineMarket.partners_cinemarket').options({ meta: { header: false } })
    // Route.view('/news_cinemarket', 'Makeup/CineMarket/news_cinemarket').name('makeup.CineMarket.news_cinemarket').options({ meta: { header: false } })
    // Route.view('/contacts_cinemarket', 'Makeup/CineMarket/contacts_cinemarket').name('makeup.CineMarket.contacts_cinemarket').options({ meta: { header: false } })
    // Route.view('/menu_cinemarket', 'Makeup/CineMarket/menu_cinemarket').name('makeup.CineMarket.menu_cinemarket').options({ meta: { header: false } })
    //
    // Route.view('/modal_declaration_casting', 'Makeup/common/blocks/modal/_declaration/_casting/modal_declaration_casting').name('makeup.pages.modal_declaration_casting').options({ meta: { header: false } })
    //
    // Route.view('/design-system', 'Makeup/pages/page/_design-system/page_design-system').name('makeup.pages.page_design-system').options({ meta: { header: false } })
    //
    // Route.view('/page_feed', 'Makeup/pages/page/_feed/page_feed').name('makeup.pages.page_feed').options({ meta: { header: false } })
    Route.view('/location_page_feed', 'Makeup/pages/page/_feed/_locations/page_feed').name('makeup.pages.locations.page_feed').options({ meta: { header: false } })
    //
    // Route.view('/page_feed_my', 'Makeup/pages/page/_feed/_my/page_feed_my').name('makeup.pages.page_feed_my').options({ meta: { header: false } })
    //
    // Route.view('/modal_verification_rules', 'Makeup/common/blocks/modal/_verification/_rules/modal_verification_rules').name('makeup.blocks.modal_verification_rules').options({ meta: { footer: false } })
    // Route.view('/vs-rules', 'Makeup/pages/page/_vs-rules/page_vs-rules').name('makeup.page_vs-rules').options({ meta: { footer: false } })
    //
    // Route.view('/landing-talent', 'Makeup/Landing/Talent').name('makeup.lading.talent').options({ meta: { footer: false } })
    //
    // Route.view('/page_feed_other-user', 'Makeup/pages/page/_feed/_other-user/page_feed_other-user').name('makeup.pages.page_feed_other-user').options({ meta: { header: false } })
    //
    // Route.view('/page_feed_my-responses', 'Makeup/pages/page/_feed/_my-responses/page_feed_my-responses').name('makeup.pages.page_feed_my-responses').options({ meta: { header: false } })
    // Route.view('/page_declaration_markdown', 'Makeup/pages/page/_declaration/_casting/_customer/page_declaration_markdown').name('makeup.pages.page_declaration_markdown').options({ meta: { header: false } })
    Route.view('/page_declaration_markdown', 'Makeup/pages/page/_declaration/location/page_declaration_location_markdown').name('makeup.pages.page_declaration_markdown').options({ meta: { header: false } })
    //
    // Route.view('/landing-talent', 'Makeup/Landing/Talent').name('makeup.lading.talent').options({ meta: { header: false } })
    //
    // Route.view('/landing-vs', 'Makeup/Landing/Vs').name('makeup.lading.vs').options({ meta: { header: false } })
    // Route.view('/page_hr', 'Makeup/pages/page/_about-us/page_about-us_hr').name('makeup.page.page_about-us_hr').options({ meta: { header: false } })
    // Route.view('/page_vacancy', 'Makeup/pages/page/_about-us/page_about-us_vacancy').name('makeup.page.page_about-us_vacancy').options({ meta: { header: false } })
    // Route.view('/error_502', 'Makeup/pages/page/_error/_502/page_error_502').name('makeup.page.page_error_502').options({ meta: { header: false } })
    // Route.view('/mobile_badges', 'Makeup/pages/page/_badges/mobile_badges').name('makeup.page.mobile_badges').options({ meta: { header: false } })
    //
    // Route.view('/modal_write-all', 'Makeup/common/blocks/modal/_write-all/modal_write-all').name('makeup.modal.modal_write-all').options({ meta: { header: false } })
    //
    // Route.view('/modal_talent-phone', 'Makeup/common/blocks/modal/_talent-phone/modal_talent-phone').name('makeup.modal.modal_write-all').options({ meta: { header: false } })

    Route.view('/page_notifications', 'Makeup/pages/page/_notifications/page_notifications').name('makeup.page.page_notifications').options({ meta: { header: true } })
    Route.view('/page_onboarding', 'Makeup/pages/page/_onboarding/page_onboarding').name('makeup.page.page_onboarding').options({ meta: { header: false } })
    Route.view('/create_location', 'Makeup/pages/page/_declaration/create_location').name('makeup.page.create_location').options({ meta: { header: false } })
    Route.view('/page_declaration', 'Makeup/pages/page/_declaration/page_declaration').name('makeup.page.page_declaration').options({ meta: { header: false } })
    Route.view('/create_location_without_location_type', 'Makeup/pages/page/_declaration/create_location_without_location_type').name('makeup.page.create_location_without_location_type').options({ meta: { header: false } })
  })

  Route.view('pages/:slug', 'Page/Show').name('pages.show').options({ meta: { header: true } }).guard(web)

  Route.group({ beforeEnter: [web, registered] }, () => {
    Route.view('/settings', 'Settings/Index').name('settings.index').guard(auth).options({ meta: { update: false, modalAttachPhone: false, modalAttachEmail: false } })
    Route.view('/pay/:amount(\\d+)', 'CloudPayment/Index').name('cloudpayment.index').guard(auth).options({ meta: { header: false, modalGeo: false, bannerApp: false } })
    Route.view('/notifications', 'Notifications/Index').name('notifications.index').guard(auth)

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
      Route.view(':profession', 'User/Profession/Create/Profession').name('users.professions.create.profession').options({ meta: { update: false } })
    })
    Route.view('users/professions/edit', 'User/Profession/Edit').guard(auth).children(() => {
      Route.view(':id', 'User/Profession/Edit/Profession').name('users.professions.edit').options({ meta: { update: false } })
    })

    Route.view('users/companies/create', 'User/Company/Create').guard(auth).children(() => {
      Route.view(':company', 'User/Company/Create/Company').name('users.companies.create.company').options({ meta: { update: false } })
    })
    Route.view('users/companies/edit', 'User/Company/Edit').guard(auth).children(() => {
      Route.view(':id', 'User/Company/Edit/Company').name('users.companies.edit').options({ meta: { update: false } })
    })

    Route.view('articles', 'Article/Index').children(() => {
      Route.view('/', 'Article/Pages/Index').name('articles.index')
      Route.view('/:tag', 'Article/Pages/Tag').name('articles.tag')
    })

    Route.view('article/:slug', 'Article/Show/Index').name('articles.show').options({ meta: { header: true } })

    Route.view('interviews', 'Interview/Index').children(() => {
      Route.view('/', 'Interview/Pages/Index').name('interviews.index')
      Route.view('/:category', 'Interview/Pages/Category').name('interviews.category')
    })
    Route.view('interviews/:category/:slug', 'Interview/Show/Index').name('interviews.show').options({ meta: { header: false } })

    Route.group({ prefix: '/messages' }, () => {
      Route.view('/', 'Messages/Index').name('messages.index').guard(auth)
      Route.view(':uid', 'Messages/Show').name('messages.show').options({ meta: { header: false } }).guard(auth)
    })

    Route.redirect('/talents', '/users').name('talents.index')
    Route.redirect('/customers', '/users').name('customers.index')

    Route.group({ prefix: '/folders', beforeEnter: [auth] }, () => {
      Route.view('/', 'Folders/Index').name('folders.index')
      Route.view(':id', 'Folders/Show').name('folders.show')
    })

    // CertifyingSpecialist
    Route.redirect('/certifying/executor/orders/create', '/certifying/executor/')
    Route.view('/certifying', 'CertifyingSpecialist/Index').name('certifying.index').options({ meta: { header: false } })
    Route.view('/certifying/executor', 'CertifyingSpecialist/Executor/Index').name('certifying.executor.index').options({ meta: { header: false } })
    Route.view('/certifying/customer', 'CertifyingSpecialist/Customer/Index').name('certifying.customer.index').options({ meta: { header: false } })

    Route.group({ prefix: '/certifying', beforeEnter: [auth] }, () => {
      Route.group({ prefix: '/executor', beforeEnter: [executor] }, () => {
        Route.group({ prefix: '/orders' }, () => {
          Route.view('/', 'CertifyingSpecialist/Executor/Orders/Index').name('certifying.executor.orders.index')
          Route.view('/create/:service_id', 'CertifyingSpecialist/Executor/Orders/Create/Index').name('certifying.executor.orders.create').options({ meta: { header: false } })
          Route.view('/create/:service_id/:specialist_id', 'CertifyingSpecialist/Executor/Orders/Create/Specialist').name('certifying.executor.orders.create.specialist').options({ meta: { header: false } })
          Route.view('/:order_id', 'CertifyingSpecialist/Executor/Orders/Show/Index').name('certifying.executor.orders.show').options({ meta: { header: false } })
          Route.view('/:order_id/dispute', 'CertifyingSpecialist/Executor/Orders/Show/Dispute').name('certifying.executor.orders.show.dispute').options({ meta: { header: false } })
          Route.view('/:order_id/success', 'CertifyingSpecialist/Executor/Orders/Show/Success').name('certifying.executor.orders.show.success').options({ meta: { header: false } })
          Route.view('/:order_id/pay', 'CertifyingSpecialist/Executor/Orders/Pay/Index').name('certifying.executor.orders.pay').options({ meta: { header: false } })
        })
      })

      Route.group({ prefix: '/customer', beforeEnter: [customer] }, () => {
        Route.view('/register', 'CertifyingSpecialist/Customer/Register/Index').name('certifying.customer.register').options({ meta: { header: false } })

        Route.group({ prefix: '/orders' }, () => {
          Route.view('/', 'CertifyingSpecialist/Customer/Orders/Index').name('certifying.customer.orders.index')
          Route.view('/archive', 'CertifyingSpecialist/Customer/Orders/Archive').name('certifying.customer.orders.archive')
          Route.view('/:id', 'CertifyingSpecialist/Customer/Orders/Index').name('certifying.customer.orders.order')
          Route.view('/:id/success', 'CertifyingSpecialist/Customer/Orders/Index').name('certifying.customer.orders.order.success')
        })
      })

      Route.group({ prefix: '/catalog' }, () => {
        Route.view('/', 'CertifyingSpecialist/Catalog/Index').name('certifying.catalog.index')
      })
    })

    Route.group({ prefix: '/boards' }, () => {
      Route.view('/', 'Board/Index').name('board.index').options({ meta: { header: true, board: true } }).guard(web)
      Route.view('/create', 'Board/Create').name('board.create').options({ meta: { board: true, boardForm: true, update: false } }).guard(web)
      Route.group({ prefix: '/castings' }, () => {
        Route.view('create', 'Board/Castings/Create').name('board.castings.create').options({ meta: { header: false, board: true, update: false } }).guard(web)
        Route.view(':id/edit', 'Board/Castings/Edit').name('board.castings.edit').options({ meta: { header: false, board: true, update: false } }).guard(auth)
        Route.view(`:slug?-:id(\\d+)`, 'Board/Castings/Show').name('board.castings.show').options({ meta: { header: false, board: true } }).guard(web)
        Route.view('/:filter*', 'Board/Castings/Index').name('board.castings.index').options({ meta: { header: true, board: true } }).guard(web)
      })
      Route.group({ prefix: '/locations' }, () => {
        Route.view('create', 'Board/Locations/Create').name('board.locations.create').options({ meta: { board: true, boardForm: true, update: false } }).guard(web)
        Route.view(':id/edit', 'Board/Locations/Edit').name('board.locations.edit').options({ meta: { board: true, boardForm: true, update: false } }).guard(auth)
        Route.view(`:slug?-:id(\\d+)`, 'Board/Locations/Show').name('board.locations.show').options({ meta: { header: false, board: true } }).guard(web)
        Route.view(':filter*', 'Board/Locations/Index').name('board.locations.index').options({ meta: { header: true, board: true } }).guard(web)
      })
      Route.group({ prefix: '/sales' }, () => {
        Route.view('/', 'Board/Sales/Index').name('board.sales.index').options({ meta: { header: true, board: true } }).guard(web)
      })
      Route.group({ prefix: '/rents' }, () => {
        Route.view('/', 'Board/Rents/Index').name('board.rents.index').options({ meta: { header: true, board: true } }).guard(web)
      })
    })

    Route.group({ prefix: ':username' }, () => {
      Route.view('/', 'User/Show').name('user.show').options({ meta: { header: true } })
      // TODO: Удалить данный модуль
      // Route.view('/partners', 'Partners/Index').name('user.partners').options({ meta: { header: true } })
      Route.view('/boards/castings', 'Board/Castings/User').name('board.castings.user').options({ meta: { header: true } })
      Route.view('/boards/castings/responses', 'Board/Castings/Responses/User').name('board.castings.responses.user').options({ meta: { header: true } })
      Route.view('/boards/locations', 'Board/Locations/User').name('board.locations.user').options({ meta: { header: true } })
      Route.view('/boards/sales', 'Board/Sales/User').name('board.sales.user').options({ meta: { header: true } })
      Route.view('/boards/rents', 'Board/Rents/User').name('board.rents.user').options({ meta: { header: true } })
      Route.view('/following', 'User/Following').name('following.user').options({ meta: { header: true } })
      Route.view('/followers', 'User/Followers').name('followers.user').options({ meta: { header: true } })
      Route.view('/partners', 'User/Partners').name('partners.user').options({ meta: { header: true } })
      // Route.view('*', 'User/Index').options({ meta: { header: true } })
      Route.view('/index/*', 'User/Show').options({ meta: { } })
      Route.view('/audios/*', 'User/Show').options({ meta: { } })
      Route.view('/anketa/*', 'User/Show').options({ meta: { } })
      Route.view('/photos/*', 'User/Show').options({ meta: { } })
      Route.view('/videos/*', 'User/Show').options({ meta: { } })
      Route.view('/portfolio/*', 'User/Show').options({ meta: { } })
    })
  })

  Route.view('unsubscribe/:user_id', 'Unsubscribe/Index').name('mailing.unsubscribe').options({ meta: { modalGeo: false, bannerApp: false } })

  Route.view('*', 'Errors/404').name('NotFound')

  return Route.all()
}
