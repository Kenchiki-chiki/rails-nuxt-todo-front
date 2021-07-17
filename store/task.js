export const state = () => ({
  tasks: [],
})

export const actions = {
  async createTask({ commit }, params) {
    const url = '/api/v1/tasks'
    const res = await this.$axios.$post(url, { task: params }).catch(() => {
      return { errors: ['エラーが発生しました'] }
    })
    if (res.errors && res.errors.length !== 0) {
      return {
        errors: res.errors
      }
    }
    return {}
  },
  
  async addTasks({ commit }, tasks) {
    console.log("===1===")
    const res = await this.$axios.$post('/api/v1/tasks', tasks)
    console.log("===2===")
    console.log(res)
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