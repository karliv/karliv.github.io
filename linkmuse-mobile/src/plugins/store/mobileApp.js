export const mobileApp = store => {
  // вызывается после инициализации хранилища
  store.subscribe((mutation, state) => {
    // вызывается после каждой мутации
    // мутация передаётся в формате `{ type, payload }`.
    window.nsWebViewInterface.emit('storeMutation', { mutation, state })
  })
}
