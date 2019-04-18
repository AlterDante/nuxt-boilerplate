export const state = () => ({
  show: false,
  title: 'Сообщение',
  text: 'Сообщение по умолчанию',
})

export const mutations = {
  setModalParams(state, params) {
    state.show = params.show || false
    state.title = params.title || 'Сообщение'
    state.text = params.text || 'Сообщение по умолчанию'

  },
  closeModal(state) {
    state.show = false
  },
  openModal(state) {
    state.show = true
  },

}

export const actions = {
  setParams({ commit, }, params) {
    commit('setModalParams', params)
  },
  openModal({ commit, }, params) {
    commit('openModal', params)
  },
  closeModal({ commit, }) {
    commit('closeModal')
  },
}
