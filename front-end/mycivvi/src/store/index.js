import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
	user: null
  },
  getters: {
  },
  mutations: {
	SET_USER_DATA (state, userData) {
		state.user = userData;
		localStorage.setItem('user', JSON.stringify(userData))
		axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
	}
  },
  actions: {
	  register({commit}, credentials) {
		return axios.post('https://mycivvi.com/register', credentials).then(
			({data}) => {
				commit('SET_USER_DATA', data);
			})
	  },
	  login({commit}, credentials) {
                return axios.post('https://mycivvi.com/login', credentials).then(
                        ({data}) => {
                                commit('SET_USER_DATA', data);
                        })
	  }
  },
  modules: {
  }
})
