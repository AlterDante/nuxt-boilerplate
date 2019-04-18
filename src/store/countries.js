export const state = () => ({
  list: [],
})

export const mutations = {
  setCountries(state, list) {
    state.list=list
  },
}

export const actions = {
  getCountries({ commit, }) {
    const countries = [ 'Россия', 'Китай', 'США', 'Казахстан', 'Канада', 'Япония', 'Аргентина', 'Уганда', ]
    commit('setCountries', countries)
  },
}
