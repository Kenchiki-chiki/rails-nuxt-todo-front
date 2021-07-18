export const state = () => ({
  tasks: [],
})

export const actions = {
  async addTasks({ commit }, params) {
    const res = await this.$axios.$post('/api/v1/tasks', params)
    return {}
  },
  async fetchTasks({ commit }) {
    const res = await this.$axios.$get('/api/v1/tasks', {
    })
    commit('setTasks', res)
  } 
}

export const mutations = {
  setTasks(state, payload) {
    state.tasks = []
    state.tasks = state.tasks.concat(payload)
  }
}

export const getters = {
  tasks(state) {
    return state.tasks
  }
}