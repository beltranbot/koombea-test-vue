import store from '../store'

export default {
    setUserCredentials: (response) => {
        store.commit("setUser", response)
        store.commit("setUserIsAuthenticated", true)
        console.log("ghello: ", store.getters.isAuthenticated)
    },
    deleteUserCredentials: () => {
        store.commit("setUser", null)
        store.commit("setUserIsAuthenticated", false)
    }
}
