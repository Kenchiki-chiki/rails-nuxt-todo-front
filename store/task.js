export const state = () => ({
  tasks: [],
})

export const actions = {
  async addTasks({ commit }, params) {
    const res = await this.$axios.$post('/api/v1/tasks', params)
    commit('addTasks', res)
    return {}
  },
  async fetchTasks({ commit }) {
    const res = await this.$axios.$get('/api/v1/tasks', {
    })
    commit('setTasks', res)
  } 
}

export const mutations = {
  addTasks(state, saveTask) {
    const tasks = state.tasks.concat(saveTask)
    state.tasks =tasks
  },
  setTasks(state, payload) {
    state.tasks = []
    const tasks = state.tasks.concat(payload)
    state.tasks = tasks
  }
}

export const getters = {
  tasks(state) {
    return state.tasks
  }
}