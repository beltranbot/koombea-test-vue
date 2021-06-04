import store from '../store'

export default {
    setUserCredentials: (response) => {
        store.commit("setUser", JSON.stringify(response))
        store.commit("setUserIsAuthenticated", true)
    },
    deleteUserCredentials: () => {
        store.commit("setUser", null)
        store.commit("setUserIsAuthenticated", false)
    }
}
