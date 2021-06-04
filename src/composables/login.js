import { ref } from '@vue/reactivity'
import store from '../store'

const LoginService = () => {
    const username = ref('')
    const password = ref('')
    const error = ref(null)
    const login = async () => {
        error.value = null
        const response = await fetch(store.getters.urls.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: store.getters.grantType,
                client_id: store.getters.clientId,
                client_secret: store.getters.clientSecret,
                username: username.value,
                password: password.value,
            })
        })
        const json = await response.json()
        if ("error" in json) {
            error.value = json.message
        }
        return json
    }
    return { username, password, error, login }
}

export default LoginService
