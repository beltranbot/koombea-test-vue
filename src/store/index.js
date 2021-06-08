import { Store } from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'koombea-test',
  storage: window.localStorage
})

const baseUrl = "http://localhost"
const urls = {
  baseUrl,
  login: baseUrl + '/oauth/token',
  contacts: baseUrl + '/api/contacts',
  files: baseUrl + '/api/files'
}
const grantType = 'password'
const clientId = 1
const clientSecret = 'T1Gd9gl8NNZEC2s6qNfAOrbjuDrVit0VcPO60Rsw'

const store = new Store({
  state: {
    user: null,
    isAuthenticated: false,
    urls,
    grantType,
    clientId,
    clientSecret
  },
  mutations: {
    setUser: (state, user) => state.user = user,
    setUserIsAuthenticated: (state, isAuthenticated) => state.isAuthenticated = isAuthenticated
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    urls: state => state.urls,
    grantType: state => state.grantType,
    clientId: state => state.clientId,
    clientSecret: state => state.clientSecret,
    user: state => JSON.parse(state.user)
  },
  plugins: [vuexPersist.plugin]
})

export default store
